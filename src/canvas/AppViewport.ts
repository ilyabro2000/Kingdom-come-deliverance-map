import { Viewport } from 'pixi-viewport';
import { EventSystem } from 'pixi.js';
import { World } from '@/canvas/World';

export class AppViewport extends Viewport {
  static readonly WORLD_SIZE = 8192;

  static readonly MAX_WIDTH_ZOOM = AppViewport.WORLD_SIZE;

  static readonly MAX_HEIGHT_ZOOM = AppViewport.WORLD_SIZE;

  static readonly MIN_HEIGHT_ZOOM = 800;

  static readonly MIN_WIDTH_ZOOM = 800;

  constructor(interaction: EventSystem) {
    super({
      events: interaction,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: AppViewport.WORLD_SIZE,
      worldHeight: AppViewport.WORLD_SIZE,
    });
  }

  public init() {
    this
      .clampZoom({
        minWidth: AppViewport.MIN_WIDTH_ZOOM,
        minHeight: AppViewport.MIN_HEIGHT_ZOOM,
        maxWidth: AppViewport.MAX_WIDTH_ZOOM,
        maxHeight: AppViewport.MAX_HEIGHT_ZOOM,
      })
      .clamp({
        left: 0,
        top: 0,
        right: World.TILE_COUNT * World.TILE_SIZE,
        bottom: World.TILE_COUNT * World.TILE_SIZE,
      })
      .drag({
        clampWheel: true,
        underflow: 'center',
      })
      .pinch({
        percent: 0.5,
        factor: 1,
      })
      .wheel({
        smooth: 1,
      })
      .mouseEdges({
        distance: 10,
        speed: 10,
        linear: true,
      });

    this.fit();
    this.moveCenter(AppViewport.WORLD_SIZE / 2, AppViewport.WORLD_SIZE / 2);
    this.setZoom(0.2, true);
  }
}
