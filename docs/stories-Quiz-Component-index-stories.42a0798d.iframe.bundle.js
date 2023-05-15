"use strict";(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[554],{"./src/stories/Quiz/Component/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicUsage:()=>BasicUsage,ProvideCIOClientInstance:()=>ProvideCIOClientInstance,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _constructor_io_constructorio_client_javascript__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@constructor-io/constructorio-client-javascript/lib/constructorio.js"),_constructor_io_constructorio_client_javascript__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_constructor_io_constructorio_client_javascript__WEBPACK_IMPORTED_MODULE_0__),_components_CioQuiz__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/index.tsx"),_argTypes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Quiz/argTypes.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/Quiz/Component/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Quiz/Component",component:_components_CioQuiz__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:_argTypes__WEBPACK_IMPORTED_MODULE_2__.P,parameters:{docs:{description:{component:_constants__WEBPACK_IMPORTED_MODULE_5__.$w}}}};var resultsPageOptions={onQuizResultClick:function onQuizResultClick(result,position){console.log("Click result"),console.dir(result,position)},onQuizResultsLoaded:function onQuizResultsLoaded(results){console.log("Loaded results"),console.dir(results)},onAddToCartClick:function onAddToCartClick(item){console.log("Add to cart"),console.dir(item)},resultCardRegularPriceKey:"price",resultCardSalePriceKey:"salePrice"},BasicUsage=___WEBPACK_IMPORTED_MODULE_4__.Ty.bind({});BasicUsage.args={apiKey:_constants__WEBPACK_IMPORTED_MODULE_5__.q1,quizId:_constants__WEBPACK_IMPORTED_MODULE_5__.au,resultsPageOptions},(0,___WEBPACK_IMPORTED_MODULE_4__.Cp)(BasicUsage,"const args = ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__.fk)(BasicUsage.args)),_constants__WEBPACK_IMPORTED_MODULE_5__.co);var cioJsClient=new(_constructor_io_constructorio_client_javascript__WEBPACK_IMPORTED_MODULE_0___default())({apiKey:_constants__WEBPACK_IMPORTED_MODULE_5__.q1});delete cioJsClient.autocomplete,delete cioJsClient.search,delete cioJsClient.browse,delete cioJsClient.recommendations;var cioClientStoryResultsPageOptions={onAddToCartClick:resultsPageOptions.onAddToCartClick,resultCardRegularPriceKey:resultsPageOptions.resultCardRegularPriceKey},ProvideCIOClientInstance=___WEBPACK_IMPORTED_MODULE_4__.Ty.bind({});ProvideCIOClientInstance.args={quizId:_constants__WEBPACK_IMPORTED_MODULE_5__.au,resultsPageOptions:cioClientStoryResultsPageOptions,cioJsClient},(0,___WEBPACK_IMPORTED_MODULE_4__.Cp)(ProvideCIOClientInstance,"\nimport ConstructorIOClient from '@constructor-io/constructorio-client-javascript';\n\nconst cioJsClient = new ConstructorIOClient({ apiKey: '".concat(_constants__WEBPACK_IMPORTED_MODULE_5__.q1,"' });\nconst args = ").concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__.fk)(ProvideCIOClientInstance.args),";"),_constants__WEBPACK_IMPORTED_MODULE_5__.B3);var __namedExportsOrder=["BasicUsage","ProvideCIOClientInstance"];try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"ResultsPageOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/stories/Quiz/Component/index.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}try{ProvideCIOClientInstance.displayName="ProvideCIOClientInstance",ProvideCIOClientInstance.__docgenInfo={description:"",displayName:"ProvideCIOClientInstance",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"ResultsPageOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.stories.tsx#ProvideCIOClientInstance"]={docgenInfo:ProvideCIOClientInstance.__docgenInfo,name:"ProvideCIOClientInstance",path:"src/stories/Quiz/Component/index.stories.tsx#ProvideCIOClientInstance"})}catch(__react_docgen_typescript_loader_error){}}}]);