(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[593],{"./node_modules/@babel/runtime/helpers/interopRequireDefault.js":module=>{module.exports=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/stories/Quiz/Hooks/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicUsage:()=>BasicUsage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var QuizResultsEventsProps,QuizEventsReturn,RedoSVG=__webpack_require__("./src/components/RedoButton/RedoSVG.tsx"),useQuiz=(__webpack_require__("./src/components/CioQuiz/index.tsx"),__webpack_require__("./src/hooks/useQuiz.ts")),ResultCtaButton=(__webpack_require__("./src/components/QuizQuestions/index.tsx"),__webpack_require__("./src/components/OpenTextTypeQuestion/OpenTextTypeQuestion.tsx"),__webpack_require__("./src/components/CoverTypeQuestion/CoverTypeQuestion.tsx"),__webpack_require__("./src/components/SelectTypeQuestion/SelectTypeQuestion.tsx"),__webpack_require__("./src/components/Results/Results.tsx"),__webpack_require__("./src/components/ResultCard/ResultCard.tsx"),__webpack_require__("./src/components/ResultContainer/ResultContainer.tsx"),__webpack_require__("./src/components/ResultFilters/ResultFilters.tsx"),__webpack_require__("./src/components/ResultCtaButton/ResultCtaButton.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ResultHeroCard(props){var _heroItem$data,_heroItem$data2,heroItem=props.heroItem;return(0,jsx_runtime.jsxs)("div",{className:"cio-hero-card",children:[(0,jsx_runtime.jsx)("img",{className:"cio-hero-card-image",src:null==heroItem||null===(_heroItem$data=heroItem.data)||void 0===_heroItem$data?void 0:_heroItem$data.image_url,alt:"product"}),(0,jsx_runtime.jsxs)("div",{className:"cio-hero-card-contents",children:[(0,jsx_runtime.jsx)("div",{className:"cio-hero-card-title",children:"Especially Curated For You!"}),(0,jsx_runtime.jsx)("h2",{className:"cio-hero-card-item-name",children:null==heroItem?void 0:heroItem.value}),(0,jsx_runtime.jsxs)("div",{className:"cio-hero-card-item-price",children:["$",null==heroItem||null===(_heroItem$data2=heroItem.data)||void 0===_heroItem$data2?void 0:_heroItem$data2.price]}),(0,jsx_runtime.jsx)("p",{className:"cio-hero-card-item-description"}),(0,jsx_runtime.jsx)(ResultCtaButton.Z,{item:[heroItem]})]})]})}ResultHeroCard.displayName="ResultHeroCard";try{ResultHeroCard.displayName="ResultHeroCard",ResultHeroCard.__docgenInfo={description:"",displayName:"ResultHeroCard",props:{heroItem:{defaultValue:null,description:"",name:"heroItem",required:!0,type:{name:"Partial<BrowseResultData>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultHeroCard/ResultHeroCard.tsx#ResultHeroCard"]={docgenInfo:ResultHeroCard.__docgenInfo,name:"ResultHeroCard",path:"src/components/ResultHeroCard/ResultHeroCard.tsx#ResultHeroCard"})}catch(__react_docgen_typescript_loader_error){}QuizResultsEventsProps||(QuizResultsEventsProps={}),QuizEventsReturn||(QuizEventsReturn={});__webpack_require__("./src/styles.css");var utils=__webpack_require__("./src/utils.tsx");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HooksTemplate(args){var _useCioQuiz=(0,useQuiz.Z)(args),state=_useCioQuiz.state,getOpenTextInputProps=_useCioQuiz.getOpenTextInputProps,getNextQuestionButtonProps=_useCioQuiz.getNextQuestionButtonProps,getPreviousQuestionButtonProps=_useCioQuiz.getPreviousQuestionButtonProps,getQuizImageProps=_useCioQuiz.getQuizImageProps,getSelectQuestionImageProps=_useCioQuiz.getSelectQuestionImageProps,getSelectInputProps=_useCioQuiz.getSelectInputProps,getResetQuizButtonProps=_useCioQuiz.getResetQuizButtonProps,getQuizResultButtonProps=_useCioQuiz.getQuizResultButtonProps,getAddToCartButtonProps=_useCioQuiz.getAddToCartButtonProps;if("SUCCESS"===state.quiz.requestState){var _state$quiz$results,_state$quiz$results$r,_state$quiz$selectedO,quizResults=null===(_state$quiz$results=state.quiz.results)||void 0===_state$quiz$results||null===(_state$quiz$results$r=_state$quiz$results.response)||void 0===_state$quiz$results$r?void 0:_state$quiz$results$r.results,zeroResults=!(null!=quizResults&&quizResults.length);if(quizResults)return(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsxs)("div",{className:"cio-results-container",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-results-title",children:"Results"}),(0,jsx_runtime.jsxs)("div",{className:"cio-results-filter-and-redo-container",children:[(0,jsx_runtime.jsxs)("div",{className:"cio-results-filter-container",children:[(0,jsx_runtime.jsx)("p",{children:"Because you answered"}),(0,jsx_runtime.jsx)("div",{className:"cio-results-filter-options",children:null==state||null===(_state$quiz$selectedO=state.quiz.selectedOptionsWithAttributes)||void 0===_state$quiz$selectedO?void 0:_state$quiz$selectedO.map((function(option){return(0,jsx_runtime.jsx)("div",{className:"cio-results-filter-option",children:option},option)}))})]}),(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({},getResetQuizButtonProps()),{},{children:[(0,jsx_runtime.jsx)(RedoSVG.Z,{}),(0,jsx_runtime.jsx)("span",{children:"redo"})]}))]}),(0,jsx_runtime.jsx)("div",{className:"cio-results",children:!zeroResults&&quizResults.map((function(result,i){var _result$data;return(0,jsx_runtime.jsx)("div",{className:"cio-result-card",children:(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({},getQuizResultButtonProps({result,position:i})),{},{children:[(0,jsx_runtime.jsx)("div",{className:"cio-result-card-image",children:(0,jsx_runtime.jsx)("img",{src:null===(_result$data=result.data)||void 0===_result$data?void 0:_result$data.image_url,alt:"product"})}),(0,jsx_runtime.jsxs)("div",{className:"cio-result-card-text",children:[(0,jsx_runtime.jsx)("p",{className:"cio-result-card-title",children:result.value}),(0,jsx_runtime.jsxs)("div",{className:"cio-result-card-prices",children:[result.data.price&&(0,jsx_runtime.jsxs)("span",{className:"cio-result-card-sale-price",children:["$",result.data.price]}),result.data.price&&(0,jsx_runtime.jsxs)("span",{className:"cio-result-card-regular-price".concat(result.data.price?"--strike-through":""),children:["$",result.data.price]})]})]}),(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getAddToCartButtonProps(result,result.data.price)),{},{children:"Add to Cart"}))]}))})}))}),zeroResults&&(0,jsx_runtime.jsxs)("div",{className:"cio-zero-results",children:[(0,jsx_runtime.jsx)("h3",{className:"cio-zero-results-subtitle",children:"Sorry, we couldn’t find products that perfectly match your preferences."}),(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getResetQuizButtonProps()),{},{className:"",children:"Redo Quiz"}))})]})]})});var currentQuestion=state.quiz.currentQuestion,currentQuestionData=state.quiz.currentQuestion.next_question;if(currentQuestion){var _currentQuestion$next,_currentQuestion$next2,_currentQuestion$next3,_currentQuestion$next4;if(currentQuestion.isOpenQuestion)return(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsxs)("div",{className:"cio-container--with-image cio-open-text-question-container--with-image",children:[(null===(_currentQuestion$next=currentQuestion.next_question.images)||void 0===_currentQuestion$next?void 0:_currentQuestion$next.primary_url)&&(0,jsx_runtime.jsx)("span",{className:"cio-question-image-container",children:(0,jsx_runtime.jsx)("img",_objectSpread(_objectSpread({},getQuizImageProps()),{},{className:"cio-question-image"}))}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-content",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-question-title",children:currentQuestionData.title}),(0,jsx_runtime.jsx)("p",{className:"cio-question-description",children:currentQuestionData.description}),(0,jsx_runtime.jsx)("input",_objectSpread({},getOpenTextInputProps())),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getPreviousQuestionButtonProps()),{},{children:"Back"})),(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getNextQuestionButtonProps()),{},{children:"Continue"}))})]})]})]})});if(currentQuestion.isCoverQuestion)return(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsxs)("div",{className:"cio-container--with-image cio-cover-question-container--with-image",children:[(null===(_currentQuestion$next2=currentQuestion.next_question.images)||void 0===_currentQuestion$next2?void 0:_currentQuestion$next2.primary_url)&&(0,jsx_runtime.jsx)("span",{className:"cio-question-image-container",children:(0,jsx_runtime.jsx)("img",_objectSpread(_objectSpread({},getQuizImageProps()),{},{className:"cio-question-image"}))}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-content",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-question-title",children:currentQuestionData.title}),(0,jsx_runtime.jsx)("p",{className:"cio-question-description",children:currentQuestionData.description}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getPreviousQuestionButtonProps()),{},{children:"Back"})),(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getNextQuestionButtonProps()),{},{children:"Continue"}))})]})]})]})});if(currentQuestion.isSelectQuestion)return(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsxs)("div",{className:"cio-select-question-container",children:[(0,jsx_runtime.jsxs)("div",{className:"cio-select-question-text",children:[(0,jsx_runtime.jsx)("h1",{children:currentQuestionData.title}),(0,jsx_runtime.jsx)("p",{children:currentQuestionData.description})]}),(0,jsx_runtime.jsx)("div",{className:"cio-question-options-container",children:null===(_currentQuestion$next3=currentQuestion.next_question)||void 0===_currentQuestion$next3||null===(_currentQuestion$next4=_currentQuestion$next3.options)||void 0===_currentQuestion$next4?void 0:_currentQuestion$next4.map((function(option){return(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({},getSelectInputProps(option)),{},{children:[option.images?(0,jsx_runtime.jsx)("img",_objectSpread({},getSelectQuestionImageProps(option))):"",(0,jsx_runtime.jsx)("div",{className:"cio-question-option-value",children:null==option?void 0:option.value})]}))}))}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getPreviousQuestionButtonProps()),{},{children:"Back"})),(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getNextQuestionButtonProps()),{},{children:"Continue"}))})]})]})})}}return null}var getHookStoryParams=function getHookStoryParams(storyCode){return(0,utils.Ez)(storyCode,"\nfunction HooksTemplate(quizConfiguration) {\n  const {\n    state,\n    getOpenTextInputProps,\n    getNextQuestionButtonProps,\n    getPreviousQuestionButtonProps,\n    getQuizImageProps,\n    getSelectQuestionImageProps,\n    getSelectInputProps,\n    getResetQuizButtonProps,\n    getQuizResultButtonProps,\n    getAddToCartButtonProps,\n  } = useCioQuiz(quizConfiguration);\n\n  if (state.quiz.requestState === 'SUCCESS') {\n    const quizResults = state.quiz.results?.response?.results;\n    const zeroResults = !quizResults?.length;\n\n    // Quiz Results\n    if (quizResults) {\n      return (\n        <div className='cio-quiz'>\n          <div className='cio-results-container'>\n            <h1 className='cio-results-title'>Results</h1>\n            <div className='cio-results-filter-and-redo-container'>\n              <div className='cio-results-filter-container'>\n                <p>Because you answered</p>\n                <div className='cio-results-filter-options'>\n                  {state?.quiz.selectedOptionsWithAttributes?.map((option) => (\n                    <div className='cio-results-filter-option' key={option}>\n                      {option}\n                    </div>\n                  ))}\n                </div>\n              </div>\n              <button {...getResetQuizButtonProps()}>\n                <RedoSVG />\n                <span>redo</span>\n              </button>\n            </div>\n            <div className='cio-results'>\n              {!zeroResults &&\n                quizResults.map((result, i) => (\n                  <div className='cio-result-card'>\n                    <div\n                      {...getQuizResultButtonProps({\n                        result,\n                        position: i,\n                      })}>\n                      <div className='cio-result-card-image'>\n                        <img src={result.data?.image_url} alt='product' />\n                      </div>\n                      <div className='cio-result-card-text'>\n                        <p className='cio-result-card-title'>{result.value}</p>\n                        <div className='cio-result-card-prices'>\n                          {result.data.price && (\n                            <span className='cio-result-card-sale-price'>{result.data.price}</span>\n                          )}\n                          {result.data.price && (\n                            <span\n                              className={'cio-result-card-regular-price${\n                                result.data.price ? '--strike-through' : ''\n                              '}}>\n                              ${result.data.price}\n                            </span>\n                          )}\n                        </div>\n                      </div>\n                      <button {...getAddToCartButtonProps(result, result.data.price)}>\n                        Add to Cart\n                      </button>\n                    </div>\n                  </div>\n                ))}\n            </div>\n\n            {zeroResults && (\n              <div className='cio-zero-results'>\n                <h3 className='cio-zero-results-subtitle'>\n                  Sorry, we couldn’t find products that perfectly match your preferences.\n                </h3>\n                <div className='cio-button-container'>\n                  <button {...getResetQuizButtonProps()} className=''>\n                    Redo Quiz\n                  </button>\n                </div>\n              </div>\n            )}\n          </div>\n        </div>\n      );\n    }\n\n    const { currentQuestion } = state.quiz;\n    const currentQuestionData = state.quiz.currentQuestion.next_question;\n    if (currentQuestion) {\n      // Open Text Question\n      if (currentQuestion.isOpenQuestion) {\n        return (\n          <div className='cio-quiz'>\n            <div className='cio-container--with-image cio-open-text-question-container--with-image'>\n              {currentQuestion.next_question.images?.primary_url && (\n                <span className='cio-question-image-container'>\n                  <img {...getQuizImageProps()} className='cio-question-image' />\n                </span>\n              )}\n              <div className='cio-question-content'>\n                <h1 className='cio-question-title'>{currentQuestionData.title}</h1>\n                <p className='cio-question-description'>{currentQuestionData.description}</p>\n                <input {...getOpenTextInputProps()} />\n                <div className='cio-question-buttons-container'>\n                  <button {...getPreviousQuestionButtonProps()}>Back</button>\n                  <div className='cio-button-container'>\n                    <button {...getNextQuestionButtonProps()}>Continue</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        );\n      }\n\n      // Cover Question\n      if (currentQuestion.isCoverQuestion) {\n        return (\n          <div className='cio-quiz'>\n            <div className='cio-container--with-image cio-cover-question-container--with-image'>\n              <div className='cio-question-content'>\n                <h1 className='cio-question-title'>{currentQuestionData.title}</h1>\n                <p className='cio-question-description'>{currentQuestionData.description}</p>\n                <div className='cio-question-buttons-container'>\n                  <button {...getPreviousQuestionButtonProps()}>Back</button>\n                  <div className='cio-button-container'>\n                    <button {...getNextQuestionButtonProps()}>Continue</button>\n                  </div>\n                </div>\n              </div>\n              {currentQuestion.next_question.images?.primary_url && (\n                <span className='cio-question-image-container'>\n                  <img {...getQuizImageProps()} className='cio-question-image' />\n                </span>\n              )}\n            </div>\n          </div>\n        );\n      }\n\n      // Select Question\n      if (currentQuestion.isSelectQuestion) {\n        return (\n          <div className='cio-quiz'>\n            <div className='cio-select-question-container'>\n              <div className='cio-select-question-text'>\n                <h1>{currentQuestionData.title}</h1>\n                <p>{currentQuestionData.description}</p>\n              </div>\n              <div className='cio-question-options-container'>\n                {currentQuestion.next_question?.options?.map((option: QuestionOption) => (\n                  <div {...getSelectInputProps(option)}>\n                    {option.images ? <img {...getSelectQuestionImageProps(option)} /> : ''}\n                    <div className='cio-question-option-value'>{option?.value}</div>\n                  </div>\n                ))}\n              </div>\n\n              <div className='cio-question-buttons-container'>\n                <button {...getPreviousQuestionButtonProps()}>Back</button>\n                <div className='cio-button-container'>\n                  <button {...getNextQuestionButtonProps()}>Continue</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        );\n      }\n    }\n  }\n  return null;\n}\n","import { useCioQuiz } from '@constructor-io/constructorio-ui-quiz';")};try{Hooks.displayName="Hooks",Hooks.__docgenInfo={description:"",displayName:"Hooks",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Hooks/index.tsx#Hooks"]={docgenInfo:Hooks.__docgenInfo,name:"Hooks",path:"src/stories/Quiz/Hooks/index.tsx#Hooks"})}catch(__react_docgen_typescript_loader_error){}try{getHookStoryParams.displayName="getHookStoryParams",getHookStoryParams.__docgenInfo={description:"",displayName:"getHookStoryParams",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Hooks/index.tsx#getHookStoryParams"]={docgenInfo:getHookStoryParams.__docgenInfo,name:"getHookStoryParams",path:"src/stories/Quiz/Hooks/index.tsx#getHookStoryParams"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/constants.ts");const index_stories={title:"Quiz/Hooks",component:HooksTemplate,argTypes:__webpack_require__("./src/stories/Quiz/argTypes.ts").P,tags:["autodocs"],parameters:{docs:{description:{component:constants.H1}}}};var resultsPageOptions={numResultsToDisplay:10,onQuizResultsLoaded:function onQuizResultsLoaded(){return console.log("onQuizResultLoaded")},onQuizResultClick:function onQuizResultClick(){return console.log("onQuizResultClick")},onAddToCartClick:function onAddToCartClick(){return console.log("onQuizAddToCart")}},BasicUsage=HooksTemplate.bind({});BasicUsage.args={apiKey:constants.q1,quizId:constants.au,resultsPageOptions},function addHookStoryCode(story,code){var description=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";story.parameters=getHookStoryParams(code),story.parameters.docs.description={story:"\n".concat(description,"\n\n```jsx\n").concat(code,"\n```")}}(BasicUsage,"const args = ".concat((0,utils.fk)(BasicUsage.args)),constants.co);var __namedExportsOrder=["BasicUsage"];try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Hooks/index.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/stories/Quiz/Hooks/index.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}}}]);