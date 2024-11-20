import { Viewport } from 'pixi-viewport';
import { WORLD_HEIGHT, WORLD_WIDTH } from '@/constants';

export class AppViewport extends Viewport {
  constructor(interaction) {
    super({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: WORLD_WIDTH,
      worldHeight: WORLD_HEIGHT,
      interaction,
    });
  }
}
