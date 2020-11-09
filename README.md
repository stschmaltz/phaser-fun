Repo template from https://github.com/digitsensitive/phaser3-typescript

# Messing around with Phaser 3 and TypeScript

## Getting started

### Prerequisites

```
Download and install npm with Node.js @ https://nodejs.org/en
```

### Installing

Select a folder, navigate to it, and clone this repository
with this command-line:

```
git clone https://github.com/digitsensitive/phaser3-typescript.git
```

Install the dependencies with this command-line:

```
npm install
```

### Building and Running

Perform a quick build (bundle.js) and start server:

```
npm run dev
```

## Game Examples

Check the `package.json` for the correct scripts to start projects.
For example you can start the `Candy Crush` project with:

```
npm run candy-crush
```

- [Coin Runner](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/games/coin-runner)
- [Alpha Adjust](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/games/alpha-adjust)
- [Snake](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/games/snake)
- [Blockade](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/games/blockade)
- [Asteroid](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/games/asteroid)
- [Flappy Bird](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/games/flappy-bird)
- [Space Invaders](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/games/space-invaders)
- [Super Mario Land](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/games/super-mario-land)
- [Candy Crush](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/games/candy-crush)

If you have any suggestion for a next game example, let me know!

## Experimental fun projects

Check the `package.json` for the correct scripts to start projects.
For example you can start the `Game of Life` project with:

```
npm run game-of-life
```

- [Game of Life](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/experimental/game-of-life)
- [Raycasting](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/experimental/raycasting)
- [Untextured Raycaster](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/experimental/untextured-raycaster)
- [Point in Polygon](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/experimental/point-in-polygon)
- [Fractal Tree](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/experimental/fractal-tree)
- [Lissajous curve](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/experimental/lissajous-curve)
- [Procedural Generation](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/experimental/procedural-generation)
- [Cellular Automaton](https://github.com/digitsensitive/phaser3-typescript/blob/master/src/experimental/cellular-automaton)

## Game Programming Patterns

Check the `package.json` for the correct scripts to start projects.
For example you can start the `Factory Method` project with:

```
npm run factory-method
```

- [Factory Method](https://github.com/digitsensitive/phaser3-typescript/blob/master/patterns/creational-design-patterns/factory-method)

## Cheat Sheets

- [Browse through the Cheat Sheets](https://github.com/digitsensitive/phaser3-typescript/blob/master/cheatsheets)

## Tutorials

- [Learn to create a HTML5 Game in 5 Minutes](https://medium.com/@digit.sensitivee/learn-to-create-a-html5-game-in-5-minutes-604118f5d0ab)
- [Game Programming Patterns: The Factory Method by Example](https://medium.com/@digit.sensitivee/game-programming-patterns-the-factory-method-87d7f8c12081)

## External Resources

- [Phaser 3 Framework](https://github.com/photonstorm/phaser)
- [Phaser 3 Docs with TypeScript Definition File](https://github.com/photonstorm/phaser3-docs)
- [Phaser 3 Online Docs](https://photonstorm.github.io/phaser3-docs/index.html)
- [Phaser 3 Official Examples](https://github.com/photonstorm/phaser3-examples)
- [Phaser 3 Discourse](https://phaser.discourse.group)

## Helpful tools

- [Leshy SpriteSheet Tool](https://www.leshylabs.com/apps/sstool)
- [Tiled](https://www.mapeditor.org)
- [Littera](http://kvazars.com/littera)
- [Tile Extruder](https://github.com/sporadic-labs/tile-extruder)

## TypeScript Configuration

### tsconfig.json

The following `Compiler Options` have been set in the `tsconfig.json` file:

| Option | Value     |
| :------------- | :------------- |
| target       | ES2016 |
| module       | CommonJS |
| sourceMap    | true |
| noImplicitAny| true [WIP] |
| strict       | true [WIP] |

You can see the complete list of the available options at [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
Interesting read about [setting up a nodejs-project](https://codeburst.io/tips-for-setting-up-a-typescript-nodejs-project-5d1c48dc1a2d).

