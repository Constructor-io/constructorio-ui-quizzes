/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import { QuestionOption } from '@constructor-io/constructorio-client-javascript/lib/types';
import React from 'react';
import RedoSVG from '../../../components/RedoButton/RedoSVG';
import { useCioQuiz } from '../../../index';
import '../../../styles.css';
import { getStoryParams } from '../../../utils';

export default function HooksTemplate(args) {
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
                <span>redo</span>
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
                  Sorry, it seems like we couldn’t find results based on your answers.
                </h3>
                <p className='cio-zero-results-description'>
                  This is embarrassing 😢. It might be that some of the questions are not properly
                  set up from our end. Would you give us another try?
                </p>
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
    const currentQuestionData = state?.quiz?.currentQuestion?.next_question;
    if (currentQuestion) {
      // Open Text Question
      if (currentQuestion.isOpenQuestion) {
        return (
          <div className='cio-quiz'>
            <div className='cio-container--with-image cio-open-text-question-container--with-image'>
              {currentQuestion.next_question.images?.primary_url && (
                <span className='cio-question-image-container'>
                  <img {...getQuizImageProps()} className='cio-question-image' />
                </span>
              )}
              <div className='cio-question-content'>
                <h1 className='cio-question-title'>{currentQuestionData?.title}</h1>
                <p className='cio-question-description'>{currentQuestionData?.description}</p>
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
              {currentQuestion.next_question.images?.primary_url && (
                <span className='cio-question-image-container'>
                  <img {...getQuizImageProps()} className='cio-question-image' />
                </span>
              )}
              <div className='cio-question-content'>
                <h1 className='cio-question-title'>{currentQuestionData?.title}</h1>
                <p className='cio-question-description'>{currentQuestionData?.description}</p>
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
                <h1>{currentQuestionData?.title}</h1>
                <p>{currentQuestionData?.description}</p>
              </div>
              <div className='cio-question-options-container'>
                {currentQuestion.next_question?.options?.map((option: QuestionOption) => (
                  <div {...getSelectInputProps(option)}>
                    {option.images ? <img {...getSelectQuestionImageProps(option)} /> : ''}
                    <div className='cio-question-option-value'>{option?.value}</div>
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
}

const hooksTemplateCode = `
function HooksTemplate(quizConfiguration) {
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
  } = useCioQuiz(quizConfiguration);

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
                <span>redo</span>
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
                            <span className='cio-result-card-sale-price'>\${result.data.price}</span>
                          )}
                          {result?.data?.price && (
                            <span
                              className={'cio-result-card-regular-price\${
                                result.data.price ? '--strike-through' : ''
                              }'}>
                              \${result.data.price}
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
                  Sorry, it seems like we couldn’t find results based on your answers.
                </h3>
                <p className='cio-zero-results-description'>
                  This is embarrassing 😢. It might be that some of the questions are not properly
                  set up from our end. Would you give us another try?
                </p>
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
    const currentQuestionData = state?.quiz?.currentQuestion?.next_question;
    if (currentQuestion) {
      // Open Text Question
      if (currentQuestion.isOpenQuestion) {
        return (
          <div className='cio-quiz'>
            <div className='cio-container--with-image cio-open-text-question-container--with-image'>
              {currentQuestion.next_question.images?.primary_url && (
                <span className='cio-question-image-container'>
                  <img {...getQuizImageProps()} className='cio-question-image' />
                </span>
              )}
              <div className='cio-question-content'>
                <h1 className='cio-question-title'>{currentQuestionData?.title}</h1>
                <p className='cio-question-description'>{currentQuestionData?.description}</p>
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
              {currentQuestion.next_question.images?.primary_url && (
                <span className='cio-question-image-container'>
                  <img {...getQuizImageProps()} className='cio-question-image' />
                </span>
              )}
              <div className='cio-question-content'>
                <h1 className='cio-question-title'>{currentQuestionData?.title}</h1>
                <p className='cio-question-description'>{currentQuestionData?.description}</p>
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
                <h1>{currentQuestionData?.title}</h1>
                <p>{currentQuestionData?.description}</p>
              </div>
              <div className='cio-question-options-container'>
                {currentQuestion.next_question?.options?.map((option: QuestionOption) => (
                  <div {...getSelectInputProps(option)}>
                    {option.images ? <img {...getSelectQuestionImageProps(option)} /> : ''}
                    <div className='cio-question-option-value'>{option?.value}</div>
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
}
`;

const importHook = `import { useCioQuiz } from '@constructor-io/constructorio-ui-quiz';`;

export const getHookStoryParams = (storyCode) =>
  getStoryParams(storyCode, hooksTemplateCode, importHook);

export const addHookStoryCode = (story, code, description = '') => {
  story.parameters = getHookStoryParams(code); // eslint-disable-line
  // eslint-disable-next-line no-param-reassign
  story.parameters.docs.description = {
    // eslint-disable-line
    story: `
${description}

\`\`\`jsx
${code}
\`\`\``,
  };
};
