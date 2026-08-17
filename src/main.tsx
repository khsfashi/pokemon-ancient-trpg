import { render } from 'preact';
import { App } from './app/App';
import './app/app.css';
import './app/motion.css';
import { registerAppServiceWorker } from './platform/serviceWorker';

const root = document.getElementById('app');
if (root === null) {
  throw new Error('Missing #app root');
}

render(<App />, root);

if (import.meta.env.PROD) {
  window.addEventListener('load', () => {
    void registerAppServiceWorker();
  });
}
