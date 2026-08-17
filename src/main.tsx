import { render } from 'preact';
import { App } from './app/App';
import './app/app.css';

const root = document.getElementById('app');
if (root === null) {
  throw new Error('Missing #app root');
}

render(<App />, root);

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    void navigator.serviceWorker.register('/sw.js');
  });
}
