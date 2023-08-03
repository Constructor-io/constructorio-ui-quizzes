"use strict";(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[467],{"./src/components/CioQuiz/actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var QuestionTypes,QuizAPIActionTypes;__webpack_require__.d(__webpack_exports__,{L:()=>QuestionTypes,c:()=>QuizAPIActionTypes}),function(QuestionTypes){QuestionTypes.OpenText="open",QuestionTypes.Cover="cover",QuestionTypes.SingleSelect="single",QuestionTypes.MultipleSelect="multiple",QuestionTypes.Next="next",QuestionTypes.Back="back",QuestionTypes.Reset="reset",QuestionTypes.Hydrate="hydrate",QuestionTypes.Complete="complete"}(QuestionTypes||(QuestionTypes={})),function(QuizAPIActionTypes){QuizAPIActionTypes[QuizAPIActionTypes.SET_IS_LOADING=0]="SET_IS_LOADING",QuizAPIActionTypes[QuizAPIActionTypes.SET_IS_ERROR=1]="SET_IS_ERROR",QuizAPIActionTypes[QuizAPIActionTypes.SET_QUIZ_RESULTS=2]="SET_QUIZ_RESULTS",QuizAPIActionTypes[QuizAPIActionTypes.SET_CURRENT_QUESTION=3]="SET_CURRENT_QUESTION",QuizAPIActionTypes[QuizAPIActionTypes.RESET_QUIZ=4]="RESET_QUIZ"}(QuizAPIActionTypes||(QuizAPIActionTypes={}))},"./src/components/CioQuiz/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./src/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$w:()=>componentDescription,B3:()=>cioJsClientDescription,H1:()=>hookDescription,au:()=>quizId,co:()=>basicDescription,k1:()=>quizSessionStateKey,oA:()=>RequestStates,oL:()=>changePrimaryColorDescription,q1:()=>apiKey,qZ:()=>smallContainerDescription});var RequestStates,apiKey="key_wJSdZSiesX5hiVLt",quizId="coffee-quiz",quizSessionStateKey="constructorIOQuizState",componentDescription="- import `CioQuiz` to render in your JSX.\n- This component handles state management, data fetching, and rendering logic.\n- To use this component, `quizId`, `resultsPageOptions`, and one of `apiKey` or `cioJsClient` are required.\n- `resultsPageOptions` lets you configure the results page\n  - `onAddToCartClick` is a callback function that will be called when the \"Add to cart\" button is clicked\n  - `onQuizResultClick` is an optional callback function that will be called when the result card is clicked. The default behavior is redirecting the user to the item's URL\n  - `onQuizResultsLoaded` is an optional callback function that will be called when the quiz results are loaded\n  - `resultCardRegularPriceKey` is a parameter that specifies the metadata field name for the regular price\n  - `resultCardSalePriceKey` is an optional parameter that specifies the metadata field name for the sale price \n  - `resultCardRatingCountKey` is an optional parameter that specifies the metadata field name for the ratings count \n  - `resultCardRatingScoreKey` is an optional parameter that specifies the metadata field name for the ratings score \n  - `renderResultCardPriceDetails` is an optional render function to render custom prices section in result card \n- `sessionStateOptions` lets you configure the session modal behavior\n  - `showSessionModal` is a boolean used to decide whether to show the session modal. The default behavior is to show the session modal\n  - `showSessionModalOnResults` is a boolean to decide whether to show the session modal after reaching the results page. The default behavior is to not show the session modal\n  - `sessionStateKey` is a custom string that will be used as a session storage key\n- Use different props to configure the behavior of this component.\n- The following stories show how different props affect the component's behavior\n\n> Note: `cioJsClient` refers to an instance of the [constructorio-client-javascript](https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript)\n",hookDescription='- import `useCioQuiz` and call this custom hook in a functional component.\n- This hook leaves rendering logic up to you, while handling:\n  - state management\n  - data fetching\n  - keyboard navigation\n  - mouse interactions\n  - focus and submit event handling\n- Since the markup is controlled by you, the default styles might not be applied if you have a different DOM structure\n- To use this hook, an `apiKey` and `quizId` are required, and `resultsPageOptions` must be passed to the `useCioQuiz` hook to configure behavior. All other values are optional.\n- use the <a href="https://kentcdodds.com/blog/how-to-give-rendering-control-to-users-with-prop-getters" target="__blank">prop getters</a> and other variables returned by this hook (below) to leverage the functionality described above with jsx elements in your react component definitions\n\nCalling the `useCioQuiz` hook returns an object with the following keys:\n\n```jsx\nconst {\n  // must be used for a hooks integrations\n  state: QuizReturnState, // Quiz state\n  events: [{...}], // array of quiz events\n  getAddToCartButtonProps: () => ({...})), // prop getter for jsx add to cart button for quiz result,\n  getCoverQuestionProps: () => ({...})), // prop getter for jsx quiz cover question,\n  getHydrateQuizButtonProps: () => ({...})), // prop getter for jsx hydrate quiz button,\n  getNextQuestionButtonProps: () => ({...})), // prop getter for jsx next button to traverse the quiz,\n  getPreviousQuestionButtonProps: () => ({...})), // prop getter for jsx back button to traverse the quiz, \n  getOpenTextInputProps: () => ({...})), // prop getter for jsx open text input,\n  getSelectInputProps: () => ({...})), // prop getter for jsx select input for select type questions,\n  getQuizImageProps: () => ({...})), // prop getter for jsx quiz image,\n  getQuizResultButtonProps: () => ({...})), // prop getter for jsx result card click as a button,\n  getQuizResultLinkProps: () => ({...})), // prop getter for jsx result card click as a link. Should be spread into <a> tags,\n  getResetQuizButtonProps: () => ({...})), // prop getter for jsx reset quiz button,\n  cioClient, // instance of constructorio-client-javascript\n } = useCioQuiz(args);\n```\n\n> Note: when we say `cioClient`, we are referring to an instance of the [constructorio-client-javascript](https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript)\n',basicDescription="Pass an `apiKey` and a `quizId` to request questions and quiz results from Constructor's servers",cioJsClientDescription="If you are already using an instance of the `ConstructorIOClient`, you can pass a `cioJsClient` instead of an `apiKey` to request results from Constructor's servers\n\n> Note: `cioJsClient` refers to an instance of the [constructorio-client-javascript](https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript)",smallContainerDescription="If you are using the provided styles, CioQuiz component will respect the height and width of its parent container and use responsive styles based on the parent container's dimensions",changePrimaryColorDescription='\nIf you would like to use a different primary color, pass a `primaryColor` string in RGB format (\'R, G, B\').\n\nAccent colors for borders and different states (hover, focus, active) will be calculated automatically based on the primary color you provided.\n\nBy default, the primary color has a value of "35, 71, 199" (Constructor Blue).\n\nIn the example below, the `primaryColor` prop has been used to override this color to "255, 82, 48" (Orange).\n\n> Advanced Option: Instead of passing a primaryColor prop, you can also override `--primary-color-h`, `--primary-color-s`, and `--primary-color-l` CSS variables within a `.cio-quiz` container element. If explicitly given a value in your CSS, then the values of these variables will be used as the HSL values for your quiz.\n';!function(RequestStates){RequestStates.Stale="STALE",RequestStates.Loading="LOADING",RequestStates.Success="SUCCESS",RequestStates.Error="ERROR"}(RequestStates||(RequestStates={}))},"./src/hooks/usePropsGetters/useCoverQuestionProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useCoverQuestionProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useCoverQuestionProps(setQuizAnswers,currentQuestionData){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){"cover"===(null==currentQuestionData?void 0:currentQuestionData.type)&&setQuizAnswers("")}),[setQuizAnswers,currentQuestionData]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return{}}),[])}},"./src/hooks/usePropsGetters/useOpenTextInputProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useOpenTextInputProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useOpenTextInputProps(setQuizAnswers,nextQuestion,currentQuestionData,answerInputs){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),2),input=_useState2[0],setInput=_useState2[1],onChangeHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){setInput(e.target.value)}),[]),onKeyDownHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){"Enter"===e.key&&input&&"open"===(null==currentQuestionData?void 0:currentQuestionData.type)&&nextQuestion()}),[null==currentQuestionData?void 0:currentQuestionData.type,input,nextQuestion]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){"open"===(null==currentQuestionData?void 0:currentQuestionData.type)&&setQuizAnswers(input)}),[input,null==currentQuestionData?void 0:currentQuestionData.type,null==currentQuestionData?void 0:currentQuestionData.id,setQuizAnswers]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(answerInputs&&null!=currentQuestionData&&currentQuestionData.id){var _answerInputs$current,questionAnswer=null===(_answerInputs$current=answerInputs[currentQuestionData.id])||void 0===_answerInputs$current?void 0:_answerInputs$current.value;setInput(questionAnswer||"")}}),[null==currentQuestionData?void 0:currentQuestionData.id]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return{className:"cio-question-input-text",placeholder:(null==currentQuestionData?void 0:currentQuestionData.input_placeholder)||"Answer here...",value:input,onChange:onChangeHandler,onKeyDown:onKeyDownHandler}}),[null==currentQuestionData?void 0:currentQuestionData.input_placeholder,null==currentQuestionData?void 0:currentQuestionData.id,input,onKeyDownHandler])}},"./src/hooks/usePropsGetters/useSelectInputProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useSelectInputProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/actions.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useSelectInputProps(quizAnswerChanged,nextQuestion,currentQuestionData,answerInputs){var _currentQuestionData$,type=null==currentQuestionData?void 0:currentQuestionData.type,hasImages=null==currentQuestionData||null===(_currentQuestionData$=currentQuestionData.options)||void 0===_currentQuestionData$?void 0:_currentQuestionData$.some((function(option){return option.images})),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),2),selected=_useState2[0],setSelected=_useState2[1],singleSelectClicked=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),toggleIdSelected=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(id){if(type===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.SingleSelect)singleSelectClicked.current=!0,setSelected(_defineProperty({},id,!0));else if(type===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.MultipleSelect)if(selected[id]){var newState=_objectSpread({},selected);delete newState[id],setSelected(newState)}else setSelected(_objectSpread(_objectSpread({},selected),{},_defineProperty({},id,!0)))}),[selected,type]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(null!=currentQuestionData&&currentQuestionData.type){var _currentAnswer$value,nextQuestionId=currentQuestionData.id,currentAnswer=null==answerInputs?void 0:answerInputs[nextQuestionId],prevSelected={};if(Array.isArray(null==currentAnswer?void 0:currentAnswer.value))null==currentAnswer||null===(_currentAnswer$value=currentAnswer.value)||void 0===_currentAnswer$value||_currentAnswer$value.forEach((function(answer){prevSelected[Number(answer)]=!0,setSelected(prevSelected)}))}return singleSelectClicked.current=!1,function clearState(){setSelected({})}}),[null==currentQuestionData?void 0:currentQuestionData.id]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if("multiple"===(null==currentQuestionData?void 0:currentQuestionData.type)||"single"===(null==currentQuestionData?void 0:currentQuestionData.type)){var selectedAnswers=Object.keys(selected).filter((function(key){return selected[Number(key)]}));quizAnswerChanged(selectedAnswers)}}),[selected,null==currentQuestionData?void 0:currentQuestionData.id,null==currentQuestionData?void 0:currentQuestionData.type,quizAnswerChanged]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){"single"===(null==currentQuestionData?void 0:currentQuestionData.type)&&singleSelectClicked.current&&nextQuestion()}),[answerInputs]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(option){return{className:"".concat(hasImages?"cio-question-option-container":"cio-question-option-container-text-only"," ").concat(selected[option.id]?"selected":""),onClick:function onClick(){toggleIdSelected(option.id)},onKeyDown:function onKeyDown(event){!function onOptionKeyDown(event,id){" "!==(null==event?void 0:event.key)&&"Enter"!==(null==event?void 0:event.key)||toggleIdSelected(id)}(event,option.id)},role:"button",tabIndex:0,key:option.id}}),[null==currentQuestionData?void 0:currentQuestionData.id,selected])}}}]);