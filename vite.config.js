import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
  }
});
