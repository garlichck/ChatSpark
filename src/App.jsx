import React from 'react';
import ChatSpark from './components/ChatSpark';

function App() {

  const handleSend = (text) => {
    console.log('[User Message]', text);
    // You could also send this to an API or analytics platform
    // fetch('/api/log', { method: 'POST', body: JSON.stringify({ type: 'user', text }) });
  };

  const handleReply = (text) => {
    console.log('[Bot Reply]', text);
    // Similarly, you could store replies or analyze them
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ChatSpark
        onSend={handleSend}
        onReply={handleReply}
        initialMessages={[
          { sender: 'bot', text: 'Welcome to ChatSpark!' },
          { sender: 'user', text: 'Hi there!' }
        ]}
        theme={{
          userBg: '#e0ffe0',
          botBg: '#fff3cd',
          borderRadius: '10px',
          fontFamily: 'Courier New, monospace'
        }}
        botReply="This is a custom reply from ChatSpark!"
        placeholder="Start chatting here..."
        disabled={false}
      />
    </div>
  );
}

export default App;