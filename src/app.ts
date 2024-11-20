import { App } from '@/canvas/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const app = new App(rootElement);
