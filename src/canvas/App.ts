import { Application } from 'pixi.js';
import { initDevtools } from '@pixi/devtools';
import { AppViewport } from '@/canvas/AppViewport';
import { World, Worlds } from '@/canvas/World';

export class App extends Application {
  public viewport?: AppViewport;

  private _world?: World;

  private _worldName? = Worlds.FIRST;

  constructor(target: HTMLElement) {
    super();

    this.init({
      view: document.createElement('canvas'),
      backgroundAlpha: 0,
      resizeTo: window,
      antialias: true,
      width: window.innerWidth,
      height: window.innerHeight,
    }).then(() => {
      target.appendChild(this.canvas);

      this.viewport = new AppViewport(this.renderer.events);
      this.stage.addChild(this.viewport);
      this.worldName = Worlds.FIRST;
    });

    initDevtools({ app: this });
  }

  public get worldName(): Worlds | undefined {
    return this._worldName;
  }

  public set worldName(name: Worlds) {
    this._worldName = name;

    this.initWorld();
  }

  public initWorld() {
    if (!this._worldName) return;
    this._world && this._world.destroy();

    this._world = new World(this._worldName);
    this.viewport?.init();
    this.viewport?.addChild(this._world);
  }
}
