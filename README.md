# 💬 ChatSpark UI

A modern, customizable **React component** for building AI-style chat interfaces — with support for **markdown**, **syntax-highlighted code blocks**, **streaming effects**, and **analytics hooks**.

[![npm](https://img.shields.io/npm/v/chatspark-ui.svg)](https://www.npmjs.com/package/chatspark-ui)
[![GitHub stars](https://img.shields.io/github/stars/garlichck/ChatSpark?style=social)](https://github.com/garlichck/ChatSpark/stargazers)

🔗 [**Live Demo**](https://garlichck.github.io/ChatSpark/)

---

## ✨ Features

- 🧠 **AI-style response streaming**
- 📝 **Markdown & code block rendering**
- 🎨 **Customizable theme (colors, fonts, radius)**
- 🎯 **Hooks**: `onSend` and `onReply` for analytics or logging
- ⚡ **Lightweight**, dependency-minimal, easy to integrate

---

## 📦 Installation

```bash
npm install chatspark-ui
```

---

## ⚡ Usage Example

```jsx
import React from 'react';
import ChatSpark from 'chatspark-ui';
import 'chatspark-ui/dist/ChatSpark.css';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>ChatSpark Demo</h1>
      <ChatSpark
        placeholder="Ask something..."
        botReply={`Here is a **markdown** reply:

\`\`\`js
console.log('Hello from ChatSpark!');
\`\`\``}
      />
    </div>
  );
}

export default App;
```

---

## ⚙️ Props & Customization

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `botReply`        | `string`   | Static reply to simulate a bot response (markdown supported) |
| `placeholder`     | `string`   | Input placeholder |
| `initialMessages` | `Array`    | Pre-filled chat history |
| `onSend`          | `function` | Called when user sends a message |
| `onReply`         | `function` | Called when bot finishes streaming reply |
| `theme`           | `object`   | Customize bubble styles (`userBg`, `botBg`, `fontFamily`, `borderRadius`, etc.) |

---

## 💡 Why Use ChatSpark?

If you're building:
- An AI assistant interface
- A chatbot demo or tutorial
- A product walkthrough with chat
- An LLM frontend

Then **ChatSpark UI** helps you move faster and look professional from day one.

---

## 🛠 Roadmap

- ✅ Basic streaming & markdown support
- ⏳ Typewriter effect per character
- ⏳ Multiple bot messages (e.g., thinking delay)
- ⏳ Theme presets (light/dark)
- ⏳ Pro version with plugin support

---

## 💖 Support This Project

If you find ChatSpark useful, consider starring the repo or sponsoring future development:

👉 [Sponsor on GitHub](https://github.com/sponsors/garlichck)  
☕ [Buy Me a Coffee](https://buymeacoffee.com/cheekong)

---

## 📄 License

MIT © [Chee Kong Hong](https://github.com/garlichck)