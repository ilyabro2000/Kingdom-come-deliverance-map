import { App } from '@/canvas/App';
import '@/styles/main.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const app = new App(rootElement);
