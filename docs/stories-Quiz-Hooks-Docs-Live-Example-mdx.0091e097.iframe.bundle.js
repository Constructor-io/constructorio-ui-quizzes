"use strict";(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[44,379],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Quiz/Hooks/Docs/Live Example.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_enes_constuctor_constructorio_ui_quizzes_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_HooksStories_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Quiz/Hooks/HooksStories.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,_Users_enes_constuctor_constructorio_ui_quizzes_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_HooksStories_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"interactive-live-example",children:"Interactive Live Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{className:"live-example",sourceState:"none",of:_HooksStories_stories__WEBPACK_IMPORTED_MODULE_2__.BasicUsage}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"controls",children:"Controls"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_enes_constuctor_constructorio_ui_quizzes_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/Quiz/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>docsControls,PG:()=>argTypes,yC:()=>storiesControls});var argTypes={quizId:{description:"ID of the quiz",control:{type:"text"}},quizVersionId:{description:"Optional quiz version Id"},apiKey:{description:"Your Constructor API key. Either `apiKey` or `cioJsClient` are required"},"callbacks.onQuizNextQuestion":{description:"Callback function to be called when the next question is loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(question) => void",detail:"(question: QuestionWithAnswer) => void"}}},"callbacks.onQuizResultsLoaded":{description:"Callback function to be called when the quiz results are loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(results) => void",detail:"(results: QuizResultDataPartial) => void"}}},"callbacks.onQuizResultClick":{description:"Callback function to be called when a quiz result is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result, position: number) => void",detail:"(result: QuizResultDataPartial, position: number) => void"}}},"callbacks.onAddToCartClick":{description:"Callback function to be called when the add to cart button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},"callbacks.onAddToFavoritesClick":{description:"Callback function to be called when the add to favorites button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},"callbacks.onEmailResults":{description:"Callback function to be called when emailing results.",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(args) => void",detail:"(args: QuizEmailResults) => void"}}},cioJsClient:{description:"Optional custom constructor instance. Either `apiKey` or `cioJsClient` are required"},primaryColor:{description:"RGB value string for quiz primary theme color ie: `'255, 82, 48'`",control:{type:"text"},defaultValue:{summary:"35, 71, 199"}},"resultCardOptions.resultCardRegularPriceKey":{description:"Key name for the regular price in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"regular_price"},type:{summary:"string"}}},"resultCardOptions.resultCardSalePriceKey":{description:"Key name for the sale price in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"sale_price"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingCountKey":{description:"Key name for the rating count in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_count"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingScoreKey":{description:"Key name for the rating score in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_score"},type:{summary:"string"}}},"resultCardOptions.renderResultCardPriceDetails":{description:"Callback function to render result card price details",control:!1,table:{subcategory:"resultCardOptions",defaultValue:{summary:"null"},type:{summary:"(result) => JSX.Element",detail:"(result: QuizResultDataPartial) => JSX.Element"}}},"resultsPageOptions.numResultsToDisplay":{description:"Number of results to display on the results page",control:{type:"number"},table:{subcategory:"resultsPageOptions",defaultValue:{summary:5},type:{summary:"number"}}},"resultsPageOptions.favoriteItems":{description:"Array of favorite item IDs",control:!1,table:{subcategory:"resultsPageOptions",type:{summary:"string[]"}}},"resultsPageOptions.showShareResultsButton":{description:"Boolean for whether or not to show share results button on the results page",control:{type:"boolean"},table:{subcategory:"resultCardOptions",defaultValue:{summary:!0},type:{summary:"boolean"}}},"sessionStateOptions.showSessionModal":{description:"Boolean for whether or not to show session modal to hydrate quiz on the results page",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.showSessionModalOnResults":{description:"Boolean for whether or not to show session modal to hydrate quiz",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.sessionStateKey":{description:"Key name where session storage state is saved",control:{type:"text"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:"quizState"},type:{summary:"string"}}},enableHydration:{description:"Boolean for whether or not to hydrate quiz questions and results on page reload",defaultValue:{summary:"true"}}},docsControls={sort:"requiredFirst",exclude:["sessionStateOptions","callbacks","resultsPageOptions","resultCardOptions"]},storiesControls={include:["apiKey","quizId","quizVersionId","primaryColor"]}}}]);