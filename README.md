# Constructor.io Quizzes UI Library

[![npm](https://img.shields.io/npm/v/@constructor-io/constructorio-ui-quizzes)](https://www.npmjs.com/package/@constructor-io/constructorio-ui-quizzes)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Constructor-io/constructorio-ui-quizzes/blob/main/LICENSE)

A UI Library that provides React components to manage the fetching and rendering logic for [Constructor.io's Quizzes](https://constructor.io/products/quizzes/).

## Introduction

[Constructor.io's Quizzes](https://constructor.io/products/quizzes/) are interactive experiences that personalize the shopping journey for each of your customers. This UI library simplifies the integration process by providing React Components that handle the fetching and rendering logic for Quizzes. Typescript support is available.

[Our storybook docs](https://constructor-io.github.io/constructorio-ui-quizzes) are the best place to explore the behavior and the available configuration options for this UI Library.

![Quizzes-UI-Example](assets/coffee-quiz.gif)

## Installation

```bash
npm i @constructor-io/constructorio-ui-quizzes
```

## Usage

### Using the React Component

The `CioQuiz` component handles state management, data fetching, and rendering logic for the entire quiz.

```jsx
import CioQuiz from '@constructor-io/constructorio-ui-quizzes';

function YourComponent() {
  return (
    <div>
      <CioQuiz quizId='coffee-quiz' apiKey='key_n4SkMH5PFWLdStQZ' />
    </div>
  );
}
```

### Using the Javascript Bundle

This is a framework agnostic method that can be used in any JavaScript project. The `CioQuiz` function provides a simple interface to inject an entire Quizzes UI into the provided `selector`.
In addition to [Quiz component props](https://constructor-io.github.io/constructorio-ui-quizzes/?path=/docs/quiz-component--docs), this function also accepts `selector` and `includeCSS`.

```js
import CioQuiz from '@constructor-io/constructorio-ui-quizzes/constructorio-ui-quizzes-bundled';

CioQuiz({
  selector: '#quiz-container',
  quizId: 'coffee-quiz',
  apiKey: 'key_n4SkMH5PFWLdStQZ',
  includeCSS: true, // Include the default CSS styles. Defaults to true.
  resultCardOptions: {
    resultCardRegularPriceKey: 'price',
  },
  questionsPageOptions: {
    skipQuestionButtonText: 'Skip',
  },
  // ... additional arguments
});
```

## Custom Styling

### Library defaults

By default, importing React components from this library does not pull any css into your project.

If you wish to use some starter styles from this library, add an import statement similar to the example import statement below:

```js
import '@constructor-io/constructorio-ui-quizzes/styles.css';
```

- These starter styles can be used as a foundation to build on top of, or just as a reference for you to replace completely.
- To opt out of all default styling, do not import the `styles.css` stylesheet.
- All starter styles in this library are scoped within the `.cio-quiz` css selector.
- These starter styles are intended to be extended by layering in your own css rules
- If you import the starter styles, `CioQuiz` component will take up the full width and height of its parent container

> Please note the starter styles utilize @container queries and enable responsive styles for our quizzes based on the size of their container element. Since this feature is supported by modern browsers, polyfills have not been included in this library. However, if you want to support older browsers, you can add fallback styles or use a [polyfill](https://github.com/GoogleChromeLabs/container-query-polyfill).

## Troubleshooting

### Known Issues

**Older Javascript environments**

The library provides two different builds. CommonJS (cjs) and ECMAScript Modules (mjs)

For ECMAScript Modules (mjs) build. The Javascript version is ESNext which might not be supported by your environment.
If that's the case and your environment is using an older Javascript version like ES6 (ES2015), you might get this error.

`Module parse failed: Unexpected token (15:32)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file`

To solve this you can import the CommonJS (cjs) build which supports ES6 (ES2015) syntax:

`import CioQuiz from '@constructor-io/constructorio-ui-quizzes/cjs'`

**ESLint**

There is a known issue with ESLint where it fails to resolve the paths exposed in the `exports` statement of NPM packages. If you are receiving the following error, you can safely disable ESLint using `// eslint-disable-line` for that line.

`Unable to resolve path to module '@constructor-io/constructorio-ui-quizzes/styles.css'`

Relevant open issues:

[Issue 1868](https://github.com/import-js/eslint-plugin-import/issues/1868)

[Issue 1810](https://github.com/import-js/eslint-plugin-import/issues/1810)

## Local Development

### Development scripts

```bash
npm ci                  # install dependencies for local dev
npm run dev             # start a local dev server for Storybook
npm run lint            # run linter
```

## Publishing new versions

Dispatch the [Publish](https://github.com/Constructor-io/constructorio-ui-quizzes/actions/workflows/publish.yml) workflow in GitHub Actions. You're required to provide two arguments:

- **Version Strategy**: `major`, `minor`, or `patch`.
- **Title**: A title for the release.

This workflow will automatically:

1. Bump the library version using the provided strategy.
2. Create a new git tag.
3. Create a new GitHub release.
4. Compile the library.
5. Publish the new version to NPM.
6. Deploy the Storybook docs to GitHub Pages.
7. Report the progress on the [relevant Slack channel](https://constructor.slack.com/archives/C061D3CFVR9).

#### ℹ️ Note: Please don't manually increase the package.json version or create new git tags.

The library version is tracked by releases and git tags. We intentionally keep the package.json version at `0.0.0` to avoid pushing changes to the `main` branch. This solves many security concerns by avoiding the need for branch-protection rule exceptions.

## New Storybook Version

Dispatch the [Deploy Storybook](https://github.com/Constructor-io/constructorio-ui-quizzes/actions/workflows/deploy-storybook.yml) workflow in GitHub Actions.

#### ℹ️ Note: This is already done automatically when publishing a new version.

## Supporting Docs

- [Storybook 7 Introduction](https://storybook.js.org/docs/7.0/react/get-started/introduction)
- [Typescript Docs](https://www.typescriptlang.org/docs/)

## Demoing quizzes in a sandbox environment

Please fork from the following code sandboxes to experiment with the quizzes UI library integrated in various approaches.

- [Simple React app](https://codesandbox.io/s/quizzes-ui-integration-3cggdh)
- [Plain HTML, CSS, JS](https://codesandbox.io/s/quizzes-ui-integration-plain-4f4dns)
