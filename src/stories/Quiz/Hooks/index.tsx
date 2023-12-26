/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import { QuestionOption } from '@constructor-io/constructorio-client-javascript/lib/types';
import React from 'react';
import RedoSVG from '../../../components/RedoButton/RedoSVG';
import { useCioQuiz } from '../../../index';
import '../../../styles.css';
import { convertPrimaryColorsToString } from '../../../utils';
import ShareSVG from '../../../components/ShareButton/ShareSVG';

export default function HooksTemplate(args) {
  const {
    state,
    getOpenTextInputProps,
    getNextQuestionButtonProps,
    getPreviousQuestionButtonProps,
    getSkipQuestionButtonProps,
    getQuizImageProps,
    getSelectQuestionImageProps,
    getSelectInputProps,
    getResetQuizButtonProps,
    getQuizResultButtonProps,
    getAddToCartButtonProps,
    getShareResultsButtonProps,
    primaryColorStyles,
  } = useCioQuiz(args);

  if (state.quiz.requestState === 'SUCCESS') {
    const quizResults = state.quiz.results?.response?.results;
    const numberOfResults = quizResults?.length ?? 0;
    const zeroResults = !numberOfResults;
    const resultsTitle = zeroResults
      ? state.quiz.resultsConfig?.desktop?.title?.text || 'Here are your results'
      : '';
    const resultsDescription = state.quiz.resultsConfig?.desktop?.description?.text || '';
    const matchedOptions = state.quiz.matchedOptions || [];

    // Quiz Results
    if (quizResults) {
      return (
        <div className='cio-quiz'>
          <div className='cio-results-container'>
            {!zeroResults && (
              <div className='cio-results-title-container'>
                <h1 className='cio-results-title'>{resultsTitle}</h1>
                <p className='cio-results-description'>{resultsDescription}</p>
              </div>
            )}
            {!zeroResults && (
              <div className='cio-results-filter-and-redo-container cio-results-button-group'>
                <div className='cio-results-filter-container'>
                  {!!matchedOptions.length && (
                    <p className='cio-results-explanation'>
                      Based on your answers <span>{matchedOptions.join(', ')}</span> we recommend
                      these matches.
                    </p>
                  )}
                </div>
                <div className='cio-results-number-and-share-button-group'>
                  {numberOfResults} {numberOfResults === 1 ? 'result' : 'results'}
                  <button {...getShareResultsButtonProps()} type='button'>
                    <ShareSVG />
                    <span>Share Results</span>
                  </button>
                </div>
              </div>
            )}
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
                    <div className='cio-redo-button-container'>
                      <button {...getResetQuizButtonProps('secondary')}>
                        <RedoSVG />
                        <span>retake</span>
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
            <style>.cio-quiz {convertPrimaryColorsToString(primaryColorStyles)}</style>
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
                    <button {...getSkipQuestionButtonProps()}>Skip</button>
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
                    <button {...getSkipQuestionButtonProps()}>Skip</button>
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
                  <button {...getSkipQuestionButtonProps()}>Skip</button>
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
