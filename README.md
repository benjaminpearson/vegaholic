[![Build Status](https://semaphoreci.com/api/v1/benjaminpearson/skeleton-node/branches/master/badge.svg)](https://semaphoreci.com/benjaminpearson/skeleton-node)

# skeleton-node

NodeJS project skeleton built to allow

## Features
- [Editorconfig](http://editorconfig.org/)
- [Eslint](http://eslint.org/)
  - [Airbnb base](https://github.com/airbnb/javascript)
  - [Eslint comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
  - [JSDoc](https://github.com/gajus/eslint-plugin-jsdoc)
  - [JSON](https://github.com/azeemba/eslint-plugin-json)
  - [Jest](https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest)
  - [Lodash](https://github.com/wix/eslint-plugin-lodash)
  - [No Loops](https://github.com/buildo/eslint-plugin-no-loops)
  - [Node](https://github.com/mysticatea/eslint-plugin-node)
  - [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [Yarn](https://yarnpkg.com/lang/en/)
- [JSDOC](http://usejsdoc.org/)
- [Jest testing](https://facebook.github.io/jest/)
- [NSP](https://github.com/nodesecurity/nsp) security validator
- [Pre-commit hook](https://github.com/observing/pre-commit)
  - Runs [linting on only staged files](https://github.com/okonet/lint-staged)
- Scripts for npm tasks, including publishing releases post verification

## Getting Started
- Clone or fork the repo
- `nvm install`
- `yarn`
- `npm test`
- Start coding :)

### Running Tests
The codebase uses [Jest](https://facebook.github.io/jest/) testing framework. You can run the following commands to get the most out of it.

- `npm test` - Normal
- `npm test --watch` - Watch mode
- `npm test --coverage` - Code coverage

### Upgrading packages
When you first clone or fork this repo, you may want to check all the dependency packages are up to date. You can run `yarn upgrade-interactive` to upgrade to all the latest versions of dependencies.

### Generating & Viewing Documentation
The repo encourages code to be documented using [JSDoc standards](http://usejsdoc.org/). You can generate and view documentation anytime by running `npm run docs --open`.

## Credits
This skeleton has been built from the knowledge gained from repeatedly building NodeJS projects at [Inlight](https://github.com/inlight-media) & [ahm](https://github.com/ahmdigital). The skeleton has been inspired by some of the best practices established in [ahm-skeleton](https://github.com/ahmdigital/ahm-skeleton).
