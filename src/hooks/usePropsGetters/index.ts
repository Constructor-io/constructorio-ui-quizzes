import { KeyboardEvent, useCallback } from 'react';
import { QuizResultData } from '@constructor-io/constructorio-client-javascript/lib/types';
import {
  GetResetQuizButtonProps,
  GetCoverQuestionProps,
  GetNextQuestionButtonProps,
  GetOpenTextInputProps,
  GetPreviousQuestionButtonProps,
  GetQuizImageProps,
  GetSelectInputProps,
  QuizEventsReturn,
  GetHydrateQuizButtonProps,
  GetAddToCartButtonProps,
  GetQuizResultButtonProps,
  GetQuizResultLinkProps,
  GetSelectQuestionImageProps,
  GetAddToFavoritesButtonProps,
  GetSkipQuestionButtonProps,
  GetShareResultsButtonProps,
  GetQuizResultSwatchProps,
} from '../../types';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import useSelectInputProps from './useSelectInputProps';
import useCoverQuestionProps from './useCoverQuestionProps';
import useOpenTextInputProps from './useOpenTextInputProps';
import useNextQuestionButtonProps from './useNextQuestionButtonProps';
import usePreviousQuestionButtonProps from './usePreviousQuestionButtonProps';
import useAddToFavoritesButtonProps from './useAddToFavoritesButtonProps';
import useSkipQuestionButtonProps from './useSkipQuestionButtonProps';

const usePropsGetters = (
  quizEvents: QuizEventsReturn,
  quizApiState: QuizAPIReducerState,
  quizLocalState: QuizLocalReducerState,
  favoriteItems?: string[]
) => {
  const {
    quizAnswerChanged,
    nextQuestion,
    skipQuestion,
    previousQuestion,
    resetQuiz,
    hydrateQuiz,
    addToCart,
    addToFavorites,
    resultClick,
  } = quizEvents;

  const getOpenTextInputProps: GetOpenTextInputProps = useOpenTextInputProps(
    quizAnswerChanged,
    nextQuestion,
    quizApiState.quizCurrentQuestion?.next_question,
    quizLocalState.answerInputs
  );

  const getCoverQuestionProps: GetCoverQuestionProps = useCoverQuestionProps(
    quizAnswerChanged,
    quizApiState.quizCurrentQuestion?.next_question
  );

  const getSelectInputProps: GetSelectInputProps = useSelectInputProps(
    quizAnswerChanged,
    nextQuestion,
    quizApiState.quizCurrentQuestion?.next_question,
    quizLocalState.answerInputs
  );

  const getNextQuestionButtonProps: GetNextQuestionButtonProps = useNextQuestionButtonProps(
    nextQuestion,
    quizApiState,
    quizLocalState
  );

  const getSkipQuestionButtonProps: GetSkipQuestionButtonProps = useSkipQuestionButtonProps(
    skipQuestion,
    quizApiState
  );

  const getPreviousQuestionButtonProps: GetPreviousQuestionButtonProps =
    usePreviousQuestionButtonProps(quizApiState, previousQuestion);

  const getResetQuizButtonProps: GetResetQuizButtonProps = useCallback(
    (stylesType = 'primary') => ({
      className: stylesType === 'primary' ? 'cio-question-cta-button' : 'cio-question-redo-button',
      type: 'button',
      onClick: () => resetQuiz(),
    }),
    [resetQuiz]
  );

  const getShareResultsButtonProps: GetShareResultsButtonProps = useCallback(
    () => ({ className: 'cio-question-share-results-button' }),
    []
  );

  const getHydrateQuizButtonProps: GetHydrateQuizButtonProps = useCallback(
    () => ({
      className: '',
      type: 'button',
      onClick: () => hydrateQuiz(),
    }),
    [hydrateQuiz]
  );

  const getAddToCartButtonProps: GetAddToCartButtonProps = useCallback(
    (result, price) => ({
      className: 'cio-result-card-cta-button',
      type: 'button',
      onClick: (e) => addToCart(e, result, price),
    }),
    [addToCart]
  );

  const getAddToFavoritesButtonProps: GetAddToFavoritesButtonProps = useAddToFavoritesButtonProps(
    addToFavorites,
    favoriteItems
  );

  const quizResultClickDown = useCallback(
    (event: KeyboardEvent<HTMLElement>, result: Partial<QuizResultData>, position: number) => {
      if (event?.key === ' ' || event?.key === 'Enter') {
        if (resultClick) {
          resultClick(result, position);
        }
      }
    },
    [resultClick]
  );

  const getQuizResultButtonProps: GetQuizResultButtonProps = useCallback(
    ({ result, position }) => ({
      className: 'cio-result-card-container',
      role: 'button',
      tabIndex: 0,
      onClick: () => resultClick(result, position),
      onKeyDown: (event: KeyboardEvent<HTMLElement>) =>
        quizResultClickDown(event, result, position),
    }),
    [quizResultClickDown, resultClick]
  );

  const getQuizResultLinkProps: GetQuizResultLinkProps = useCallback(
    ({ result, position }) => ({
      href: result.data?.url,
      onClick: () => resultClick(result, position),
      onKeyDown: (event: KeyboardEvent<HTMLElement>) =>
        quizResultClickDown(event, result, position),
    }),
    [quizResultClickDown, resultClick]
  );

  const getQuizResultSwatchProps: GetQuizResultSwatchProps = useCallback(
    (variation, onVariationClick, faceOutResult, swatchImageKey) => {
      const isSelected = variation?.data?.variation_id === faceOutResult?.data?.variation_id;
      const style = {
        background: `url(${
          swatchImageKey ? variation?.data?.[swatchImageKey] : variation?.data?.image_url
        })`,
        backgroundSize: 'fit-object',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // outline: isSelected ? '3px solid black' : undefined,
      };

      const onClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        onVariationClick(variation);
      };
      return {
        key: variation?.data?.variation_id,
        className: `cio-result-card-swatch ${isSelected ? 'selected' : ''}`,
        type: 'button',
        onClick,
        style,
      };
    },
    []
  );

  const getQuizImageProps: GetQuizImageProps = useCallback(
    () => ({
      src: quizApiState.quizCurrentQuestion?.next_question?.images?.primary_url || undefined,
      alt: quizApiState.quizCurrentQuestion?.next_question?.images?.primary_alt || undefined,
    }),
    [quizApiState.quizCurrentQuestion]
  );

  const getSelectQuestionImageProps: GetSelectQuestionImageProps = useCallback(
    (option) => ({
      className: 'cio-question-option-image',
      src: option?.images?.primary_url || undefined,
      alt: option?.images?.primary_alt || undefined,
    }),
    []
  );

  return {
    getOpenTextInputProps,
    getNextQuestionButtonProps,
    getPreviousQuestionButtonProps,
    getQuizImageProps,
    getSelectQuestionImageProps,
    getSelectInputProps,
    getCoverQuestionProps,
    getResetQuizButtonProps,
    getShareResultsButtonProps,
    getHydrateQuizButtonProps,
    getAddToCartButtonProps,
    getAddToFavoritesButtonProps,
    getQuizResultButtonProps,
    getQuizResultLinkProps,
    getSkipQuestionButtonProps,
    getQuizResultSwatchProps,
  };
};

export default usePropsGetters;
