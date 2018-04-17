# MIT_frontend

`master` [![build](https://travis-ci.org/MentorInTech/MIT_frontend.svg?branch=master)](https://travis-ci.org/MentorInTech/MIT_frontend) | `develop` [![build](https://travis-ci.org/MentorInTech/MIT_frontend.svg?branch=develop)](https://travis-ci.org/MentorInTech/MIT_frontend)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Please refer to the complete [User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) for more information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>

Currently root page is blank.
Go to [http://localhost:3000/signup](http://localhost:3000/signup) to view signup page.<br>
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Test Scripts

- `npm test`: main script to test your code. You should **ALWAYS** run this script and make sure everything passes before you submit any pull request
  - Dependencies: `npm lint`, `react-scripts test`
- `npm run lint`: lints JavaScript and CSS files for coding style
  - Dependencies: `npm lint:js`, `npm lint:css`
- `npm run lint:js`: lints JavaScript files only, using [ESLint](https://eslint.org/) and slight alternation of [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript)
- `npm run lint:css`: lints CSS files only, using [stylelint](https://github.com/stylelint/stylelint) and the [standard guide](https://github.com/stylelint/stylelint-config-standard)
- `npm run lint:fix`: lints JavaScript and CSS files and attempts to fix problems
  - Dependencies: `npm lint:js:fix`, `npm lint:css:fix`
- `npm run lint:js:fix` lints and attempts to fix JavaScript style violation
- `npm run lint:css:fix` lints and attempts to fix CSS style violation

## Linting

Linting makes sure the team follows a consistent coding style and helps keeping
code base clean and easy to follow. Most editors support real-time linting,
so you don't to wait until you finished everything to see code style advices.

Here's a quick setup guide for some popular editors.

Feel free to add to the list if your favourite editor isn't listed in this section.

### Prerequisite

Before you began, you must have installed the linters your computer. Simply run
the following to install dev dependencies:

```shell
npm install
```

If you wish to run linters outside of NPM environment (as maybe useful while
setting up editor plugins), you might want to install the modules globally:

```shell
npm install --global \
    babel-eslint \
    eslint-config-airbnb \
    eslint-plugin-import \
    eslint-plugin-react \
    stylelint \
    stylelint-config-standard
```

### Setting up for Atom

It is strongly recommended that you use [Atom IDE](https://ide.atom.io/) with Atom.

Once you installed Atom editor locally, simply run the following command:

```shell
apm install atom-ide-ui ide-typescript ide-json linter-eslint linter-stylelint
```

Open up Atom, and select "Never" for all of `linter-eslint`'s dependencies -
you don't need them because Atom IDE already comes with linting API.

Once you have done so, you should automatically get linting advices every time
you saved a file. These style guide comes from the `.eslintrc` and `.stylelintrc`
files in the repository, and will be the same for every one.

### Setting up for Sublime Text 3

We will use Sublime's Package Control to install the required packages:

1. Make sure you have a local nvm setup
  - Open a terminal and type `nvm --version` - you should see a version number printed
  - If not, follow the [installation guide](https://github.com/creationix/nvm#install-script) to install nvm
2. Open Sublime Text > Preferences > Package Control > Install Package
3. Search for `SublimeLinter` and select it
4. Repeat step 2 for `SublimeLinter-eslint` and `SublimeLinter-stylelint`
5. Restart Sublime Text - you should begin to see linting suggestions inline
