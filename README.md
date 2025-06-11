# ChatSpark UI

A modern, customizable React component for building interactive AI chat interfaces — with markdown rendering, code syntax highlighting, typing effects, and analytics hooks.

🔗 [Live Demo](https://garlichck.github.io/ChatSpark/)

[![npm](https://img.shields.io/npm/v/chatspark-ui.svg)](https://www.npmjs.com/package/chatspark-ui)


---

## ✨ Features

- 🧠 AI-style message streaming
- 📝 Markdown + code block rendering
- 🎨 Customizable themes
- 🎯 Event hooks: `onSend`, `onReply`
- 📦 Easy to integrate

---

## 🚀 Installation

```bash
npm install chatspark-ui

## 🚀 Usage Sample

import React from 'react';
import ChatSpark from 'chatspark-ui';
import 'chatspark-ui/dist/ChatSpark.css';


function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>ChatSpark Demo</h1>
      <ChatSpark
        placeholder="Ask something..."
        botReply={`Here is a **markdown** reply:\n\n\`\`\`js\nconsole.log('Hello from ChatSpark!');\n\`\`\``}
      />
    </div>
  );
}

export default App;

