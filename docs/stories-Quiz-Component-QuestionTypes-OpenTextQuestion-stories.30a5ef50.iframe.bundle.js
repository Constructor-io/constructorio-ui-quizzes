/*! For license information please see stories-Quiz-Component-QuestionTypes-OpenTextQuestion-stories.30a5ef50.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[317],{"./src/stories/Quiz/Component/QuestionTypes/OpenTextQuestion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OpenTextQuestionWithImage:()=>OpenTextQuestionWithImage,OpenTextQuestionWithoutImage:()=>OpenTextQuestionWithoutImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _OpenTextQuestionWith,_OpenTextQuestionWith2,_OpenTextQuestionWith3,_OpenTextQuestionWith4,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),_components_OpenTextTypeQuestion_OpenTextTypeQuestion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/OpenTextTypeQuestion/OpenTextTypeQuestion.tsx"),_tests_mocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Quiz/tests/mocks.tsx"),_QuestionTypeDecorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/Quiz/Component/QuestionTypes/QuestionTypeDecorator.tsx"),_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/CioQuiz/actions.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:"suspendedYield",p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var openTextQuestionWithImage=(0,_tests_mocks__WEBPACK_IMPORTED_MODULE_2__.RK)(_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_4__.L.OpenText),openTextQuestionWithoutImage=(0,_tests_mocks__WEBPACK_IMPORTED_MODULE_2__.RW)(_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_4__.L.OpenText);const __WEBPACK_DEFAULT_EXPORT__={title:"Quiz/Questions/OpenTextQuestion",component:_components_OpenTextTypeQuestion_OpenTextTypeQuestion__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{}};var _play,_play2,OpenTextQuestionWithImage={args:{},decorators:[function(story){return(0,_QuestionTypeDecorator__WEBPACK_IMPORTED_MODULE_3__.Z)(story,openTextQuestionWithImage)}],play:(_play=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(_ref){var canvasElement,canvas;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),document.querySelector(".cio-container--with-image"),_context.next=5,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.getByAltText("Quiz Image")).toBeInTheDocument();case 5:return _context.next=7,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.getByText("This is question title")).toBeInTheDocument();case 7:return _context.next=9,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.getByText("This is question description")).toBeInTheDocument();case 9:return _context.next=11,(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.getByPlaceholderText("Answer here...")).toBeInTheDocument();case 11:return _context.next=13,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByPlaceholderText("Answer here..."),"Name");case 13:(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.getByPlaceholderText("Answer here...").getAttribute("value")).toBe("Name");case 14:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})},OpenTextQuestionWithoutImage={args:{},decorators:[function(story){return(0,_QuestionTypeDecorator__WEBPACK_IMPORTED_MODULE_3__.Z)(story,openTextQuestionWithoutImage)}],play:(_play2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(_ref2){var canvasElement,canvas,title,description,quizImage;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:canvasElement=_ref2.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),title=canvas.getByText("This is question title"),description=canvas.getByText("This is question description"),quizImage=document.querySelector(".cio-question-image"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(quizImage).not.toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(title).toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(description).toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.getByPlaceholderText("Answer here...")).toBeInTheDocument(),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByPlaceholderText("Answer here..."),"Name"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.getByPlaceholderText("Answer here...").getAttribute("value")).toBe("Name");case 11:case"end":return _context2.stop()}}),_callee2)}))),function play(_x2){return _play2.apply(this,arguments)})};OpenTextQuestionWithImage.parameters=_objectSpread(_objectSpread({},OpenTextQuestionWithImage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_OpenTextQuestionWith=OpenTextQuestionWithImage.parameters)||void 0===_OpenTextQuestionWith?void 0:_OpenTextQuestionWith.docs),{},{source:_objectSpread({originalSource:"{\n  args: {},\n  decorators: [story => QuestionTypeDecorator(story, (openTextQuestionWithImage as OpenQuestion))],\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    document.querySelector('.cio-container--with-image');\n\n    // 👇 Assert DOM structure\n    await expect(canvas.getByAltText('Quiz Image')).toBeInTheDocument();\n    await expect(canvas.getByText('This is question title')).toBeInTheDocument();\n    await expect(canvas.getByText('This is question description')).toBeInTheDocument();\n    await expect(canvas.getByPlaceholderText('Answer here...')).toBeInTheDocument();\n    // 👇 Simulate interactions with the component\n    await userEvent.type(canvas.getByPlaceholderText('Answer here...'), 'Name');\n    expect(canvas.getByPlaceholderText('Answer here...').getAttribute('value')).toBe('Name');\n  }\n}"},null===(_OpenTextQuestionWith2=OpenTextQuestionWithImage.parameters)||void 0===_OpenTextQuestionWith2||null===(_OpenTextQuestionWith2=_OpenTextQuestionWith2.docs)||void 0===_OpenTextQuestionWith2?void 0:_OpenTextQuestionWith2.source)})}),OpenTextQuestionWithoutImage.parameters=_objectSpread(_objectSpread({},OpenTextQuestionWithoutImage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_OpenTextQuestionWith3=OpenTextQuestionWithoutImage.parameters)||void 0===_OpenTextQuestionWith3?void 0:_OpenTextQuestionWith3.docs),{},{source:_objectSpread({originalSource:"{\n  args: {},\n  decorators: [story => QuestionTypeDecorator(story, (openTextQuestionWithoutImage as OpenQuestion))],\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // 👇 Assert DOM structure\n    const title = canvas.getByText('This is question title');\n    const description = canvas.getByText('This is question description');\n    const quizImage = document.querySelector('.cio-question-image');\n    expect(quizImage).not.toBeInTheDocument();\n    expect(title).toBeInTheDocument();\n    expect(description).toBeInTheDocument();\n    expect(canvas.getByPlaceholderText('Answer here...')).toBeInTheDocument();\n    // 👇 Simulate interactions with the component\n    userEvent.type(canvas.getByPlaceholderText('Answer here...'), 'Name');\n    expect(canvas.getByPlaceholderText('Answer here...').getAttribute('value')).toBe('Name');\n  }\n}"},null===(_OpenTextQuestionWith4=OpenTextQuestionWithoutImage.parameters)||void 0===_OpenTextQuestionWith4||null===(_OpenTextQuestionWith4=_OpenTextQuestionWith4.docs)||void 0===_OpenTextQuestionWith4?void 0:_OpenTextQuestionWith4.source)})});var __namedExportsOrder=["OpenTextQuestionWithImage","OpenTextQuestionWithoutImage"]},"./src/components/OpenTextTypeQuestion/OpenTextTypeQuestion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_QuestionTitle_QuestionTitle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/QuestionTitle/QuestionTitle.tsx"),_QuestionDescription_QuestionDescription__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/QuestionDescription/QuestionDescription.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils.tsx"),_CioQuiz_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/CioQuiz/context.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__=function OpenTextQuestion(){var question,_useContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CioQuiz_context__WEBPACK_IMPORTED_MODULE_4__.Z),state=_useContext.state,getOpenTextInputProps=_useContext.getOpenTextInputProps;if(null!=state&&state.quiz.currentQuestion&&(question=null==state?void 0:state.quiz.currentQuestion.next_question),question){var _question,hasImage=null===(_question=question)||void 0===_question||null===(_question=_question.images)||void 0===_question?void 0:_question.primary_url;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"\n          cio-container".concat(hasImage?"--with-image":"","\n          cio-open-text-question-container").concat(hasImage?"--with-image":"","\n        "),"data-question-key":question.key,children:[hasImage?(0,_utils__WEBPACK_IMPORTED_MODULE_3__.xl)(question.images,"cio-question-image-container"):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"cio-question-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_QuestionTitle_QuestionTitle__WEBPACK_IMPORTED_MODULE_1__.Z,{title:question.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_QuestionDescription_QuestionDescription__WEBPACK_IMPORTED_MODULE_2__.Z,{description:question.description}),getOpenTextInputProps&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",_objectSpread({},getOpenTextInputProps()))]})]})}return null}},"./src/components/QuestionDescription/QuestionDescription.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function QuestionDescription(props){var description=props.description;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"cio-question-description",children:description})}QuestionDescription.displayName="QuestionDescription";const __WEBPACK_DEFAULT_EXPORT__=QuestionDescription;try{QuestionDescription.displayName="QuestionDescription",QuestionDescription.__docgenInfo={description:"",displayName:"QuestionDescription",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuestionDescription/QuestionDescription.tsx#QuestionDescription"]={docgenInfo:QuestionDescription.__docgenInfo,name:"QuestionDescription",path:"src/components/QuestionDescription/QuestionDescription.tsx#QuestionDescription"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/QuestionTitle/QuestionTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function QuestionTitle(props){var title=props.title;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{className:"cio-question-title",children:title})}QuestionTitle.displayName="QuestionTitle";const __WEBPACK_DEFAULT_EXPORT__=QuestionTitle;try{QuestionTitle.displayName="QuestionTitle",QuestionTitle.__docgenInfo={description:"",displayName:"QuestionTitle",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuestionTitle/QuestionTitle.tsx#QuestionTitle"]={docgenInfo:QuestionTitle.__docgenInfo,name:"QuestionTitle",path:"src/components/QuestionTitle/QuestionTitle.tsx#QuestionTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Quiz/Component/QuestionTypes/QuestionTypeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>QuestionTypeDecorator});var _components_CioQuiz_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/CioQuiz/context.ts"),_tests_mocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Quiz/tests/mocks.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-dom/index.js");function QuestionTypeDecorator(Story,question){var contextValue=(0,_tests_mocks__WEBPACK_IMPORTED_MODULE_1__.lk)(question);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"cio-quiz",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_CioQuiz_context__WEBPACK_IMPORTED_MODULE_0__.Z.Provider,{value:contextValue,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})})}QuestionTypeDecorator.displayName="QuestionTypeDecorator"},"./src/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ez:()=>getStoryParams,FM:()=>getStateFromSessionStorage,Nu:()=>resetQuizSessionStorageState,_v:()=>sleep,fk:()=>stringifyWithDefaults,ik:()=>convertPrimaryColorsToString,iv:()=>getQuestionTypes,kg:()=>logger,lC:()=>rgbToHsl,mf:()=>isFunction,xl:()=>renderImages});__webpack_require__("./node_modules/react/index.js");var _components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/actions.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var renderImages=function renderImages(images,cssClasses){var primaryUrl=images.primary_url,primaryAlt=images.primary_alt,secondaryUrl=images.secondary_url,secondaryAlt=images.secondary_alt;if(primaryUrl){var src=primaryUrl,alt=primaryAlt||"Quiz Image";return window.innerWidth>768&&secondaryUrl&&(src=secondaryUrl,secondaryAlt&&(alt=secondaryAlt)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"".concat(cssClasses||"").trim(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:"cio-question-image",src,alt})})}return""},getStoryParams=function getStoryParams(storyCode,templateCode,importCode){return{docs:{source:{code:"\n".concat(importCode,"\n").concat(storyCode,"\n").concat(templateCode,"\n"),language:"jsx",format:!0,type:"code"}}}},functionStrings={onAddToCartClick:"(item) => console.dir(item)",onQuizResultClick:"(result, position) => console.dir(result, position)",onAddToFavoritesClick:"(result) => {\n      if (result.data) {\n        if (!favorites.includes(result.data.id)) {\n          setFavorites([...favorites, result.data.id]);\n        } else {\n          setFavorites(favorites.filter((id) => id !== result.data?.id));\n        }\n      }\n    }",onQuizResultsLoaded:"(results) => console.dir(results)",onQuizNextQuestion:"(question) => console.dir(question)",onQuizSkipQuestion:"(question) => console.dir(question)",cioJsClient:"cioJsClient"},stringifyWithDefaults=function stringifyWithDefaults(obj){var res=JSON.stringify(obj,(function customJsonTransformer(key,value){return value instanceof Function||"cioJsClient"===key?"".concat(key,"_CODE"):value}),"  ");return Array.from(res.matchAll(/"(\w*)_CODE"/g)).forEach((function(match){var _match=_slicedToArray(match,2),codePlaceholder=_match[0],key=_match[1],functionString=functionStrings[key];functionString?res=res.replaceAll(codePlaceholder,functionString):console.error("Function string for ".concat(key," not found."))})),res},stringify=function stringify(obj){return JSON.stringify(obj,null,"  ")},getQuestionTypes=function getQuestionTypes(questionType){var isOpenQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.OpenText,isCoverQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.Cover,isSingleQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.SingleSelect,isMultipleQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.MultipleSelect;return{isOpenQuestion,isCoverQuestion,isSingleQuestion,isMultipleQuestion,isSelectQuestion:isSingleQuestion||isMultipleQuestion}};function isFunction(fn){return fn&&"function"==typeof fn}var getStateFromSessionStorage=function getStateFromSessionStorage(quizStateKey){var _window,state=null===(_window=window)||void 0===_window||null===(_window=_window.sessionStorage)||void 0===_window?void 0:_window.getItem(quizStateKey);return state?JSON.parse(state):null},resetQuizSessionStorageState=function resetQuizSessionStorageState(quizStateKey){return function(){var _window2;null===(_window2=window)||void 0===_window2||null===(_window2=_window2.sessionStorage)||void 0===_window2||_window2.removeItem(quizStateKey)}},logger=function logger(action){var _process;null!==(_process=process)&&void 0!==process&&null!==(_process=_process.env)&&void 0!==_process&&(console.group("%cAction:%c  ".concat(action.type),"color: red; font-weight: bold;","color: green; font-weight: lighter;"),console.log("%c type:","color: #9E9E9E; font-weight: 700;",action.type),console.log("%c payload:","color: #00A7F7; font-weight: 700;",action.payload),console.groupEnd())};function sleep(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))}function rgbToHsl(r,g,b){var rConverted=r/255,gConverted=g/255,bConverted=b/255,max=Math.max(rConverted,gConverted,bConverted),min=Math.min(rConverted,gConverted,bConverted),delta=max-min,h=0;0===delta?h=0:max===rConverted?h=(gConverted-bConverted)/delta%6:max===gConverted?h=(bConverted-rConverted)/delta+2:max===bConverted&&(h=(rConverted-gConverted)/delta+4);var l=(min+max)/2,s=0===delta?0:delta/(1-Math.abs(2*l-1));return[Math.round(60*h),Math.round(100*s),Math.round(100*l)]}function convertPrimaryColorsToString(primaryColorStyles){return"{\n    --primary-color-h: ".concat(primaryColorStyles["--primary-color-h"],"; \n    --primary-color-s: ").concat(primaryColorStyles["--primary-color-s"],"; \n    --primary-color-l: ").concat(primaryColorStyles["--primary-color-l"],"; \n  }")}try{isFunction.displayName="isFunction",isFunction.__docgenInfo={description:"",displayName:"isFunction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#isFunction"]={docgenInfo:isFunction.__docgenInfo,name:"isFunction",path:"src/utils.tsx#isFunction"})}catch(__react_docgen_typescript_loader_error){}try{sleep.displayName="sleep",sleep.__docgenInfo={description:"",displayName:"sleep",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#sleep"]={docgenInfo:sleep.__docgenInfo,name:"sleep",path:"src/utils.tsx#sleep"})}catch(__react_docgen_typescript_loader_error){}try{convertPrimaryColorsToString.displayName="convertPrimaryColorsToString",convertPrimaryColorsToString.__docgenInfo={description:"",displayName:"convertPrimaryColorsToString",props:{"--primary-color-h":{defaultValue:null,description:"",name:"--primary-color-h",required:!0,type:{name:"string"}},"--primary-color-s":{defaultValue:null,description:"",name:"--primary-color-s",required:!0,type:{name:"string"}},"--primary-color-l":{defaultValue:null,description:"",name:"--primary-color-l",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#convertPrimaryColorsToString"]={docgenInfo:convertPrimaryColorsToString.__docgenInfo,name:"convertPrimaryColorsToString",path:"src/utils.tsx#convertPrimaryColorsToString"})}catch(__react_docgen_typescript_loader_error){}try{stringifyWithDefaults.displayName="stringifyWithDefaults",stringifyWithDefaults.__docgenInfo={description:"",displayName:"stringifyWithDefaults",props:{cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"any"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!0,type:{name:"{ onAddToCartClick: any; onQuizResultClick: any; onQuizResultsLoaded: any; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#stringifyWithDefaults"]={docgenInfo:stringifyWithDefaults.__docgenInfo,name:"stringifyWithDefaults",path:"src/utils.tsx#stringifyWithDefaults"})}catch(__react_docgen_typescript_loader_error){}try{stringify.displayName="stringify",stringify.__docgenInfo={description:"",displayName:"stringify",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#stringify"]={docgenInfo:stringify.__docgenInfo,name:"stringify",path:"src/utils.tsx#stringify"})}catch(__react_docgen_typescript_loader_error){}try{getQuestionTypes.displayName="getQuestionTypes",getQuestionTypes.__docgenInfo={description:"",displayName:"getQuestionTypes",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#getQuestionTypes"]={docgenInfo:getQuestionTypes.__docgenInfo,name:"getQuestionTypes",path:"src/utils.tsx#getQuestionTypes"})}catch(__react_docgen_typescript_loader_error){}try{getStateFromSessionStorage.displayName="getStateFromSessionStorage",getStateFromSessionStorage.__docgenInfo={description:"",displayName:"getStateFromSessionStorage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#getStateFromSessionStorage"]={docgenInfo:getStateFromSessionStorage.__docgenInfo,name:"getStateFromSessionStorage",path:"src/utils.tsx#getStateFromSessionStorage"})}catch(__react_docgen_typescript_loader_error){}try{resetQuizSessionStorageState.displayName="resetQuizSessionStorageState",resetQuizSessionStorageState.__docgenInfo={description:"",displayName:"resetQuizSessionStorageState",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#resetQuizSessionStorageState"]={docgenInfo:resetQuizSessionStorageState.__docgenInfo,name:"resetQuizSessionStorageState",path:"src/utils.tsx#resetQuizSessionStorageState"})}catch(__react_docgen_typescript_loader_error){}try{logger.displayName="logger",logger.__docgenInfo={description:"",displayName:"logger",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#logger"]={docgenInfo:logger.__docgenInfo,name:"logger",path:"src/utils.tsx#logger"})}catch(__react_docgen_typescript_loader_error){}},"?4f7e":()=>{}}]);