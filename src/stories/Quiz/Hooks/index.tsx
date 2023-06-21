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
                  {state?.quiz.resultsFilters?.map((filter) => (
                    <div className='cio-results-filter-option' key={filter}>
                      {filter}
                    </div>
                  ))}
                </div>
              </div>
              <button {...getResetQuizButtonProps()}>
                <RedoSVG />
                <span>redo</span>
              </button>
            </div>
            {!zeroResults &&
              quizResults.map((result, i) => (
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
                      {result.data.price && (
                        <span className='cio-result-card-sale-price'>${result.data.price}</span>
                      )}
                      {result.data.price && (
                        <span
                          className={`cio-result-card-regular-price${
                            result.data.price ? '--strike-through' : ''
                          }`}>
                          ${result.data.price}
                        </span>
                      )}
                    </div>
                  </div>
                  <button {...getAddToCartButtonProps(result, result.data.price)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            {zeroResults && (
              <div className='cio-zero-results'>
                <h3 className='cio-zero-results-subtitle'>
                  Sorry, it seems like we couldn’t find results based on your answers.
                </h3>
                <p className='cio-zero-results-description'>
                  This is embarrassing 😢. It might be that some of the questions are not properly
                  set up from our end. Would you give us another try?
                </p>
                <button {...getResetQuizButtonProps()}>Try Again</button>
              </div>
            )}
          </div>
        </div>
      );
    }

    const { currentQuestion } = state.quiz;
    const currentQuestionData = state.quiz.currentQuestion.next_question;
    if (currentQuestion) {
      // Open Text Question
      if (currentQuestion.isOpenQuestion) {
        return (
          <div className='cio-quiz' style={{ padding: '40px' }}>
            {currentQuestion.next_question.images?.primary_url && (
              <img {...getQuizImageProps()} width='100%' height={400} />
            )}
            <div>
              <h1>{currentQuestionData.title}</h1>
              <p>{currentQuestionData.description}</p>
              <input {...getOpenTextInputProps()} />
              <div>
                <button {...getPreviousQuestionButtonProps()}>Back</button>
                <button {...getNextQuestionButtonProps()}>Continue</button>
              </div>
            </div>
          </div>
        );
      }

      // Cover Question
      if (currentQuestion.isCoverQuestion) {
        return (
          <div className='cio-quiz' style={{ padding: '40px' }}>
            {currentQuestion.next_question.images?.primary_url && (
              <img {...getQuizImageProps()} width='100%' height={400} />
            )}
            <div>
              <h1>{currentQuestionData.title}</h1>
              <p>{currentQuestionData.description}</p>
              <div>
                <button {...getPreviousQuestionButtonProps()}>Back</button>
                <button {...getNextQuestionButtonProps()}>Continue</button>
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
              {currentQuestion.next_question?.options?.map((option: QuestionOption) => (
                <div {...getSelectInputProps(option)}>
                  {option.images ? <img {...getSelectQuestionImageProps(option)} /> : ''}
                  <div className='cio-question-option-value'>{option?.value}</div>
                </div>
              ))}
              <div>
                <button {...getPreviousQuestionButtonProps()}>Back</button>
                <button {...getNextQuestionButtonProps()}>Continue</button>
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
function MyQuiz(quizConfiguration) {
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
  } = useQuiz(quizConfiguration);

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
                  {state?.quiz.resultsFilters?.map((filter) => (
                    <div className='cio-results-filter-option' key={filter}>
                      {filter}
                    </div>
                  ))}
                </div>
              </div>
              <button {...getResetQuizButtonProps()}>
                <RedoSVG />
                <span>redo</span>
              </button>
            </div>
            {!zeroResults &&
              quizResults.map((result, i) => (
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
                      {result.data.price && (
                        <span className='cio-result-card-sale-price'>{result.data.price}</span>
                      )}
                      {result.data.price && (
                        <span
                          className={cio-result-card-regular-price {result.data.price ? '--strike-through' : ''
                          }}>
                          {result.data.price}
                        </span>
                      )}
                    </div>
                  </div>
                  <button {...getAddToCartButtonProps(result, result.data.price)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            {zeroResults && (
              <div className='cio-zero-results'>
                <h3 className='cio-zero-results-subtitle'>
                  Sorry, it seems like we couldn’t find results based on your answers.
                </h3>
                <p className='cio-zero-results-description'>
                  This is embarrassing 😢. It might be that some of the questions are not properly
                  set up from our end. Would you give us another try?
                </p>
                <button {...getResetQuizButtonProps()}>Try Again</button>
              </div>
            )}
          </div>
        </div>
      );
    }

    const { currentQuestion } = state.quiz;
    const currentQuestionData = state.quiz.currentQuestion.next_question;
    if (currentQuestion) {
      // Open Text Question
      if (currentQuestion.isOpenQuestion) {
        return (
          <div className='cio-quiz' style={{ padding: '40px' }}>
            {currentQuestion.next_question.images?.primary_url && (
              <img {...getQuizImageProps()} width='100%' height={400} />
            )}
            <div>
              <h1>{currentQuestionData.title}</h1>
              <p>{currentQuestionData.description}</p>
              <input {...getOpenTextInputProps()} />
              <div>
                <button {...getPreviousQuestionButtonProps()}>Back</button>
                <button {...getNextQuestionButtonProps()}>Continue</button>
              </div>
            </div>
          </div>
        );
      }

      // Cover Question
      if (currentQuestion.isCoverQuestion) {
        return (
          <div className='cio-quiz' style={{ padding: '40px' }}>
            {currentQuestion.next_question.images?.primary_url && (
              <img {...getQuizImageProps()} width='100%' height={400} />
            )}
            <div>
              <h1>{currentQuestionData.title}</h1>
              <p>{currentQuestionData.description}</p>
              <div>
                <button {...getPreviousQuestionButtonProps()}>Back</button>
                <button {...getNextQuestionButtonProps()}>Continue</button>
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
              {currentQuestion.next_question?.options?.map((option: QuestionOption) => (
                <div {...getSelectInputProps(option)}>
                  {option.images ? <img {...getSelectQuestionImageProps(option)} /> : ''}
                  <div className='cio-question-option-value'>{option?.value}</div>
                </div>
              ))}
              <div>
                <button {...getPreviousQuestionButtonProps()}>Back</button>
                <button {...getNextQuestionButtonProps()}>Continue</button>
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
