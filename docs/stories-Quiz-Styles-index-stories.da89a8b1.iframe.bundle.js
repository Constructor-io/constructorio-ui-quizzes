(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[509],{"./node_modules/@babel/runtime/helpers/interopRequireDefault.js":module=>{module.exports=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/stories/Quiz/Styles/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangePrimaryColor:()=>ChangePrimaryColor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_CioQuiz__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/CioQuiz/index.tsx"),_argTypes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Quiz/argTypes.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils.tsx"),_Component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/Quiz/Component/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Quiz/Style Customizations",component:_components_CioQuiz__WEBPACK_IMPORTED_MODULE_0__.Z,argTypes:_argTypes__WEBPACK_IMPORTED_MODULE_1__.P,tags:["autodocs"]};var resultsPageOptions={onAddToCartClick:function onAddToCartClick(item){console.log("Add to cart"),console.dir(item)}},ChangePrimaryColor=_Component__WEBPACK_IMPORTED_MODULE_3__.Ty.bind({});ChangePrimaryColor.args={apiKey:_constants__WEBPACK_IMPORTED_MODULE_4__.q1,quizId:_constants__WEBPACK_IMPORTED_MODULE_4__.au,resultsPageOptions,primaryColor:"255, 82, 48"},(0,_Component__WEBPACK_IMPORTED_MODULE_3__.Cp)(ChangePrimaryColor,"const args = ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_2__.fk)(ChangePrimaryColor.args)),_constants__WEBPACK_IMPORTED_MODULE_4__.oL);var __namedExportsOrder=["ChangePrimaryColor"];try{ChangePrimaryColor.displayName="ChangePrimaryColor",ChangePrimaryColor.__docgenInfo={description:"",displayName:"ChangePrimaryColor",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"ResultsPageOptions"}},sessionStateOptions:{defaultValue:null,description:"",name:"sessionStateOptions",required:!1,type:{name:"SessionStateOptions"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!1,type:{name:"Callbacks"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Styles/index.stories.tsx#ChangePrimaryColor"]={docgenInfo:ChangePrimaryColor.__docgenInfo,name:"ChangePrimaryColor",path:"src/stories/Quiz/Styles/index.stories.tsx#ChangePrimaryColor"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Quiz/Component/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Cp:()=>addComponentStoryDescription,Ty:()=>ComponentTemplate});__webpack_require__("./node_modules/react/index.js");var _components_CioQuiz__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ComponentTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_CioQuiz__WEBPACK_IMPORTED_MODULE_1__.Z,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},args))}ComponentTemplate.displayName="ComponentTemplate";var getComponentStoryParams=function getComponentStoryParams(storyParams){return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.Ez)(storyParams,"\nfunction YourComponent() {\n  return (\n    <div>\n      <CioQuiz {...args} />\n    </div>\n  );\n}\n","import CioQuiz from '@constructor-io/constructorio-ui-quizzes';")},addComponentStoryDescription=function addComponentStoryDescription(story,code){var description=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";story.parameters=getComponentStoryParams(code),story.parameters.docs.description={story:"\n".concat(description,"\n\n```jsx\n").concat(code,"\n```")}};try{ComponentTemplate.displayName="ComponentTemplate",ComponentTemplate.__docgenInfo={description:"",displayName:"ComponentTemplate",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"ResultsPageOptions"}},sessionStateOptions:{defaultValue:null,description:"",name:"sessionStateOptions",required:!1,type:{name:"SessionStateOptions"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!1,type:{name:"Callbacks"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.tsx#ComponentTemplate"]={docgenInfo:ComponentTemplate.__docgenInfo,name:"ComponentTemplate",path:"src/stories/Quiz/Component/index.tsx#ComponentTemplate"})}catch(__react_docgen_typescript_loader_error){}try{getComponentStoryParams.displayName="getComponentStoryParams",getComponentStoryParams.__docgenInfo={description:"",displayName:"getComponentStoryParams",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.tsx#getComponentStoryParams"]={docgenInfo:getComponentStoryParams.__docgenInfo,name:"getComponentStoryParams",path:"src/stories/Quiz/Component/index.tsx#getComponentStoryParams"})}catch(__react_docgen_typescript_loader_error){}}}]);