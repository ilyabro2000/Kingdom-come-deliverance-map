import { Application } from 'pixi.js';
import { initDevtools } from '@pixi/devtools';
import { AppViewport } from '@/canvas/AppViewport';

export class App extends Application {
  public viewport?: AppViewport;

  constructor(target: HTMLElement) {
    super();

    this.init({
      view: document.createElement('canvas'),
      // resolution: Math.max(window.devicePixelRatio, 2),
      backgroundAlpha: 0,
      resizeTo: window,
      antialias: true,
      width: window.innerWidth,
      height: window.innerHeight,
    }).then(() => {
      target.appendChild(this.canvas);

      this.viewport = new AppViewport(this.renderer.events);
      this.stage.addChild(this.viewport);
    });

    initDevtools({ app: this });
  }
}
