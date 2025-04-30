# LCC-CS233JS
Resources for the LCC CS 233 JS (Intermediate JavaScript) course. Taken Spring term 2025

Original course resources are available here:
https://github.com/LCC-CIT/CS233JS-CourseMaterials

Site map can be found here:
https://thejoshuaevans.com/LCC-CS233JS

# Project Structure
All distributed resources live in the [docs](./docs/) directory - this folder is automatically deployed by github pages and all content in this folder will become available on the live website
```py
LCC-CIS233JS/
├─ .github/
│  ├─ workflows/      # Github Workflows for CI/CD
├─ .vscode/         # VSCode settings and configurations
├─ docs/            # All code resources live here
│  ├─ labs/           # Code specific to each lab
│  ├─ src/            # Lab agnostic methods
│     ├─ utils/         # Lab agnostic utilities
├─ webpack/         # Webpack config files for all sites
│  ├─ utils/          # Utilities used only by webpack
├─ .editorconfig    # Helpful editor configurations
├─ .gitignore       # Files git should ignore
├─ .nvmrc           # Lets NVM know which version of Nodejs to use
├─ eslint.config.js # ESLint configuration file
├─ package.json     # Standard Nodejs package.json
├─ README.md        # This document!
```

# Labs
## Lab 1
- [Lab 1 - Concentration](./docs/labs/lab1/concentration/)
- [Lab 1 - Stopwatch](./docs/labs/lab1/stopwatch/)
- [Lab 1 - Tic-Tac-Toe](./docs/labs/lab1/tic-tac-toe/)

## Lab 2
- [Lab 2 - Concentration](./docs/labs/lab2/concentration/)
- [Lab 2 - Stopwatch](./docs/labs/lab2/stopwatch/)
- [Lab 2 - Tic-Tac-Toe](./docs/labs/lab2/tic-tac-toe/)

## Lab 3
- [Lab 3 - Dice Game](./docs/labs/lab3/)

## Lab 4
- [Lab 4 - Bookmarker](./docs/labs/lab4/bookmarker)
- [Lab 4 - Todo List](./docs/labs/lab4/bookmarker)

# Development
All actions and scripts should be run from this root directory, NOT the lab directories. To handle initial setup, run the following commands
```sh
nvm use   # Only if using NVM
npm ci    # Perform a "careful" install
npm test  # Run all unit tests
npm lint  # Run linting
```

The [Live Server](https://marketplace.visualstudio.com/items/?itemName=ritwickdey.LiveServer) VSCode extension is used to perform general development - any HTML page can be hosted by pressing the "Show Preview" button while viewing that page in VSCode. Webpack can also be used to host test sites and watch for changes. To use webpack, run the appropriate npm script from this directory (see [NPM Scripts](#npm-scripts) for more details on available scripts)

# NPM Scripts
The following NPM scripts are available

## `test`
Perform all unit tests

## `lint`
Perform linting on all development files

## `webpack:*:build`
Perform a webpack build on the desired website (replace * with the website name). For example:
```sh
npm run webpack:todolist:build
```

## `webpack:*:watch`
Make webpack build a desired website as well as watch for additional changes that trigger an automatic rebuild. For example:
example:
```sh
npm run webpack:todolist:watch
```

# Attribution
By [Joshua Evans](https://thejoshuaevans.com) - 2025-04-30
