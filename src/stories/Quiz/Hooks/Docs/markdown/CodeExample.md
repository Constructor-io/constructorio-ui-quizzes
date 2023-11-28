### Code Example
Full hook usage example
```jsx
 const {
    state,
    getOpenTextInputProps,
    getNextQuestionButtonProps,
    getPreviousQuestionButtonProps,
    getQuizImageProps,
    getSelectQuestionImageProps,
    getSelectInputProps,
    getResetQuizButtonProps,
    getQuizResultButtonProps,
    getAddToCartButtonProps,
  } = useCioQuiz(args);

  if (state.quiz.requestState === 'SUCCESS') {
    const quizResults = state.quiz.results?.response?.results;
    const zeroResults = !quizResults?.length;

    // Quiz Results
    if (quizResults) {
      return (
        <div className='cio-quiz'>
          <div className='cio-results-container'>
            <h1 className='cio-results-title'>Results</h1>
            <div className='cio-results-filter-and-redo-container'>
              <div className='cio-results-filter-container'>
                <p>Because you answered</p>
                <div className='cio-results-filter-options'>
                  {state?.quiz.selectedOptionsWithAttributes?.map((option) => (
                    <div className='cio-results-filter-option' key={option}>
                      {option}
                    </div>
                  ))}
                </div>
              </div>
              <button {...getResetQuizButtonProps('secondary')}>
                <RedoSVG />
                <span>retake</span>
              </button>
            </div>
            <div className='cio-results'>
              {!zeroResults &&
                quizResults.map((result, i) => (
                  <div className='cio-result-card'>
                    <div
                      {...getQuizResultButtonProps({
                        result,
                        position: i,
                      })}>
                      <div className='cio-result-card-image'>
                        <img src={result.data?.image_url} alt='product' />
                      </div>
                      <div className='cio-result-card-text'>
                        <p className='cio-result-card-title'>{result.value}</p>
                        <div className='cio-result-card-prices'>
                          {result?.data?.price && (
                            <span className='cio-result-card-sale-price'>${result.data.price}</span>
                          )}
                          {result?.data?.price && (
                            <span
                              className={`cio-result-card-regular-price${
                                result.data.price ? '--strike-through' : ''
                              }`}>
                              ${result.data.price}
                            </span>
                          )}
                        </div>
                      </div>
                      <button {...getAddToCartButtonProps(result, result?.data?.price)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {zeroResults && (
              <div className='cio-zero-results'>
                <h3 className='cio-zero-results-subtitle'>
                  Sorry, we couldn’t find products that perfectly match your preferences.
                </h3>
                <div className='cio-button-container'>
                  <button {...getResetQuizButtonProps()}>Try Again</button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    const { currentQuestion } = state.quiz;
    const currentQuestionData = currentQuestion?.next_question;
    if (currentQuestionData) {
      // Open Text Question
      if (currentQuestion.isOpenQuestion) {
        return (
          <div className='cio-quiz'>
            <div className='cio-container--with-image cio-open-text-question-container--with-image'>
              {currentQuestionData.images?.primary_url && (
                <span className='cio-question-image-container'>
                  <img {...getQuizImageProps()} className='cio-question-image' />
                </span>
              )}
              <div className='cio-question-content'>
                <h1 className='cio-question-title'>{currentQuestionData.title}</h1>
                <p className='cio-question-description'>{currentQuestionData.description}</p>
                <input {...getOpenTextInputProps()} />
                <div className='cio-question-buttons-container'>
                  <button {...getPreviousQuestionButtonProps()}>Back</button>
                  <div className='cio-button-container'>
                    <button {...getNextQuestionButtonProps()}>Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      // Cover Question
      if (currentQuestion.isCoverQuestion) {
        return (
          <div className='cio-quiz'>
            <div className='cio-container--with-image cio-cover-question-container--with-image'>
              {currentQuestionData.images?.primary_url && (
                <span className='cio-question-image-container'>
                  <img {...getQuizImageProps()} className='cio-question-image' />
                </span>
              )}
              <div className='cio-question-content'>
                <h1 className='cio-question-title'>{currentQuestionData.title}</h1>
                <p className='cio-question-description'>{currentQuestionData.description}</p>
                <div className='cio-question-buttons-container'>
                  <button {...getPreviousQuestionButtonProps()}>Back</button>
                  <div className='cio-button-container'>
                    <button {...getNextQuestionButtonProps()}>Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      // Select Question
      if (currentQuestion.isSelectQuestion) {
        return (
          <div className='cio-quiz'>
            <div className='cio-select-question-container'>
              <div className='cio-select-question-text'>
                <h1>{currentQuestionData.title}</h1>
                <p>{currentQuestionData.description}</p>
              </div>
              <div className='cio-question-options-container'>
                {currentQuestionData.options.map((option: QuestionOption) => (
                  <div {...getSelectInputProps(option)}>
                    {option.images ? <img {...getSelectQuestionImageProps(option)} /> : ''}
                    <div className='cio-question-option-value'>{option.value}</div>
                  </div>
                ))}
              </div>

              <div className='cio-question-buttons-container'>
                <button {...getPreviousQuestionButtonProps()}>Back</button>
                <div className='cio-button-container'>
                  <button {...getNextQuestionButtonProps()}>Continue</button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
  return null;
```
