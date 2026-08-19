import { render } from 'preact';
import { App } from './app/App';
import './app/app.css';
import './app/motion.css';
import './app/illustration.css';
import './app/p8_3_theme.css';
import './app/p8_3_polish.css';
import './app/p8_3_transition.css';
import './app/v2/opening-v2.css';
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
