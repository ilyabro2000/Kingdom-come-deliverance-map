import { Assets, Container, Sprite } from 'pixi.js';

export enum Worlds {
  FIRST = 'first',
  SECOND = 'second',
}

export class World extends Container {
  static readonly TILE_SIZE = 256;

  static readonly TILE_COUNT = 32;

  constructor(name: Worlds) {
    super();
    const { TILE_COUNT, TILE_SIZE } = World;

    this.interactiveChildren = false;

    for (let row = 1; row <= TILE_COUNT; row += 1) {
      for (let column = 1; column <= TILE_COUNT; column += 1) {
        const tileUrl = `${name}/images/map/world/1x/row-${row}-column-${column}.webp`;
        Assets.load(tileUrl).then(() => {
          const tileSprite = Sprite.from(tileUrl);

          tileSprite.x = (column - 1) * TILE_SIZE;
          tileSprite.y = (row - 1) * TILE_SIZE;
          tileSprite.width = TILE_SIZE;
          tileSprite.height = TILE_SIZE;
          tileSprite.cullable = true;
          tileSprite.interactive = false;

          this.addChild(tileSprite);
        });
      }
    }
  }
}
