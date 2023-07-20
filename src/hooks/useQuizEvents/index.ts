import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { ActionAnswerQuestion } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import useQuizResultsLoaded from './useQuizResultsLoaded';
import useQuizResultClick from './useQuizResultClick';
import useQuizAddToCart from './useQuizAddToCart';
import useQuizNextClick from './useQuizNextClick';
import useQuizBackClick from './useQuizBackClick';
import { QuizEventsReturn, ResultsPageOptions } from '../../types';

export type UseQuizEventOptions = {
  cioClient: ConstructorIOClient;
  quizApiState: QuizAPIReducerState;
  resultsPageOptions: ResultsPageOptions;
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>;
  resetQuizApiState: () => void;
  resetQuizLocalState: () => void;
  hydrateQuizLocalState: () => void;
  resetQuizStoredState: () => void;
  hasQuizStoredState: () => boolean;
  isResultsStep: () => boolean;
};

const useQuizEvents = (options: UseQuizEventOptions): QuizEventsReturn => {
  const {
    cioClient,
    quizApiState,
    resultsPageOptions,
    dispatchLocalState,
    resetQuizApiState,
    resetQuizLocalState,
    hydrateQuizLocalState,
    resetQuizStoredState,
    hasQuizStoredState,
    isResultsStep,
  } = options;

  const { onAddToCartClick, onQuizResultClick, onQuizResultsLoaded } = resultsPageOptions;

  // Quiz Next button click
  const nextQuestion = useQuizNextClick(quizApiState, dispatchLocalState);

  // Quiz Back button click callback
  const previousQuestion = useQuizBackClick(dispatchLocalState);

  // Quiz result add to cart callback
  const addToCart = useQuizAddToCart(cioClient, quizApiState, onAddToCartClick);

  // Quiz result click callback
  const resultClick = useQuizResultClick(cioClient, quizApiState, onQuizResultClick);

  // Quiz results loaded event
  useQuizResultsLoaded(cioClient, quizApiState, onQuizResultsLoaded);

  const resetQuiz = () => {
    if (quizApiState.quizResults) {
      resetQuizApiState();
      resetQuizLocalState();
      resetQuizStoredState();
    }
  };

  return {
    addToCart,
    resultClick,
    nextQuestion,
    previousQuestion,
    resetQuiz,
    hydrateQuiz: hydrateQuizLocalState,
    hasStoredState: hasQuizStoredState,
    isResultsStep,
    resetStoredState: resetQuizStoredState,
  };
};

export default useQuizEvents;
