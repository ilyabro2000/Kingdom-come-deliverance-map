import { Viewport } from 'pixi-viewport';
import { WORLD_HEIGHT, WORLD_WIDTH } from '@/constants';
import { EventSystem } from 'pixi.js';

export class AppViewport extends Viewport {
  constructor(interaction: EventSystem) {
    super({
      events: interaction,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: WORLD_WIDTH,
      worldHeight: WORLD_HEIGHT,
    });
  }
}
