# MIT_frontend

`master` [![build](https://travis-ci.org/MentorInTech/MIT_frontend.svg?branch=master)](https://travis-ci.org/MentorInTech/MIT_frontend) | `develop` [![build](https://travis-ci.org/MentorInTech/MIT_frontend.svg?branch=develop)](https://travis-ci.org/MentorInTech/MIT_frontend)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Please refer to the complete [User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) for more information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Test Scripts

- `npm test`: main script to test your code. You should **ALWAYS** run this script and make sure everything passes before you submit any pull request
  - Dependencies: `react-scripts test`

## Static Type Checking and Linting

**Static Type Checking** fills a huge gap in JavaScript's flexibility. While the flexibility
is amazing, it is inevitable that we run into problems with types as the project grows
large. The easiest example is `null` or `undefined` types - we might accidentally
pass an unchecked value to a function and everything blows up at runtime (e.g. production).
We use [TypeScript](https://www.typescriptlang.org/) for static type checking.

**Linting** makes sure the team follows a consistent coding style and helps keeping
code base clean and easy to follow. Since the project uses TypeScript, we use
[TSLint](https://palantir.github.io/tslint/) for linting.

Most editors support real-time linting, and this section lists quick setup guide
for some popular editors.

Feel free to add to the list if your favourite editor isn't listed in this section.

### Setting up for Atom

It is strongly recommended that you use [Atom IDE](https://ide.atom.io/) with Atom.

Once you installed Atom editor locally, simply run the following command:

```shell
apm install atom-ide-ui ide-typescript ide-json
```

That's it - `ide-typescript` will configure everything you need based on this project's
config files.

### Setting up for Sublime Text 3

We will use Sublime's Package Control to install the required packages:

1. Make sure you have a local nvm setup
  - Open a terminal and type `nvm --version` - you should see a version number printed
  - If not, follow the [installation guide](https://github.com/creationix/nvm#install-script) to install nvm
2. Open Sublime Text > Preferences > Package Control > Install Package
3. Search for `Typescript` and select it to install
