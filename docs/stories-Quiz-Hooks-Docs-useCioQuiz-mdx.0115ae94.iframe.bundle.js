"use strict";(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[608,379],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Quiz/Hooks/Docs/useCioQuiz.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>useCioQuiz});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),HooksStories_stories=__webpack_require__("./src/stories/Quiz/Hooks/HooksStories.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:HooksStories_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"usecioquiz",children:"useCioQuiz"}),"\n",(0,jsx_runtime.jsxs)("p",{children:["Hook takes ",(0,jsx_runtime.jsx)(_components.a,{href:"#args",children:"args"})," as a parameter and returning props giving you complete control over your UI."]}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"The hook useCioQuiz also returns a number of prop getters that enable you to quickly obtain the props you need for certain HTML elements, allowing you to easily get the full benefit of Constructor's tracking and styling without any hassle."}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Note: Any callbacks passed when calling the useCioQuiz hook, will also be returned as part of the props."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,jsx_runtime.jsx)(dist.UG,{children:"### state\n\n>Quiz state. This includes quiz answers and info.\n\n  ```jsx\n  const { state } = useCioQuiz(args);\n  ```\n\n- `answers`: User entered/selected answers including:\n  \n  | property    | type                                                          | description                                 |\n  |-------------|---------------------------------------------------------------|---------------------------------------------|\n  | inputs      | `[key: string]: {type: string , value: string | string[];}`   | User entered/selected answers inputs |\n  | isLastAnswer| Boolean                                                       | True if it's the last question, False otherwise|\n\n\n- `quiz`: Quiz info including:\n  \n  | property                      | type                                    | description                          |\n  | :-----------------------------| :---------------------------------------| :------------------------------------|\n  | currentQuestion               | Object                                  | The current question in the quiz.    |\n  | results                       | Object                                  | The quiz results                     |\n  | requestState                  | `'STALE'|'LOADING'|'SUCCESS'|'ERROR'` | The API request state                |\n  | versionId                     | string                                  | The quiz version                     |\n  | sessionId                     | string                                  | The quiz session                     |\n  | selectedOptionsWithAttributes | string[]                                | The selected options with attributes |\n"}),"\n",(0,jsx_runtime.jsx)("hr",{}),"\n","\n",(0,jsx_runtime.jsx)(dist.UG,{children:"### events\n\n> Events to call to trigger constructor events and quiz actions.\n\n  ```jsx\n  const { events } = useCioQuiz(args);\n  ```\n\n  | property          | type                 | description|\n  | :-----------------| ---------------------| :--------- |\n  | nextQuestion      | `function() => void` | Action event to go to the next question in the quiz |\n  | previousQuestion  | `function() => void` | Action event to go to the previous question in the quiz |\n  | resetQuiz         | `function() => void` | Action event to go to the reset the quiz state and go to the first question |\n  | resultClick       | `function(item) => void (item* is the quiz result data)` | Action event to trigger quiz result click events |\n  | addToCart         | `function(e: React.MouseEvent<HTMLElement>, item, price) => void` | Action event to trigger add to cart click events |\n  | addToFavorites    | `function(e: React.MouseEvent<HTMLElement>, item, price) => void` | Action event trigger add to favorites click events |\n  | hydrateQuiz       | `function() => void` | Action event to hydrate the quiz with saved state in session storage on reload |\n  | quizAnswerChanged | `function(payload: string \\| string[] ) => void` | Action event to trigger add to cart click events |\n"}),"\n",(0,jsx_runtime.jsx)("hr",{}),"\n","\n",(0,jsx_runtime.jsx)(dist.UG,{children:"### cioClient\n\n> Constructor IO client instance.\n\n  ```jsx\n  const { cioClient } = useCioQuiz(args);\n  ```\n"}),"\n",(0,jsx_runtime.jsx)("hr",{}),"\n","\n",(0,jsx_runtime.jsx)(dist.UG,{children:"### primaryColorStyles\n\n> HSL values of primary theme colors.\n\n  ```jsx\n  const { primaryColorStyles } = useCioQuiz(args);\n  ```\n\n  | property              | type        | description                     |\n  | :---------------------| :-----------| :------------------------------ |\n  | --primary-color-h | string  | Hue value of hsl() color function       |\n  | --primary-color-s | string  | Saturation value of hsl() color function|\n  | --primary-color-l | string  | Lightness value of hsl() color function |\n"}),"\n",(0,jsx_runtime.jsx)("hr",{}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"prop-getters",children:"Prop Getters"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The hook useCioQuiz also returns a number of prop getters that enable you to quickly obtain the props you need for certain HTML elements, allowing you to easily get the full benefit of Constructor's tracking and styling without any hassle."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Note: Any callbacks passed when calling the useCioQuiz hook, will also be returned as part of the props."}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"- #### Quiz questions\n\n  - ##### `getOpenTextInputProps`\n\n    This method returns the props that should be applied to an input `<input>` on quiz questions of type OpenText.\n\n    This handles input state, events and styles.\n\n    ```jsx\n    const { getOpenTextInputProps } = useCioQuiz(args);\n\n    const ui = (\n      /* input */\n      <input {...getOpenTextInputProps()} />\n    );\n    ```\n  \n  - ##### `getSelectInputProps`\n  \n    This method should be applied to an element of type `<li>` or `<dev>` on quiz questions of type SelectQuestion.\n\n    This handles selection state, events and styles.\n\n    It is required to pass an `option` to `getSelectInputProps` in order to be applied.\n\n      - `option`: Select question option data that will be selected when the user\n        selects a particular option.\n\n    ```jsx\n    const { getSelectInputProps, state } = useCioQuiz(args);\n    const currentQuestionData = state.quiz?.currentQuestion?.next_question;\n\n    const ui = (\n      <div>\n        {currentQuestionData.options.map((option) => (\n          <div {...getSelectInputProps(option)}>\n            <div className='cio-question-option-value'>{option.value}</div>\n          </div>\n        ))}\n      </div>\n    );\n    ```\n\n  - ##### `getNextQuestionButtonProps`\n\n    This method should be applied to an element of type `<button>` or `<div>` on any quiz question.\n\n    This handles the styles and the click event for going to the next question.\n\n    ```jsx\n    const { getNextQuestionButtonProps } = useCioQuiz(args);\n\n    const ui = (\n      /* button, dev, ... */\n      <button {...getNextQuestionButtonProps()}>Continue</button>\n    );\n    ```\n\n  - ##### `getPreviousQuestionButtonProps`\n\n    This method should be applied to an element of type `<button>` or `<div>` on quiz.\n\n    This handles the styles and the click event for going to the previous question.\n\n    ```jsx\n    const { getPreviousQuestionButtonProps } = useCioQuiz(args);\n\n    const ui = (\n      /* button, dev, ... */\n      <button {...getPreviousQuestionButtonProps()}>Back</button>\n    );\n    ```\n\n    \n  - ##### `getSkipQuestionButtonProps`\n\n    This method should be applied to an element of type `<button>` or `<div>` on quiz.\n\n    This handles the styles and the click event for skipping the current question.\n\n    ```jsx\n    const { getSkipQuestionButtonProps } = useCioQuiz(args);\n\n    const ui = (\n      /* button, dev, ... */\n      <button {...getSkipQuestionButtonProps()}>Skip</button>\n    );\n    ```\n\n  - ##### `getResetQuizButtonProps`\n\n    This method should be applied to an element of type `<button>` or `<div>` on quiz.\n\n    This handles resetting the quiz state and going back to the first question of the quiz.\n\n    ```jsx\n    const { getResetQuizButtonProps } = useCioQuiz(args);\n\n    const ui = (\n      /* button, dev, ... */\n      <button {...getResetQuizButtonProps()}>Reset Quiz</button>\n    );\n    ```\n\n  - ##### `getQuizImageProps`\n\n      This method should be applied to an element of type `<image>` or `<div>` on quiz images of any question type.\n\n      ```jsx\n      const { getQuizImageProps } = useCioQuiz(args);\n\n      const ui = (\n        <img {...getQuizImageProps()} className='cio-question-image' />\n      );\n      ```\n"}),"\n",(0,jsx_runtime.jsx)("hr",{}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"- #### Quiz results\n\n  - ##### `getAddToCartButtonProps`\n\n    This method should be applied to an element of type `<button>` or `<div>` on quiz results page on quiz result item.\n\n    It is required to pass an `item` and `price` to `getAddToCartButtonProps` in order to apply the logic and tracking.\n\n    - `item`: Result item of the quiz that will be selected to be tracked when the user\n          clicks Add to cart button.\n    - `price`: Price of the result that will be sent with the tracking event.\n\n      ```jsx\n      const { getAddToCartButtonProps } = useCioQuiz(args);\n\n      const ui = (\n        /* button, dev, ... */\n        <button {...getAddToCartButtonProps(item, price)}>Add to Cart</button>\n      );\n      ```\n\n  - ##### `getAddToFavoritesButtonProps`\n\n    This method should be applied to an element of type `<button>` or `<div>` on any quiz question.\n\n    It is required to pass an `item` and `price` to `getAddToFavoritesButtonProps` in order to apply the logic and tracking.\n\n    - `item`: Result item of the quiz that will be selected to be tracked when the user\n          clicks Add to favorites button.\n    - `price`: Price of the result that will be sent with the tracking event.\n\n      ```jsx\n      const { getAddToFavoritesButtonProps } = useCioQuiz(args);\n\n      const ui = (\n        /* button, dev, ... */\n        <button {...getAddToCartButtonProps(item, price)}>Add to favorites</button>\n      );\n      ```\n\n  - ##### `getQuizResultButtonProps`\n\n    This method should be applied to a product card container of type `<div>` on quiz results page.\n\n    This handles href, events, and tracking.\n\n    It is required to pass an `item` and `position` to `getQuizResultButtonProps` in order to apply the logic and tracking.\n\n    - `item`: Result item of the quiz that will be selected to be tracked when the user\n      clicks on it.\n    - `position`: Position of the item that will be sent with the tracking event.\n\n      ```jsx\n      const { getQuizResultButtonProps, state } = useCioQuiz(args);\n      const quizResults = state.quiz.results?.response?.results;\n\n      const ui = (\n        <div>\n          {quizResults.map((item, i) => (\n            <div\n              {...getQuizResultButtonProps({\n                result,\n                position: i,\n              })}>\n              <p>{item.value}</p>\n            </div>\n          ))}\n        </div>\n      );\n      ```\n\n  - ##### `getQuizResultLinkProps`\n\n    This method should be applied to a product card container of type link `<a>` on quiz results page.\n\n    This handles href, events, and tracking.\n\n    It is required to pass an `item` and `position` to `getQuizResultLinkProps` in order to apply the logic and tracking.\n\n    - `item`: Result item of the quiz that will be selected to be tracked when the user\n          clicks on it.\n    - `position`: Position of the item that will be sent with the tracking event.\n\n      ```jsx\n      const { getQuizResultLinkProps, state } = useCioQuiz(args);\n      const quizResults = state.quiz.results?.response?.results;\n\n      const ui = (\n        <div>\n          {quizResults.map((item, i) => (\n            <a\n              {...getQuizResultLinkProps({\n                result,\n                position: i,\n              })}>\n              <p>{item.value}</p>\n            </a>\n          ))}\n        </div>\n      );\n      ```\n  \n  - ##### `getHydrateQuizButtonProps`\n\n    This method should be applied to an element of type `<button>` or `<div>` to hydrate the quiz with saved state between reloads.\n\n    ```jsx\n    const { getHydrateQuizButtonProps } = useCioQuiz(args);\n\n    const ui = (\n      <button {...getHydrateQuizButtonProps()}>Hydrate quiz</button>\n    );\n    ```\n"}),"\n",(0,jsx_runtime.jsx)("hr",{})]})}const useCioQuiz=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/Quiz/Hooks/HooksStories.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicUsage:()=>BasicUsage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HooksStories_stories});__webpack_require__("./node_modules/react/index.js");var RedoSVG=__webpack_require__("./src/components/RedoButton/RedoSVG.tsx"),src=__webpack_require__("./src/index.ts"),utils=(__webpack_require__("./src/styles.css"),__webpack_require__("./src/utils.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HooksTemplate(args){var _useCioQuiz=(0,src.K_)(args),state=_useCioQuiz.state,getOpenTextInputProps=_useCioQuiz.getOpenTextInputProps,getNextQuestionButtonProps=_useCioQuiz.getNextQuestionButtonProps,getPreviousQuestionButtonProps=_useCioQuiz.getPreviousQuestionButtonProps,getSkipQuestionButtonProps=_useCioQuiz.getSkipQuestionButtonProps,getQuizImageProps=_useCioQuiz.getQuizImageProps,getSelectQuestionImageProps=_useCioQuiz.getSelectQuestionImageProps,getSelectInputProps=_useCioQuiz.getSelectInputProps,getResetQuizButtonProps=_useCioQuiz.getResetQuizButtonProps,getQuizResultButtonProps=_useCioQuiz.getQuizResultButtonProps,getAddToCartButtonProps=_useCioQuiz.getAddToCartButtonProps,primaryColorStyles=_useCioQuiz.primaryColorStyles;if("SUCCESS"===state.quiz.requestState){var _state$quiz$results,_state$quiz$selectedO,quizResults=null===(_state$quiz$results=state.quiz.results)||void 0===_state$quiz$results||null===(_state$quiz$results=_state$quiz$results.response)||void 0===_state$quiz$results?void 0:_state$quiz$results.results,zeroResults=!(null!=quizResults&&quizResults.length);if(quizResults)return(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsxs)("div",{className:"cio-results-container",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-results-title",children:"Results"}),(0,jsx_runtime.jsxs)("div",{className:"cio-results-filter-and-redo-container",children:[(0,jsx_runtime.jsxs)("div",{className:"cio-results-filter-container",children:[(0,jsx_runtime.jsx)("p",{children:"Because you answered"}),(0,jsx_runtime.jsx)("div",{className:"cio-results-filter-options",children:null==state||null===(_state$quiz$selectedO=state.quiz.selectedOptionsWithAttributes)||void 0===_state$quiz$selectedO?void 0:_state$quiz$selectedO.map((function(option){return(0,jsx_runtime.jsx)("div",{className:"cio-results-filter-option",children:option},option)}))})]}),(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({},getResetQuizButtonProps("secondary")),{},{children:[(0,jsx_runtime.jsx)(RedoSVG.Z,{}),(0,jsx_runtime.jsx)("span",{children:"retake"})]}))]}),(0,jsx_runtime.jsx)("div",{className:"cio-results",children:!zeroResults&&quizResults.map((function(result,i){var _result$data,_result$data2,_result$data3,_result$data4;return(0,jsx_runtime.jsx)("div",{className:"cio-result-card",children:(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({},getQuizResultButtonProps({result,position:i})),{},{children:[(0,jsx_runtime.jsx)("div",{className:"cio-result-card-image",children:(0,jsx_runtime.jsx)("img",{src:null===(_result$data=result.data)||void 0===_result$data?void 0:_result$data.image_url,alt:"product"})}),(0,jsx_runtime.jsxs)("div",{className:"cio-result-card-text",children:[(0,jsx_runtime.jsx)("p",{className:"cio-result-card-title",children:result.value}),(0,jsx_runtime.jsxs)("div",{className:"cio-result-card-prices",children:[(null==result||null===(_result$data2=result.data)||void 0===_result$data2?void 0:_result$data2.price)&&(0,jsx_runtime.jsxs)("span",{className:"cio-result-card-sale-price",children:["$",result.data.price]}),(null==result||null===(_result$data3=result.data)||void 0===_result$data3?void 0:_result$data3.price)&&(0,jsx_runtime.jsxs)("span",{className:"cio-result-card-regular-price".concat(result.data.price?"--strike-through":""),children:["$",result.data.price]})]})]}),(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getAddToCartButtonProps(result,null==result||null===(_result$data4=result.data)||void 0===_result$data4?void 0:_result$data4.price)),{},{children:"Add to Cart"}))]}))})}))}),zeroResults&&(0,jsx_runtime.jsxs)("div",{className:"cio-zero-results",children:[(0,jsx_runtime.jsx)("h3",{className:"cio-zero-results-subtitle",children:"Sorry, we couldn’t find products that perfectly match your preferences."}),(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getResetQuizButtonProps()),{},{children:"Try Again"}))})]})]})});var currentQuestion=state.quiz.currentQuestion,currentQuestionData=null==currentQuestion?void 0:currentQuestion.next_question;if(currentQuestionData){var _currentQuestionData$,_currentQuestionData$2;if(currentQuestion.isOpenQuestion)return(0,jsx_runtime.jsxs)("div",{className:"cio-quiz",children:[(0,jsx_runtime.jsxs)("style",{children:[".cio-quiz ",(0,utils.ik)(primaryColorStyles)]}),(0,jsx_runtime.jsxs)("div",{className:"cio-container--with-image cio-open-text-question-container--with-image",children:[(null===(_currentQuestionData$=currentQuestionData.images)||void 0===_currentQuestionData$?void 0:_currentQuestionData$.primary_url)&&(0,jsx_runtime.jsx)("span",{className:"cio-question-image-container",children:(0,jsx_runtime.jsx)("img",_objectSpread(_objectSpread({},getQuizImageProps()),{},{className:"cio-question-image"}))}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-content",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-question-title",children:currentQuestionData.title}),(0,jsx_runtime.jsx)("p",{className:"cio-question-description",children:currentQuestionData.description}),(0,jsx_runtime.jsx)("input",_objectSpread({},getOpenTextInputProps())),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getPreviousQuestionButtonProps()),{},{children:"Back"})),(0,jsx_runtime.jsxs)("div",{className:"cio-button-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getSkipQuestionButtonProps()),{},{children:"Skip"})),(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getNextQuestionButtonProps()),{},{children:"Continue"}))]})]})]})]})]});if(currentQuestion.isCoverQuestion)return(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsxs)("div",{className:"cio-container--with-image cio-cover-question-container--with-image",children:[(null===(_currentQuestionData$2=currentQuestionData.images)||void 0===_currentQuestionData$2?void 0:_currentQuestionData$2.primary_url)&&(0,jsx_runtime.jsx)("span",{className:"cio-question-image-container",children:(0,jsx_runtime.jsx)("img",_objectSpread(_objectSpread({},getQuizImageProps()),{},{className:"cio-question-image"}))}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-content",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-question-title",children:currentQuestionData.title}),(0,jsx_runtime.jsx)("p",{className:"cio-question-description",children:currentQuestionData.description}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getPreviousQuestionButtonProps()),{},{children:"Back"})),(0,jsx_runtime.jsxs)("div",{className:"cio-button-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getSkipQuestionButtonProps()),{},{children:"Skip"})),(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getNextQuestionButtonProps()),{},{children:"Continue"}))]})]})]})]})});if(currentQuestion.isSelectQuestion)return(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsxs)("div",{className:"cio-select-question-container",children:[(0,jsx_runtime.jsxs)("div",{className:"cio-select-question-text",children:[(0,jsx_runtime.jsx)("h1",{children:currentQuestionData.title}),(0,jsx_runtime.jsx)("p",{children:currentQuestionData.description})]}),(0,jsx_runtime.jsx)("div",{className:"cio-question-options-container",children:currentQuestionData.options.map((function(option){return(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({},getSelectInputProps(option)),{},{children:[option.images?(0,jsx_runtime.jsx)("img",_objectSpread({},getSelectQuestionImageProps(option))):"",(0,jsx_runtime.jsx)("div",{className:"cio-question-option-value",children:option.value})]}))}))}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getPreviousQuestionButtonProps()),{},{children:"Back"})),(0,jsx_runtime.jsxs)("div",{className:"cio-button-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getSkipQuestionButtonProps()),{},{children:"Skip"})),(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getNextQuestionButtonProps()),{},{children:"Continue"}))]})]})]})})}}return null}try{Hooks.displayName="Hooks",Hooks.__docgenInfo={description:"",displayName:"Hooks",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Hooks/index.tsx#Hooks"]={docgenInfo:Hooks.__docgenInfo,name:"Hooks",path:"src/stories/Quiz/Hooks/index.tsx#Hooks"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/constants.ts"),argTypes=__webpack_require__("./src/stories/Quiz/argTypes.ts"),mocks=__webpack_require__("./src/stories/Quiz/tests/mocks.tsx");const HooksStories_stories={title:"Quiz/Hooks",component:HooksTemplate,parameters:{controls:argTypes.yC,docs:{source:{type:"code"}}},argTypes:argTypes.PG};var BasicUsage=HooksTemplate.bind({});BasicUsage.args={quizId:constants.au,apiKey:constants.q1,quizVersionId:"",resultsPageOptions:mocks.kx,resultCardOptions:mocks.gl,callbacks:mocks.ZC,sessionStateOptions:mocks.IN,primaryColor:"35, 71, 199"};var __namedExportsOrder=["BasicUsage"];try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Hooks/HooksStories.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/stories/Quiz/Hooks/HooksStories.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{il:()=>ResultContainer.Z,K_:()=>useQuiz.Z});__webpack_require__("./src/components/CioQuiz/index.tsx");var useQuiz=__webpack_require__("./src/hooks/useQuiz.ts"),ResultContainer=(__webpack_require__("./src/components/QuizQuestions/index.tsx"),__webpack_require__("./src/components/OpenTextTypeQuestion/OpenTextTypeQuestion.tsx"),__webpack_require__("./src/components/CoverTypeQuestion/CoverTypeQuestion.tsx"),__webpack_require__("./src/components/SelectTypeQuestion/SelectTypeQuestion.tsx"),__webpack_require__("./src/components/Results/Results.tsx"),__webpack_require__("./src/components/ResultCard/ResultCard.tsx"),__webpack_require__("./src/components/ResultContainer/ResultContainer.tsx")),ResultCtaButton=(__webpack_require__("./src/components/ResultFilters/ResultFilters.tsx"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/ResultCtaButton/ResultCtaButton.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ResultHeroCard(props){var _heroItem$data,_heroItem$data2,heroItem=props.heroItem;return(0,jsx_runtime.jsxs)("div",{className:"cio-hero-card",children:[(0,jsx_runtime.jsx)("img",{className:"cio-hero-card-image",src:null==heroItem||null===(_heroItem$data=heroItem.data)||void 0===_heroItem$data?void 0:_heroItem$data.image_url,alt:"product"}),(0,jsx_runtime.jsxs)("div",{className:"cio-hero-card-contents",children:[(0,jsx_runtime.jsx)("div",{className:"cio-hero-card-title",children:"Especially Curated For You!"}),(0,jsx_runtime.jsx)("h2",{className:"cio-hero-card-item-name",children:null==heroItem?void 0:heroItem.value}),(0,jsx_runtime.jsxs)("div",{className:"cio-hero-card-item-price",children:["$",null==heroItem||null===(_heroItem$data2=heroItem.data)||void 0===_heroItem$data2?void 0:_heroItem$data2.price]}),(0,jsx_runtime.jsx)("p",{className:"cio-hero-card-item-description"}),(0,jsx_runtime.jsx)(ResultCtaButton.Z,{item:[heroItem]})]})]})}ResultHeroCard.displayName="ResultHeroCard";try{ResultHeroCard.displayName="ResultHeroCard",ResultHeroCard.__docgenInfo={description:"",displayName:"ResultHeroCard",props:{heroItem:{defaultValue:null,description:"",name:"heroItem",required:!0,type:{name:"Partial<BrowseResultData>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultHeroCard/ResultHeroCard.tsx#ResultHeroCard"]={docgenInfo:ResultHeroCard.__docgenInfo,name:"ResultHeroCard",path:"src/components/ResultHeroCard/ResultHeroCard.tsx#ResultHeroCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Quiz/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>docsControls,PG:()=>argTypes,yC:()=>storiesControls});var argTypes={quizId:{description:"ID of the quiz",control:{type:"text"}},quizVersionId:{description:"Optional quiz version Id"},apiKey:{description:"Your Constructor API key. Either `apiKey` or `cioJsClient` are required"},"callbacks.onQuizNextQuestion":{description:"Callback function to be called when the next question is loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(question) => void",detail:"(question: QuestionWithAnswer) => void"}}},"callbacks.onQuizResultsLoaded":{description:"Callback function to be called when the quiz results are loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(results) => void",detail:"(results: QuizResultDataPartial) => void"}}},"callbacks.onQuizResultClick":{description:"Callback function to be called when a quiz result is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result, position: number) => void",detail:"(result: QuizResultDataPartial, position: number) => void"}}},"callbacks.onAddToCartClick":{description:"Callback function to be called when the add to cart button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},"callbacks.onAddToFavoritesClick":{description:"Callback function to be called when the add to favorites button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},"callbacks.onEmailResults":{description:"Callback function to be called when emailing results.",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(args) => void",detail:"(args: QuizEmailResults) => void"}}},cioJsClient:{description:"Optional custom constructor instance. Either `apiKey` or `cioJsClient` are required"},primaryColor:{description:"RGB value string for quiz primary theme color ie: `'255, 82, 48'`",control:{type:"text"},defaultValue:{summary:"35, 71, 199"}},"resultCardOptions.resultCardRegularPriceKey":{description:"Key name for the regular price in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"regular_price"},type:{summary:"string"}}},"resultCardOptions.resultCardSalePriceKey":{description:"Key name for the sale price in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"sale_price"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingCountKey":{description:"Key name for the rating count in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_count"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingScoreKey":{description:"Key name for the rating score in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_score"},type:{summary:"string"}}},"resultCardOptions.renderResultCardPriceDetails":{description:"Callback function to render result card price details",control:!1,table:{subcategory:"resultCardOptions",defaultValue:{summary:"null"},type:{summary:"(result) => JSX.Element",detail:"(result: QuizResultDataPartial) => JSX.Element"}}},"resultsPageOptions.numResultsToDisplay":{description:"Number of results to display on the results page",control:{type:"number"},table:{subcategory:"resultsPageOptions",defaultValue:{summary:5},type:{summary:"number"}}},"resultsPageOptions.favoriteItems":{description:"Array of favorite item IDs",control:!1,table:{subcategory:"resultsPageOptions",type:{summary:"string[]"}}},"resultsPageOptions.showShareResultsButton":{description:"Boolean for whether or not to show share results button on the results page",control:{type:"boolean"},table:{subcategory:"resultCardOptions",defaultValue:{summary:!0},type:{summary:"boolean"}}},"sessionStateOptions.showSessionModal":{description:"Boolean for whether or not to show session modal to hydrate quiz on the results page",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.showSessionModalOnResults":{description:"Boolean for whether or not to show session modal to hydrate quiz",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.sessionStateKey":{description:"Key name where session storage state is saved",control:{type:"text"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:"quizState"},type:{summary:"string"}}},enableHydration:{description:"Boolean for whether or not to hydrate quiz questions and results on page reload",defaultValue:{summary:"true"}}},docsControls={sort:"requiredFirst",exclude:["sessionStateOptions","callbacks","resultsPageOptions","resultCardOptions"]},storiesControls={include:["apiKey","quizId","quizVersionId","primaryColor"]}}}]);