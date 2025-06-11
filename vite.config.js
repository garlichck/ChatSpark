import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/ChatSpark.jsx'),
      name: 'ChatSpark',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-markdown',
        'react-syntax-highlighter'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-markdown': 'ReactMarkdown',
          'react-syntax-highlighter': 'SyntaxHighlighter'
        }
      }
    }
  },
  // ✅ Automatically copy ChatSpark.css to dist/ after build
  closeBundle() {
    try {
      copyFileSync('src/components/ChatSpark.css', 'dist/ChatSpark.css');
      console.log('✅ ChatSpark.css copied to dist/');
    } catch (err) {
      console.error('❌ Failed to copy ChatSpark.css:', err);
    }
  }
});
