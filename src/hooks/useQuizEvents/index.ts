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
  const { callbacks, quizBasePath } = quizOptions;
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

  // Quiz reset
  const resetQuiz = useQuizResetClick(
    resetQuizSessionStorageState(quizSessionStorageState.key),
    dispatchLocalState,
    dispatchApiState,
    quizApiState.quizResults,
    quizBasePath
  );

  // Quiz rehydrate
  const hydrateQuizLocalState = useHydrateQuizLocalState(
    quizSessionStorageState.key,
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
    hydrateQuiz: hydrateQuizLocalState,
    resetSessionStorageState: resetQuizSessionStorageState(quizSessionStorageState.key),
  };
};

export default useQuizEvents;
