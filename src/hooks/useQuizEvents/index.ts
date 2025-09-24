import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import useQuizResultsLoaded from './useQuizResultsLoaded';
import useQuizResultClick from './useQuizResultClick';
import useQuizAddToCart from './useQuizAddToCart';
import useQuizBackClick from './useQuizBackClick';
import { IQuizProps, QuizEventsReturn } from '../../types';
import useQuizAnswerChangeHandler from './useQuizAnswerChangeHandler';
import useQuizNextClick from './useQuizNextClick';
import useQuizResetClick from './useQuizResetClick';
import useHydrateQuizLocalState from './useHydrateQuizLocalState';
import useQuizState from '../useQuizState';
import { resetQuizSessionStorageState } from '../../utils';
import useQuizAddToFavorites from './useQuizAddToFavorites';
import useQuizSkipClick from './useQuizSkipClick';
import useJumpToQuestion from './useJumpToQuestion';

type UseQuizEvents = (
  quizOptions: IQuizProps,
  cioClient: ConstructorIOClient,
  quizState: ReturnType<typeof useQuizState>
) => QuizEventsReturn;

const useQuizEvents: UseQuizEvents = (quizOptions, cioClient, quizState) => {
  const {
    quizApiState,
    dispatchLocalState,
    dispatchApiState,
    quizLocalState,
    quizSessionStorageState,
  } = quizState;
  const { callbacks } = quizOptions;
  const {
    onAddToCartClick,
    onAddToFavoritesClick,
    onQuizNextQuestion,
    onQuizResultClick,
    onQuizResultsLoaded,
    onQuizSkipQuestion,
  } = callbacks || {};

  // Quiz answer change
  const quizAnswerChanged = useQuizAnswerChangeHandler(quizApiState, dispatchLocalState);

  // Quiz Next button click callback
  const nextQuestion = useQuizNextClick(
    quizApiState,
    quizLocalState,
    dispatchLocalState,
    onQuizNextQuestion
  );

  const skipQuestion = useQuizSkipClick(
    quizApiState,
    quizLocalState,
    dispatchLocalState,
    onQuizSkipQuestion
  );

  // Quiz Back button click callback
  const previousQuestion = useQuizBackClick(quizApiState, dispatchLocalState);

  // Quiz result add to cart callback
  const addToCart = useQuizAddToCart(cioClient, quizApiState, onAddToCartClick);

  // Quiz result click callback
  const resultClick = useQuizResultClick(cioClient, quizApiState, onQuizResultClick);

  const addToFavorites = useQuizAddToFavorites(cioClient, quizApiState, onAddToFavoritesClick);

  // Quiz results loaded event
  useQuizResultsLoaded(cioClient, quizApiState, onQuizResultsLoaded);

  const resetSessionStorageState = resetQuizSessionStorageState(
    quizSessionStorageState.key,
    quizOptions.quizId
  );

  // Quiz reset
  const resetQuiz = useQuizResetClick({
    resetQuizSessionStorageState: resetSessionStorageState,
    dispatchLocalState,
    dispatchApiState,
    quizResults: quizApiState.quizResults,
  });

  const jumpToQuestion = useJumpToQuestion({
    dispatchLocalState,
    dispatchApiState,
    quizApiState,
    quizLocalState,
  });

  // Quiz rehydrate
  const hydrateQuizLocalState = useHydrateQuizLocalState(
    quizOptions.quizId,
    quizSessionStorageState,
    dispatchLocalState
  );

  return {
    addToCart,
    addToFavorites,
    resultClick,
    quizAnswerChanged,
    previousQuestion,
    nextQuestion,
    skipQuestion,
    resetQuiz,
    jumpToQuestion,
    hydrateQuiz: hydrateQuizLocalState,
    resetSessionStorageState,
  };
};

export default useQuizEvents;
