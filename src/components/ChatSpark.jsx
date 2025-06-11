// src/components/ChatSpark.jsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './ChatSpark.css';

function ChatSpark({
  botReply = 'Thanks for your message!',
  placeholder = 'Type your message...',
  disabled = false,
  initialMessages = [
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ],
  theme = {
    userBg: '#daf1ff',
    botBg: '#eee',
    borderRadius: '6px',
    fontFamily: 'Arial, sans-serif'
  },
  onSend = () => { },
  onReply = () => { }
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);

  const streamBotReply = (fullText) => {
    setIsStreaming(true);
    let i = 0;
    let currentText = '';

    const interval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText[i];
        setMessages(prev => {
          const updated = [...prev];
          const last = updated[updated.length - 1];

          if (last.sender === 'bot-stream') {
            updated[updated.length - 1] = {
              ...last,
              text: currentText
            };
          } else {
            updated.push({ sender: 'bot-stream', text: currentText });
          }

          return updated;
        });
        i++;
      } else {
        clearInterval(interval);
        setMessages(prev => prev.map(msg =>
          msg.sender === 'bot-stream' ? { sender: 'bot', text: msg.text } : msg
        ));
        onReply(fullText);
        setIsStreaming(false);
      }
    }, 50);
  };

  const handleSend = () => {
    if (!input.trim() || isStreaming || disabled) return;
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    onSend(input);
    setInput('');

    setTimeout(() => {
      streamBotReply(botReply);
    }, 500);
  };

  const messageStyle = (sender) => ({
    backgroundColor: sender === 'user' ? theme.userBg : theme.botBg,
    borderRadius: theme.borderRadius,
    fontFamily: theme.fontFamily
  });

  const renderers = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={oneDark}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className="chat-spark">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.sender.includes('bot') ? 'bot' : 'user'}`}
            style={messageStyle(msg.sender.includes('bot') ? 'bot' : 'user')}
          >
            <ReactMarkdown components={renderers}>{msg.text}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={placeholder}
          disabled={isStreaming || disabled}
        />
        <button onClick={handleSend} disabled={isStreaming || disabled}>Send</button>
      </div>
    </div>
  );
}

export default ChatSpark;
