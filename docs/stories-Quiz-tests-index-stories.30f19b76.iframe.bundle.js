(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[664],{"./src/stories/Quiz/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$F:()=>docsControls,PG:()=>argTypes,yC:()=>storiesControls});var argTypes={quizId:{description:"ID of the quiz",control:{type:"text"}},quizVersionId:{description:"Optional quiz version Id"},apiKey:{description:"Your Constructor API key. Either `apiKey` or `cioJsClient` are required"},"callbacks.onQuizNextQuestion":{description:"Callback function to be called when the next question is loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(question) => void",detail:"(question: QuestionWithAnswer) => void"}}},"callbacks.onQuizResultsLoaded":{description:"Callback function to be called when the quiz results are loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(results) => void",detail:"(results: QuizResultDataPartial) => void"}}},"callbacks.onQuizResultClick":{description:"Callback function to be called when a quiz result is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result, position: number) => void",detail:"(result: QuizResultDataPartial, position: number) => void"}}},"callbacks.onAddToCartClick":{description:"Callback function to be called when the add to cart button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},"callbacks.onAddToFavoritesClick":{description:"Callback function to be called when the add to favorites button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},"callbacks.onEmailResults":{description:"Callback function to be called when emailing results.",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(args) => void",detail:"(args: QuizEmailResults) => void"}}},cioJsClient:{description:"Optional custom constructor instance. Either `apiKey` or `cioJsClient` are required"},primaryColor:{description:"RGB value string for quiz primary theme color ie: `'255, 82, 48'`",control:{type:"text"},defaultValue:{summary:"35, 71, 199"}},"resultCardOptions.resultCardRegularPriceKey":{description:'Key name for the regular price value in the API response inside the `data` object. Supports nested keys using dot notation e.g., "priceDetails.regular_price"',control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"regular_price"},type:{summary:"string"}}},"resultCardOptions.resultCardSalePriceKey":{description:'Key name for the sale price value in the API response inside the `data` object. Supports nested keys using dot notation e.g., "priceDetails.sale_price"',control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"sale_price"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingCountKey":{description:'Key name for the rating count value in the API response inside the `data` object. Supports nested keys using dot notation e.g., "ratingDetails.rating_count"',control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_count"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingScoreKey":{description:'Key name for the rating score value in the API response inside the `data` object. Supports nested keys using dot notation e.g., "ratingDetails.rating_score"',control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_score"},type:{summary:"string"}}},"resultCardOptions.renderResultCardPriceDetails":{description:"Callback function to render result card price details",control:!1,table:{subcategory:"resultCardOptions",defaultValue:{summary:"null"},type:{summary:"(result) => JSX.Element",detail:"(result: QuizResultDataPartial) => JSX.Element"}}},"resultsPageOptions.numResultsToDisplay":{description:"Number of results to display on the results page",control:{type:"number"},table:{subcategory:"resultsPageOptions",defaultValue:{summary:5},type:{summary:"number"}}},"resultsPageOptions.favoriteItems":{description:"Array of favorite item IDs",control:!1,table:{subcategory:"resultsPageOptions",type:{summary:"string[]"}}},"resultsPageOptions.showShareResultsButton":{description:"Boolean for whether or not to show share results button on the results page",control:{type:"boolean"},table:{subcategory:"resultsPageOptions",defaultValue:{summary:!0},type:{summary:"boolean"}}},"resultsPageOptions.requestConfigs":{description:"[Additional Quiz results API request parameters to further refine your results](https://constructor-io.github.io/constructorio-client-javascript/module-quizzes.html#~getQuizResults)",control:{type:"QuizzesResultsParameters"},table:{subcategory:"resultsPageOptions",type:{summary:"QuizzesResultsParameters"}}},"sessionStateOptions.showSessionModal":{description:"Boolean for whether or not to show session modal to hydrate quiz on the results page",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.showSessionModalOnResults":{description:"Boolean for whether or not to show session modal to hydrate quiz",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.sessionStateKey":{description:"Key name where session storage state is saved",control:{type:"text"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:"quizState"},type:{summary:"string"}}},enableHydration:{description:"Boolean for whether or not to hydrate quiz questions and results on page reload",defaultValue:{summary:"true"}}},docsControls={sort:"requiredFirst",exclude:["sessionStateOptions","callbacks","resultsPageOptions","resultCardOptions"]},storiesControls={include:["apiKey","quizId","quizVersionId","primaryColor"]}},"./node_modules/lodash/_arrayIncludes.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIndexOf=__webpack_require__("./node_modules/lodash/_baseIndexOf.js");module.exports=function arrayIncludes(array,value){return!!(null==array?0:array.length)&&baseIndexOf(array,value,0)>-1}},"./node_modules/lodash/_arrayIncludesWith.js":module=>{module.exports=function arrayIncludesWith(array,value,comparator){for(var index=-1,length=null==array?0:array.length;++index<length;)if(comparator(value,array[index]))return!0;return!1}},"./node_modules/lodash/_baseFindIndex.js":module=>{module.exports=function baseFindIndex(array,predicate,fromIndex,fromRight){for(var length=array.length,index=fromIndex+(fromRight?1:-1);fromRight?index--:++index<length;)if(predicate(array[index],index,array))return index;return-1}},"./node_modules/lodash/_baseIndexOf.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFindIndex=__webpack_require__("./node_modules/lodash/_baseFindIndex.js"),baseIsNaN=__webpack_require__("./node_modules/lodash/_baseIsNaN.js"),strictIndexOf=__webpack_require__("./node_modules/lodash/_strictIndexOf.js");module.exports=function baseIndexOf(array,value,fromIndex){return value==value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex)}},"./node_modules/lodash/_baseIsNaN.js":module=>{module.exports=function baseIsNaN(value){return value!=value}},"./node_modules/lodash/_baseUniq.js":(module,__unused_webpack_exports,__webpack_require__)=>{var SetCache=__webpack_require__("./node_modules/lodash/_SetCache.js"),arrayIncludes=__webpack_require__("./node_modules/lodash/_arrayIncludes.js"),arrayIncludesWith=__webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),cacheHas=__webpack_require__("./node_modules/lodash/_cacheHas.js"),createSet=__webpack_require__("./node_modules/lodash/_createSet.js"),setToArray=__webpack_require__("./node_modules/lodash/_setToArray.js");module.exports=function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=!0,result=[],seen=result;if(comparator)isCommon=!1,includes=arrayIncludesWith;else if(length>=200){var set=iteratee?null:createSet(array);if(set)return setToArray(set);isCommon=!1,includes=cacheHas,seen=new SetCache}else seen=iteratee?[]:result;outer:for(;++index<length;){var value=array[index],computed=iteratee?iteratee(value):value;if(value=comparator||0!==value?value:0,isCommon&&computed==computed){for(var seenIndex=seen.length;seenIndex--;)if(seen[seenIndex]===computed)continue outer;iteratee&&seen.push(computed),result.push(value)}else includes(seen,computed,comparator)||(seen!==result&&seen.push(computed),result.push(value))}return result}},"./node_modules/lodash/_createSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Set=__webpack_require__("./node_modules/lodash/_Set.js"),noop=__webpack_require__("./node_modules/lodash/noop.js"),setToArray=__webpack_require__("./node_modules/lodash/_setToArray.js"),createSet=Set&&1/setToArray(new Set([,-0]))[1]==1/0?function(values){return new Set(values)}:noop;module.exports=createSet},"./node_modules/lodash/_strictIndexOf.js":module=>{module.exports=function strictIndexOf(array,value,fromIndex){for(var index=fromIndex-1,length=array.length;++index<length;)if(array[index]===value)return index;return-1}},"./node_modules/lodash/noop.js":module=>{module.exports=function noop(){}},"./node_modules/lodash/uniq.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseUniq=__webpack_require__("./node_modules/lodash/_baseUniq.js");module.exports=function uniq(array){return array&&array.length?baseUniq(array):[]}}}]);