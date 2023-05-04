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
};

const useQuizEvents = (options: UseQuizEventOptions): QuizEventsReturn => {
  const {
    cioClient,
    quizApiState,
    resultsPageOptions,
    dispatchLocalState,
    resetQuizApiState,
    resetQuizLocalState,
  } = options;

  const { onAddToCartClick, onQuizResultClick, onQuizResultsLoaded } = resultsPageOptions;

  // Quiz Next button click
  const getNextQuestion = useQuizNextClick(quizApiState, dispatchLocalState);

  // Quiz Back button click callback
  const getPreviousQuestion = useQuizBackClick(dispatchLocalState);

  // Quiz result add to cart callback
  const getAddToCart = useQuizAddToCart(cioClient, quizApiState, onAddToCartClick);

  // Quiz result click callback
  const getResultClick = useQuizResultClick(cioClient, quizApiState, onQuizResultClick);

  // Quiz results loaded event
  useQuizResultsLoaded(cioClient, quizApiState, onQuizResultsLoaded);

  const getResetQuiz = () => {
    if (quizApiState.quizResults) {
      resetQuizApiState();
      resetQuizLocalState();
    }
  };

  return {
    getAddToCart,
    getResultClick,
    getNextQuestion,
    getPreviousQuestion,
    getResetQuiz,
  };
};

export default useQuizEvents;
