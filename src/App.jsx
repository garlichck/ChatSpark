// src/App.jsx
import React from 'react';
import ChatSpark from './components/ChatSpark';
import './components/ChatSpark.css';

function App() {
  const handleSend = (text) => {
    console.log('[User]', text);
  };

  const handleReply = (text) => {
    console.log('[Bot]', text);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h1 style={{ textAlign: 'center' }}>ChatSpark Demo</h1>
      <ChatSpark
        placeholder="Try asking something..."
        botReply={`Here is a **markdown** reply with a code block:

\`\`\`js
console.log('Hello from ChatSpark!');
\`\`\``}
        onSend={handleSend}
        onReply={handleReply}
        theme={{
          userBg: '#e0f7fa',
          botBg: '#f1f8e9',
          borderRadius: '10px',
          fontFamily: 'Courier New, monospace'
        }}
      />
    </div>
  );
}

export default App;
