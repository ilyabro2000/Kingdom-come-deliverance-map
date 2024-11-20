import { Application } from 'pixi.js';
import { initDevtools } from '@pixi/devtools';

export class App extends Application {
  constructor(target: HTMLElement) {
    super();

    this.init({
      view: document.createElement('canvas'),
      resolution: Math.max(window.devicePixelRatio, 2),
      backgroundAlpha: 0,
      resizeTo: window,
      antialias: true,
    }).then(() => {
      target.appendChild(this.canvas);
    });


    initDevtools({ app: this });
  }
}
