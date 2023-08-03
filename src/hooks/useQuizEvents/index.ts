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
    hasQuizStoredState,
    quizStateKey,
    quizLocalState,
  } = quizState;
  const { resultsPageOptions } = quizOptions;

  const { onAddToCartClick, onQuizResultClick, onQuizResultsLoaded, onAddToFavoritesClick } =
    resultsPageOptions;

  // Quiz answer change
  const quizAnswerChanged = useQuizAnswerChangeHandler(quizApiState, dispatchLocalState);

  // Quiz Next button click callback
  const nextQuestion = useQuizNextClick(quizApiState, quizLocalState, dispatchLocalState);

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
    resetQuizSessionStorageState(quizStateKey),
    dispatchLocalState,
    dispatchApiState,
    quizApiState.quizResults
  );

  // Quiz rehydrate
  const hydrateQuizLocalState = useHydrateQuizLocalState(quizStateKey, dispatchLocalState);

  return {
    addToCart,
    addToFavorites,
    resultClick,
    quizAnswerChanged,
    previousQuestion,
    nextQuestion,
    resetQuiz,
    hydrateQuiz: hydrateQuizLocalState,
    hasSessionStorageState: hasQuizStoredState,
    resetSessionStorageState: resetQuizSessionStorageState(quizStateKey),
  };
};

export default useQuizEvents;
