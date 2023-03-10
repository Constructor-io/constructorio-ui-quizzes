/*! For license information please see stories-Quiz-tests-index-stories.285f2347.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcio_quiz_temp=self.webpackChunkcio_quiz_temp||[]).push([[664],{"./src/stories/Quiz/tests/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,e2eInteractionTest:()=>e2eInteractionTest});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_components_CioQuiz__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CioQuiz/index.tsx"),_argTypes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/Quiz/argTypes.ts"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils.tsx"),_Component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/Quiz/Component/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/constants.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}const __WEBPACK_DEFAULT_EXPORT__={title:"Quiz/Interaction Tests",component:_components_CioQuiz__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:_argTypes__WEBPACK_IMPORTED_MODULE_3__.P,parameters:{docs:{page:null}}};var e2eInteractionTest=_Component__WEBPACK_IMPORTED_MODULE_5__.Ty.bind({});e2eInteractionTest.args={apiKey:_constants__WEBPACK_IMPORTED_MODULE_6__.q1,quizId:_constants__WEBPACK_IMPORTED_MODULE_6__.au},(0,_Component__WEBPACK_IMPORTED_MODULE_5__.Cp)(e2eInteractionTest,"const args = ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.Pz)(e2eInteractionTest.args)),_constants__WEBPACK_IMPORTED_MODULE_6__.co),e2eInteractionTest.play=function(){var _ref2=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(_ref){var canvasElement,canvas;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),_context.t0=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=5,canvas.findByRole("button");case 5:return _context.t1=_context.sent,(0,_context.t0)(_context.t1).toHaveClass("disabled"),_context.next=9,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByRole("textbox"),"Bobby",{delay:100});case 9:return(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button")).not.toHaveClass("disabled"),_context.next=12,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button"));case 12:return _context.t2=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=15,canvas.findByText(/Nice to meet you/);case 15:return _context.t3=_context.sent,(0,_context.t2)(_context.t3).toBeInTheDocument(),_context.t4=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=20,canvas.findByRole("button",{name:"Continue"});case 20:return _context.t5=_context.sent,(0,_context.t4)(_context.t5).not.toHaveClass("disabled"),_context.next=24,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 24:return _context.t6=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=27,canvas.findByText("How much coffee do you generally drink?");case 27:return _context.t7=_context.sent,(0,_context.t6)(_context.t7).toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:"Continue"})).toHaveClass("disabled"),_context.next=32,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:/More than one/}));case 32:return(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:/More than one/})).toHaveClass("selected"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:"Continue"})).not.toHaveClass("disabled"),_context.next=36,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:/All day long/}));case 36:return(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:/All day long/})).toHaveClass("selected"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:/More than one/})).not.toHaveClass("selected"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:"Continue"})).not.toHaveClass("disabled"),_context.next=41,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 41:return _context.t8=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=44,canvas.findByText("What are your preferred brewing methods?");case 44:return _context.t9=_context.sent,(0,_context.t8)(_context.t9).toBeInTheDocument(),_context.next=48,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Back"}));case 48:return _context.t10=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=51,canvas.findByText("How much coffee do you generally drink?");case 51:return _context.t11=_context.sent,(0,_context.t10)(_context.t11).toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:/All day long/})).toHaveClass("selected"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:"Continue"})).not.toHaveClass("disabled"),_context.next=57,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 57:return _context.t12=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=60,canvas.findByText("What are your preferred brewing methods?");case 60:return _context.t13=_context.sent,(0,_context.t12)(_context.t13).toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:"Continue"})).toHaveClass("disabled"),_context.next=65,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:/Chemex/}));case 65:return(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:"Continue"})).not.toHaveClass("disabled"),_context.next=68,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:/Espresso Machine/}));case 68:return(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:/Chemex/})).toHaveClass("selected"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:/Espresso Machine/})).toHaveClass("selected"),_context.next=72,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 72:return _context.t14=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=75,canvas.findByText("Did you know?");case 75:return _context.t15=_context.sent,(0,_context.t14)(_context.t15).toBeInTheDocument(),_context.next=79,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Back"}));case 79:return _context.t16=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=82,canvas.findByText("What are your preferred brewing methods?");case 82:return _context.t17=_context.sent,(0,_context.t16)(_context.t17).toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:/Espresso Machine/})).toHaveClass("selected"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:/Chemex/})).toHaveClass("selected"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:"Continue"})).not.toHaveClass("disabled"),_context.next=89,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 89:return _context.t18=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=92,canvas.findByText("Did you know?");case 92:return _context.t19=_context.sent,(0,_context.t18)(_context.t19).toBeInTheDocument(),_context.next=96,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 96:return _context.t20=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=99,canvas.findByText("Do you have a preferred coffee growing region?");case 99:return _context.t21=_context.sent,(0,_context.t20)(_context.t21).toBeInTheDocument(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:"Continue"})).toHaveClass("disabled"),_context.next=104,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:/No, I'm open/}));case 104:return(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("button",{name:"Continue"})).not.toHaveClass("disabled"),_context.next=107,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 107:return _context.t22=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=110,canvas.findByText("Do you have preferred coffee notes?");case 110:return _context.t23=_context.sent,(0,_context.t22)(_context.t23).toBeInTheDocument(),_context.next=114,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Chocolates"}));case 114:return _context.next=116,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 116:return _context.t24=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=119,canvas.findByText("Lastly, do you have a roasting preference?");case 119:return _context.t25=_context.sent,(0,_context.t24)(_context.t25).toBeInTheDocument(),_context.next=123,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Medium"}));case 123:return _context.next=125,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 125:return _context.t26=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=128,canvas.findByText("Are you into latte-art?");case 128:return _context.t27=_context.sent,(0,_context.t26)(_context.t27).toBeInTheDocument(),_context.next=132,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"I have no idea"}));case 132:return _context.next=134,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("button",{name:"Continue"}));case 134:return _context.t28=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=137,canvas.findByText("Especially Curated For You!");case 137:return _context.t29=_context.sent,(0,_context.t28)(_context.t29),_context.t30=_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV,_context.next=142,canvas.findByRole("button",{name:"Reset"});case 142:return _context.t31=_context.sent,_context.next=145,_context.t30.click.call(_context.t30,_context.t31);case 145:return _context.t32=_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l,_context.next=148,canvas.findByText("Oh, hi there!");case 148:_context.t33=_context.sent,(0,_context.t32)(_context.t33).toBeInTheDocument();case 150:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref2.apply(this,arguments)}}();var __namedExportsOrder=["e2eInteractionTest"];try{e2eInteractionTest.displayName="e2eInteractionTest",e2eInteractionTest.__docgenInfo={description:"",displayName:"e2eInteractionTest",props:{quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/tests/index.stories.tsx#e2eInteractionTest"]={docgenInfo:e2eInteractionTest.__docgenInfo,name:"e2eInteractionTest",path:"src/stories/Quiz/tests/index.stories.tsx#e2eInteractionTest"})}catch(__react_docgen_typescript_loader_error){}},"?4f7e":()=>{}}]);