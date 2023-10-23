/*! For license information please see stories-Quiz-Styles-index-stories.79b67bad.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[509],{"./src/stories/Quiz/Styles/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangePrimaryColor:()=>ChangePrimaryColor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_CioQuiz__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/CioQuiz/index.tsx"),_argTypes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Quiz/argTypes.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils.tsx"),_Component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/Quiz/Component/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Quiz/Style Customizations",component:_components_CioQuiz__WEBPACK_IMPORTED_MODULE_0__.Z,argTypes:_argTypes__WEBPACK_IMPORTED_MODULE_1__.PG,parameters:{controls:_argTypes__WEBPACK_IMPORTED_MODULE_1__.yC},tags:["autodocs"]};var resultsPageOptions={onAddToCartClick:function onAddToCartClick(item){console.log("Add to cart"),console.dir(item)}},ChangePrimaryColor=_Component__WEBPACK_IMPORTED_MODULE_3__.Ty.bind({});ChangePrimaryColor.args={apiKey:_constants__WEBPACK_IMPORTED_MODULE_4__.q1,quizId:_constants__WEBPACK_IMPORTED_MODULE_4__.au,resultsPageOptions,primaryColor:"255, 82, 48"},(0,_Component__WEBPACK_IMPORTED_MODULE_3__.Cp)(ChangePrimaryColor,"const args = ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_2__.fk)(ChangePrimaryColor.args)),_constants__WEBPACK_IMPORTED_MODULE_4__.oL);var __namedExportsOrder=["ChangePrimaryColor"];try{ChangePrimaryColor.displayName="ChangePrimaryColor",ChangePrimaryColor.__docgenInfo={description:"",displayName:"ChangePrimaryColor",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!1,type:{name:"ResultsPageOptions"}},resultCardOptions:{defaultValue:null,description:"",name:"resultCardOptions",required:!1,type:{name:"ResultCardOptions"}},sessionStateOptions:{defaultValue:null,description:"",name:"sessionStateOptions",required:!1,type:{name:"SessionStateOptions"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},enableHydration:{defaultValue:null,description:"",name:"enableHydration",required:!1,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!1,type:{name:"Callbacks"}},questionsPageOptions:{defaultValue:null,description:"",name:"questionsPageOptions",required:!1,type:{name:"QuestionsPageOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Styles/index.stories.tsx#ChangePrimaryColor"]={docgenInfo:ChangePrimaryColor.__docgenInfo,name:"ChangePrimaryColor",path:"src/stories/Quiz/Styles/index.stories.tsx#ChangePrimaryColor"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CioQuiz/actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>QuestionTypes,c:()=>QuizAPIActionTypes});var QuestionTypes=function(QuestionTypes){return QuestionTypes.OpenText="open",QuestionTypes.Cover="cover",QuestionTypes.SingleSelect="single",QuestionTypes.MultipleSelect="multiple",QuestionTypes.Next="next",QuestionTypes.Skip="skip",QuestionTypes.Back="back",QuestionTypes.Reset="reset",QuestionTypes.Hydrate="hydrate",QuestionTypes.Complete="complete",QuestionTypes}({}),QuizAPIActionTypes=function(QuizAPIActionTypes){return QuizAPIActionTypes[QuizAPIActionTypes.SET_IS_LOADING=0]="SET_IS_LOADING",QuizAPIActionTypes[QuizAPIActionTypes.SET_IS_ERROR=1]="SET_IS_ERROR",QuizAPIActionTypes[QuizAPIActionTypes.SET_QUIZ_RESULTS=2]="SET_QUIZ_RESULTS",QuizAPIActionTypes[QuizAPIActionTypes.SET_CURRENT_QUESTION=3]="SET_CURRENT_QUESTION",QuizAPIActionTypes[QuizAPIActionTypes.RESET_QUIZ=4]="RESET_QUIZ",QuizAPIActionTypes}({})},"./src/components/CioQuiz/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./src/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>hookDescription,au:()=>quizId,co:()=>basicDescription,k1:()=>quizSessionStateKey,oA:()=>RequestStates,oL:()=>changePrimaryColorDescription,q1:()=>apiKey});var apiKey="key_wJSdZSiesX5hiVLt",quizId="coffee-quiz",quizSessionStateKey="constructorIOQuizState",hookDescription='- Import `useCioQuiz` and call this custom hook in a functional component.\n- This hook leaves rendering logic up to you, while handling:\n  - state management\n  - data fetching\n  - keyboard navigation\n  - mouse interactions\n  - focus and submit event handling\n- Since the markup is controlled by you, the default styles might not be applied if you have a different DOM structure\n- To use this hook, an `apiKey` and `quizId` are required, and `resultsPageOptions` must be passed to the `useCioQuiz` hook to configure behavior. All other values are optional.\n- Use the <a href="https://kentcdodds.com/blog/how-to-give-rendering-control-to-users-with-prop-getters" target="__blank">prop getters</a> and other variables returned by this hook (below) to leverage the functionality described above with jsx elements in your react component definitions\n\nCalling the `useCioQuiz` hook returns an object with the following keys:\n\n```jsx\nconst {\n  // must be used for a hooks integrations\n  state: QuizReturnState, // Quiz state\n  events: [{...}], // array of quiz events\n  getAddToCartButtonProps: () => ({...})), // prop getter for jsx add to cart button for quiz result,\n  getAddToFavoritesButtonProps: () => ({...})), // prop getter for jsx add to favorites button for quiz result,\n  getCoverQuestionProps: () => ({...})), // prop getter for jsx quiz cover question,\n  getHydrateQuizButtonProps: () => ({...})), // prop getter for jsx hydrate quiz button,\n  getNextQuestionButtonProps: () => ({...})), // prop getter for jsx next button to traverse the quiz,\n  getSkipQuestionButtonProps: () => ({...})), // prop getter for jsx skip button to traverse the quiz,\n  getPreviousQuestionButtonProps: () => ({...})), // prop getter for jsx back button to traverse the quiz, \n  getOpenTextInputProps: () => ({...})), // prop getter for jsx open text input,\n  getSelectInputProps: () => ({...})), // prop getter for jsx select input for select type questions,\n  getQuizImageProps: () => ({...})), // prop getter for jsx quiz image,\n  getQuizResultButtonProps: () => ({...})), // prop getter for jsx result card click as a button,\n  getQuizResultLinkProps: () => ({...})), // prop getter for jsx result card click as a link. Should be spread into <a> tags,\n  getResetQuizButtonProps: () => ({...})), // prop getter for jsx reset quiz button,\n  cioClient, // instance of constructorio-client-javascript\n } = useCioQuiz(args);\n```\n\n> Note: when we say `cioClient`, we are referring to an instance of the [constructorio-client-javascript](https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript)\n',basicDescription="Pass an `apiKey` and a `quizId` to request questions and quiz results from Constructor's servers",changePrimaryColorDescription='\nIf you would like to use a different primary color, pass a `primaryColor` string in RGB format (\'R, G, B\').\n\nAccent colors for borders and different states (hover, focus, active) will be calculated automatically based on the primary color you provided.\n\nBy default, the primary color has a value of "35, 71, 199" (Constructor Blue).\n\nIn the example below, the `primaryColor` prop has been used to override this color to "255, 82, 48" (Orange).\n\n> Advanced Option: Instead of passing a primaryColor prop, you can also override `--primary-color-h`, `--primary-color-s`, and `--primary-color-l` CSS variables within a `.cio-quiz` container element. If explicitly given a value in your CSS, then the values of these variables will be used as the HSL values for your quiz.\n',RequestStates=function(RequestStates){return RequestStates.Stale="STALE",RequestStates.Loading="LOADING",RequestStates.Success="SUCCESS",RequestStates.Error="ERROR",RequestStates}({})},"./src/hooks/usePropsGetters/useCoverQuestionProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useCoverQuestionProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useCoverQuestionProps(setQuizAnswers,currentQuestionData){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){"cover"===(null==currentQuestionData?void 0:currentQuestionData.type)&&setQuizAnswers("")}),[setQuizAnswers,currentQuestionData]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return{}}),[])}},"./src/hooks/usePropsGetters/useOpenTextInputProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useOpenTextInputProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useOpenTextInputProps(setQuizAnswers,nextQuestion,currentQuestionData,answerInputs){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),2),input=_useState2[0],setInput=_useState2[1],onChangeHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){setInput(e.target.value)}),[]),onKeyDownHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){"Enter"===e.key&&input&&"open"===(null==currentQuestionData?void 0:currentQuestionData.type)&&nextQuestion()}),[null==currentQuestionData?void 0:currentQuestionData.type,input,nextQuestion]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){"open"===(null==currentQuestionData?void 0:currentQuestionData.type)&&setQuizAnswers(input)}),[input,null==currentQuestionData?void 0:currentQuestionData.type,null==currentQuestionData?void 0:currentQuestionData.id,setQuizAnswers]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(answerInputs&&null!=currentQuestionData&&currentQuestionData.id){var _answerInputs$current,questionAnswer=null===(_answerInputs$current=answerInputs[currentQuestionData.id])||void 0===_answerInputs$current?void 0:_answerInputs$current.value;setInput(questionAnswer||"")}}),[null==currentQuestionData?void 0:currentQuestionData.id]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return{className:"cio-question-input-text",placeholder:(null==currentQuestionData?void 0:currentQuestionData.input_placeholder)||"Answer here...",value:input,onChange:onChangeHandler,onKeyDown:onKeyDownHandler}}),[null==currentQuestionData?void 0:currentQuestionData.input_placeholder,null==currentQuestionData?void 0:currentQuestionData.id,input,onKeyDownHandler])}},"./src/hooks/usePropsGetters/useSelectInputProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useSelectInputProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/actions.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useSelectInputProps(quizAnswerChanged,nextQuestion,currentQuestionData,answerInputs){var _currentQuestionData$,type=null==currentQuestionData?void 0:currentQuestionData.type,hasImages=null==currentQuestionData||null===(_currentQuestionData$=currentQuestionData.options)||void 0===_currentQuestionData$?void 0:_currentQuestionData$.some((function(option){return option.images})),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),2),selected=_useState2[0],setSelected=_useState2[1],singleSelectClicked=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),toggleIdSelected=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(id){if(type===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.SingleSelect)singleSelectClicked.current=!0,setSelected(_defineProperty({},id,!0));else if(type===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.MultipleSelect)if(selected[id]){var newState=_objectSpread({},selected);delete newState[id],setSelected(newState)}else setSelected(_objectSpread(_objectSpread({},selected),{},_defineProperty({},id,!0)))}),[selected,type]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(null!=currentQuestionData&&currentQuestionData.type){var _currentAnswer$value,nextQuestionId=currentQuestionData.id,currentAnswer=null==answerInputs?void 0:answerInputs[nextQuestionId],prevSelected={};if(Array.isArray(null==currentAnswer?void 0:currentAnswer.value))null==currentAnswer||null===(_currentAnswer$value=currentAnswer.value)||void 0===_currentAnswer$value||_currentAnswer$value.forEach((function(answer){prevSelected[Number(answer.id)]=!0,setSelected(prevSelected)}))}return singleSelectClicked.current=!1,function clearState(){setSelected({})}}),[null==currentQuestionData?void 0:currentQuestionData.id]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if("multiple"===(null==currentQuestionData?void 0:currentQuestionData.type)||"single"===(null==currentQuestionData?void 0:currentQuestionData.type)){var _currentQuestionData$2,selectedAnswers=null==currentQuestionData||null===(_currentQuestionData$2=currentQuestionData.options)||void 0===_currentQuestionData$2||null===(_currentQuestionData$2=_currentQuestionData$2.filter((function(opt){return selected[Number(opt.id)]})))||void 0===_currentQuestionData$2?void 0:_currentQuestionData$2.map((function(opt){return{id:opt.id,value:opt.value}}));quizAnswerChanged(selectedAnswers)}}),[selected,null==currentQuestionData?void 0:currentQuestionData.id,null==currentQuestionData?void 0:currentQuestionData.type,null==currentQuestionData?void 0:currentQuestionData.options,quizAnswerChanged]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){"single"===(null==currentQuestionData?void 0:currentQuestionData.type)&&singleSelectClicked.current&&nextQuestion()}),[answerInputs]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(option){return{className:"".concat(hasImages?"cio-question-option-container":"cio-question-option-container-text-only"," ").concat(selected[option.id]?"selected":""),onClick:function onClick(){toggleIdSelected(option.id)},onKeyDown:function onKeyDown(event){!function onOptionKeyDown(event,id){" "!==(null==event?void 0:event.key)&&"Enter"!==(null==event?void 0:event.key)||toggleIdSelected(id)}(event,option.id)},role:"button",tabIndex:0,key:option.id}}),[null==currentQuestionData?void 0:currentQuestionData.id,selected])}},"./src/stories/Quiz/Component/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cp:()=>addComponentStoryDescription,Ty:()=>ComponentTemplate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_CioQuiz__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ComponentTemplate(args){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),favorites=_useState2[0],setFavorites=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_CioQuiz__WEBPACK_IMPORTED_MODULE_1__.Z,_objectSpread(_objectSpread({},args),{},{resultsPageOptions:{favoriteItems:favorites},callbacks:{onAddToCartClick:function onAddToCartClick(){},onAddToFavoritesClick:function onAddToFavoritesClick(result){result.data&&(favorites.includes(result.data.id)?setFavorites(favorites.filter((function(id){var _result$data;return id!==(null===(_result$data=result.data)||void 0===_result$data?void 0:_result$data.id)}))):setFavorites([].concat(_toConsumableArray(favorites),[result.data.id])))}}}))}ComponentTemplate.displayName="ComponentTemplate";var getComponentStoryParams=function getComponentStoryParams(storyParams){return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.Ez)(storyParams,"\nfunction YourComponent() {\n  return (\n    <div>\n      <CioQuiz {...args} />\n    </div>\n  );\n}\n","import CioQuiz from '@constructor-io/constructorio-ui-quizzes';")},addComponentStoryDescription=function addComponentStoryDescription(story,code){var description=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";story.parameters=getComponentStoryParams(code),story.parameters.docs.description={story:"\n".concat(description,"\n\n```jsx\n").concat(code,"\n```")}};try{ComponentTemplate.displayName="ComponentTemplate",ComponentTemplate.__docgenInfo={description:"",displayName:"ComponentTemplate",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!1,type:{name:"ResultsPageOptions"}},resultCardOptions:{defaultValue:null,description:"",name:"resultCardOptions",required:!1,type:{name:"ResultCardOptions"}},sessionStateOptions:{defaultValue:null,description:"",name:"sessionStateOptions",required:!1,type:{name:"SessionStateOptions"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},enableHydration:{defaultValue:null,description:"",name:"enableHydration",required:!1,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!1,type:{name:"Callbacks"}},questionsPageOptions:{defaultValue:null,description:"",name:"questionsPageOptions",required:!1,type:{name:"QuestionsPageOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.tsx#ComponentTemplate"]={docgenInfo:ComponentTemplate.__docgenInfo,name:"ComponentTemplate",path:"src/stories/Quiz/Component/index.tsx#ComponentTemplate"})}catch(__react_docgen_typescript_loader_error){}try{getComponentStoryParams.displayName="getComponentStoryParams",getComponentStoryParams.__docgenInfo={description:"",displayName:"getComponentStoryParams",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.tsx#getComponentStoryParams"]={docgenInfo:getComponentStoryParams.__docgenInfo,name:"getComponentStoryParams",path:"src/stories/Quiz/Component/index.tsx#getComponentStoryParams"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Quiz/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>docsControls,PG:()=>argTypes,yC:()=>storiesControls});var argTypes={quizId:{description:"ID of the quiz",control:{type:"text"}},quizVersionId:{description:"Optional quiz version Id"},apiKey:{description:"Your Constructor API key. Either `apiKey` or `cioJsClient` are required"},"callbacks.onQuizNextQuestion":{description:"Callback function to be called when the next question is loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(question) => void",detail:"(question: QuestionWithAnswer) => void"}}},"callbacks.onQuizResultsLoaded":{description:"Callback function to be called when the quiz results are loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(results) => void",detail:"(results: QuizResultDataPartial) => void"}}},"callbacks.onQuizResultClick":{description:"Callback function to be called when a quiz result is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result, position: number) => void",detail:"(result: QuizResultDataPartial, position: number) => void"}}},"callbacks.onAddToCartClick":{description:"Callback function to be called when the add to cart button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},"callbacks.onAddToFavoritesClick":{description:"Callback function to be called when the add to favorites button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},cioJsClient:{description:"Optional custom constructor instance. Either `apiKey` or `cioJsClient` are required"},primaryColor:{description:"RGB value string for quiz primary theme color ie: `'255, 82, 48'`",control:{type:"text"},defaultValue:{summary:"35, 71, 199"}},"resultCardOptions.resultCardRegularPriceKey":{description:"Key name for the regular price in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"regular_price"},type:{summary:"string"}}},"resultCardOptions.resultCardSalePriceKey":{description:"Key name for the sale price in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"sale_price"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingCountKey":{description:"Key name for the rating count in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_count"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingScoreKey":{description:"Key name for the rating score in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_score"},type:{summary:"string"}}},"resultCardOptions.renderResultCardPriceDetails":{description:"Callback function to render result card price details",control:!1,table:{subcategory:"resultCardOptions",defaultValue:{summary:"null"},type:{summary:"(result) => JSX.Element",detail:"(result: QuizResultDataPartial) => JSX.Element"}}},"resultsPageOptions.numResultsToDisplay":{description:"Number of results to display on the results page",control:{type:"number"},table:{subcategory:"resultsPageOptions",defaultValue:{summary:5},type:{summary:"number"}}},"resultsPageOptions.favoriteItems":{description:"Array of favorite item IDs",control:!1,table:{subcategory:"resultsPageOptions",type:{summary:"string[]"}}},"sessionStateOptions.showSessionModal":{description:"Boolean for whether or not to show session modal to hydrate quiz on the results page",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.showSessionModalOnResults":{description:"Boolean for whether or not to show session modal to hydrate quiz",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.sessionStateKey":{description:"Key name where session storage state is saved",control:{type:"text"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:"quizState"},type:{summary:"string"}}},enableHydration:{description:"Boolean for whether or not to hydrate quiz questions and results on page reload",defaultValue:{summary:"true"}}},docsControls={sort:"requiredFirst",exclude:["sessionStateOptions","callbacks","resultsPageOptions","resultCardOptions"]},storiesControls={include:["apiKey","quizId","quizVersionId","primaryColor"]}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);