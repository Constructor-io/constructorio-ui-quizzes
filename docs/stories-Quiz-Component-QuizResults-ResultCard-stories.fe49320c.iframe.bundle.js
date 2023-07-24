/*! For license information please see stories-Quiz-Component-QuizResults-ResultCard-stories.fe49320c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[261],{"./src/stories/Quiz/Component/QuizResults/ResultCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ResultCardWithRegularPrice:()=>ResultCardWithRegularPrice,ResultCardWithSalePrice:()=>ResultCardWithSalePrice,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ResultCardWithRegula,_ResultCardWithRegula2,_ResultCardWithRegula3,_ResultCardWithSalePr,_ResultCardWithSalePr2,_ResultCardWithSalePr3,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),_components_ResultCard_ResultCard__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/ResultCard/ResultCard.tsx")),_QuizResultsDecorator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/Quiz/Component/QuizResults/QuizResultsDecorator.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var product={value:"This is a result card item",data:{id:"1",price:200,salePrice:150,image_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}};const __WEBPACK_DEFAULT_EXPORT__={title:"Quiz/Results/ResultCard",component:_components_ResultCard_ResultCard__WEBPACK_IMPORTED_MODULE_3__.Z,argTypes:{}};var _play,_play2,regularPriceArgs={result:product,regularPriceKey:"price",resultPosition:0},ResultCardWithRegularPrice={args:regularPriceArgs,render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"results-example-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ResultCard_ResultCard__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread({},regularPriceArgs))})},decorators:[function(story){return(0,_QuizResultsDecorator__WEBPACK_IMPORTED_MODULE_4__.Z)(story)}],play:(_play=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(_ref){var canvasElement,canvas,resultCard,productImage,productName,addToCart,regularPrice;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:canvasElement=_ref.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement),resultCard=document.querySelector(".cio-result-card"),productImage=canvas.getByAltText("product"),productName=canvas.getByText("This is a result card item"),addToCart=canvas.getByText("Add to Cart"),regularPrice=document.querySelector(".cio-result-card-regular-price"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toContainElement(productImage),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toContainElement(productName),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toContainElement(addToCart),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toContainElement(regularPrice);case 12:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})},salePriceStoryArgs={result:product,regularPriceKey:"price",salePriceKey:"salePrice",resultPosition:0},ResultCardWithSalePrice={args:salePriceStoryArgs,render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"results-example-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ResultCard_ResultCard__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread({},salePriceStoryArgs))})},decorators:[function(story){return(0,_QuizResultsDecorator__WEBPACK_IMPORTED_MODULE_4__.Z)(story)}],play:(_play2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(_ref2){var canvasElement,canvas,resultCard,productImage,productName,addToCart,regularPriceStrikeThrough,salePrice;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:canvasElement=_ref2.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement),resultCard=document.querySelector(".cio-result-card"),productImage=canvas.getByAltText("product"),productName=canvas.getByText("This is a result card item"),addToCart=canvas.getByText("Add to Cart"),regularPriceStrikeThrough=document.querySelector(".cio-result-card-regular-price--strike-through"),salePrice=document.querySelector(".cio-result-card-sale-price"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toContainElement(productImage),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toContainElement(productName),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toContainElement(addToCart),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toContainElement(regularPriceStrikeThrough),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(resultCard).toContainElement(salePrice);case 14:case"end":return _context2.stop()}}),_callee2)}))),function play(_x2){return _play2.apply(this,arguments)})};ResultCardWithRegularPrice.parameters=_objectSpread(_objectSpread({},ResultCardWithRegularPrice.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ResultCardWithRegula=ResultCardWithRegularPrice.parameters)||void 0===_ResultCardWithRegula?void 0:_ResultCardWithRegula.docs),{},{source:_objectSpread({originalSource:"{\n  args: regularPriceArgs,\n  render: () => <div className=\"results-example-wrapper\"><ResultCard {...regularPriceArgs} /></div>,\n  // eslint-disable-line\n\n  decorators: [story => QuizResultsDecorator(story)],\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // 👇 Assert DOM structure\n    const resultCard = document.querySelector('.cio-result-card');\n    const productImage = canvas.getByAltText('product');\n    const productName = canvas.getByText('This is a result card item');\n    const addToCart = canvas.getByText('Add to Cart');\n    const regularPrice = (document.querySelector('.cio-result-card-regular-price') as HTMLElement);\n    expect(resultCard).toBeInTheDocument();\n    expect(resultCard).toContainElement(productImage);\n    expect(resultCard).toContainElement(productName);\n    expect(resultCard).toContainElement(addToCart);\n    expect(resultCard).toContainElement(regularPrice);\n  }\n}"},null===(_ResultCardWithRegula2=ResultCardWithRegularPrice.parameters)||void 0===_ResultCardWithRegula2||null===(_ResultCardWithRegula3=_ResultCardWithRegula2.docs)||void 0===_ResultCardWithRegula3?void 0:_ResultCardWithRegula3.source)})}),ResultCardWithSalePrice.parameters=_objectSpread(_objectSpread({},ResultCardWithSalePrice.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ResultCardWithSalePr=ResultCardWithSalePrice.parameters)||void 0===_ResultCardWithSalePr?void 0:_ResultCardWithSalePr.docs),{},{source:_objectSpread({originalSource:"{\n  args: salePriceStoryArgs,\n  render: () => <div className=\"results-example-wrapper\"><ResultCard {...salePriceStoryArgs} /></div>,\n  // eslint-disable-line\n\n  decorators: [story => QuizResultsDecorator(story)],\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // 👇 Assert DOM structure\n    const resultCard = document.querySelector('.cio-result-card');\n    const productImage = canvas.getByAltText('product');\n    const productName = canvas.getByText('This is a result card item');\n    const addToCart = canvas.getByText('Add to Cart');\n    const regularPriceStrikeThrough = (document.querySelector('.cio-result-card-regular-price--strike-through') as HTMLElement);\n    const salePrice = (document.querySelector('.cio-result-card-sale-price') as HTMLElement);\n    expect(resultCard).toBeInTheDocument();\n    expect(resultCard).toContainElement(productImage);\n    expect(resultCard).toContainElement(productName);\n    expect(resultCard).toContainElement(addToCart);\n    expect(resultCard).toContainElement(regularPriceStrikeThrough);\n    expect(resultCard).toContainElement(salePrice);\n  }\n}"},null===(_ResultCardWithSalePr2=ResultCardWithSalePrice.parameters)||void 0===_ResultCardWithSalePr2||null===(_ResultCardWithSalePr3=_ResultCardWithSalePr2.docs)||void 0===_ResultCardWithSalePr3?void 0:_ResultCardWithSalePr3.source)})});var __namedExportsOrder=["ResultCardWithRegularPrice","ResultCardWithSalePrice"]},"./src/components/CioQuiz/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./src/components/ResultCard/ResultCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ResultCard});var react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./src/components/CioQuiz/context.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ResultCtaButton(props){var item=props.item,className=props.className,price=props.price,addToCart=(0,react.useContext)(context.Z).addToCart;return(0,jsx_runtime.jsx)("button",{type:"button",className:"cio-result-card-cta-button ".concat(className||""),onClick:function onClick(e){addToCart&&addToCart(e,item,price)},children:"Add to Cart"})}ResultCtaButton.displayName="ResultCtaButton";try{ResultCtaButton.displayName="ResultCtaButton",ResultCtaButton.__docgenInfo={description:"",displayName:"ResultCtaButton",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Partial<QuizResultData>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultCtaButton/ResultCtaButton.tsx#ResultCtaButton"]={docgenInfo:ResultCtaButton.__docgenInfo,name:"ResultCtaButton",path:"src/components/ResultCtaButton/ResultCtaButton.tsx#ResultCtaButton"})}catch(__react_docgen_typescript_loader_error){}function ResultCard(props){var _result$data,_result$data2,result=props.result,salePriceKey=props.salePriceKey,regularPriceKey=props.regularPriceKey,resultPosition=props.resultPosition,_useContext=(0,react.useContext)(context.Z),resultClick=_useContext.resultClick,customClickItemCallback=_useContext.customClickItemCallback,salePrice=salePriceKey&&(null==result||null===(_result$data=result.data)||void 0===_result$data?void 0:_result$data[salePriceKey]),regularPrice=regularPriceKey&&(null==result||null===(_result$data2=result.data)||void 0===_result$data2?void 0:_result$data2[regularPriceKey]),clickHandler=function clickHandler(){resultClick&&resultClick(result,resultPosition)},keyDownHandler=function keyDownHandler(event){" "!==(null==event?void 0:event.key)&&"Enter"!==(null==event?void 0:event.key)||resultClick&&resultClick(result,resultPosition)},resultCardContent=function resultCardContent(){var _result$data3;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"cio-result-card-image",children:(0,jsx_runtime.jsx)("img",{src:null===(_result$data3=result.data)||void 0===_result$data3?void 0:_result$data3.image_url,alt:"product"})}),(0,jsx_runtime.jsxs)("div",{className:"cio-result-card-text",children:[(0,jsx_runtime.jsx)("p",{className:"cio-result-card-title",children:result.value}),(0,jsx_runtime.jsxs)("div",{className:"cio-result-card-prices",children:[salePrice&&(0,jsx_runtime.jsxs)("span",{className:"cio-result-card-sale-price",children:["$",salePrice]}),regularPrice&&(0,jsx_runtime.jsxs)("span",{className:"cio-result-card-regular-price".concat(salePrice?"--strike-through":""),children:["$",regularPrice]})]})]})]})};return(0,jsx_runtime.jsxs)("div",{className:"cio-result-card",children:[customClickItemCallback?function resultCardContentWithoutLink(){return(0,jsx_runtime.jsx)("div",{className:"cio-result-card-container",onClick:function onClick(){return clickHandler()},onKeyDown:function onKeyDown(e){return keyDownHandler(e)},role:"button",tabIndex:0,children:resultCardContent()})}():function resultCardContentWithLink(){var _result$data4;return(0,jsx_runtime.jsx)("a",{className:"cio-result-card-anchor",href:null===(_result$data4=result.data)||void 0===_result$data4?void 0:_result$data4.url,onClick:function onClick(){return clickHandler()},onKeyDown:function onKeyDown(e){return keyDownHandler(e)},children:resultCardContent()})}(),(0,jsx_runtime.jsx)(ResultCtaButton,{item:result,price:salePrice||regularPrice})]})}ResultCard.displayName="ResultCard";try{ResultCard.displayName="ResultCard",ResultCard.__docgenInfo={description:"",displayName:"ResultCard",props:{result:{defaultValue:null,description:"",name:"result",required:!0,type:{name:"Partial<QuizResultData>"}},salePriceKey:{defaultValue:null,description:"",name:"salePriceKey",required:!1,type:{name:"string"}},regularPriceKey:{defaultValue:null,description:"",name:"regularPriceKey",required:!1,type:{name:"string"}},resultPosition:{defaultValue:null,description:"",name:"resultPosition",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultCard/ResultCard.tsx#ResultCard"]={docgenInfo:ResultCard.__docgenInfo,name:"ResultCard",path:"src/components/ResultCard/ResultCard.tsx#ResultCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Quiz/Component/QuizResults/QuizResultsDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>QuizResultsDecorator});var _components_CioQuiz_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/CioQuiz/context.ts"),_tests_mocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Quiz/tests/mocks.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-dom/index.js");function QuizResultsDecorator(Story){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{onAddToCartClick:function onAddToCartClick(){}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"cio-quiz",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_CioQuiz_context__WEBPACK_IMPORTED_MODULE_0__.Z.Provider,{value:(0,_tests_mocks__WEBPACK_IMPORTED_MODULE_1__.Vq)(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{options})})})})}QuizResultsDecorator.displayName="QuizResultsDecorator"},"./src/stories/Quiz/tests/mocks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{CT:()=>questionOptionsWithImages,RK:()=>getMockQuestionWithImage,RW:()=>getMockQuestion,Vq:()=>getMockContextValue,nx:()=>questionOptions});var getMockQuestion=function getMockQuestion(type){return{id:1,title:"This is question title",description:"This is question description",cta_text:"Continue",type}},getMockQuestionWithImage=function getMockQuestionWithImage(type){return _objectSpread(_objectSpread({},getMockQuestion(type)),{images:{primary_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}})},getMockOption=function getMockOption(id,value){return{id,value,attribute:{name:value,value}}},getMockOptionWithImage=function getMockOptionWithImage(id,value){return _objectSpread(_objectSpread({},getMockOption(id,value)),{images:{primary_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}})},questionOptionsWithImages=[_objectSpread({},getMockOptionWithImage(0,"coffee")),_objectSpread({},getMockOptionWithImage(1,"tea")),_objectSpread({},getMockOptionWithImage(2,"water"))],questionOptions=[_objectSpread({},getMockOption(0,"coffee")),_objectSpread({},getMockOption(1,"tea")),_objectSpread({},getMockOption(2,"water"))],getMockState=function getMockState(question){return{answers:{inputs:{1:""},isLastAnswer:!1},quiz:{requestState:1,versionId:"",sessionId:"",isFirstQuestion:!1,currentQuestion:{next_question:question},results:{response:{results:[{value:"This is a result card item",data:{id:"0",price:100,image_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}},{value:"This is a result card item",data:{id:"1",price:200,salePrice:150,image_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}},{value:"This is a result card item",data:{id:"2",price:300,salePrice:250,image_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}}]}},resultsFilters:["Chocolate","Medium"]}}},getMockContextValue=function getMockContextValue(question){return{state:getMockState(question),previousQuestion:function previousQuestion(){},nextQuestion:function nextQuestion(){},addToCart:function addToCart(){},customClickItemCallback:!1,resetQuiz:function resetQuiz(){},resultClick:function resultClick(){}}}},"?4f7e":()=>{}}]);