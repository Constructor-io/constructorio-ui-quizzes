import {
  QuizResultData,
  NextQuestionResponse,
  QuizResultsResponse,
} from '@constructor-io/constructorio-client-javascript/lib/types';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { RequestStates } from './constants';

export type {
  QuestionOption,
  QuestionImages,
  Question,
  NextQuestionResponse,
  QuizResultsResponse,
  BrowseResultData,
  BrowseRequestType,
  QuizzesParameters,
  QuizzesResultsParameters,
} from '@constructor-io/constructorio-client-javascript/lib/types';

export type QuizResultDataPartial = Partial<QuizResultData>;

// QUIZ PROPS
export interface ResultsProps {
  resultCardSalePriceKey?: string;
  resultCardRegularPriceKey?: string;
}

export namespace QuizResultsEventsProps {
  export type OnQuizResultsLoaded = (results: QuizResultDataPartial) => void;
  export type OnQuizResultClick = (result: QuizResultDataPartial, position: number) => void;
  export type OnAddToCartClick = (result: QuizResultDataPartial) => void;
}

export interface ResultsPageOptions extends ResultsProps {
  numResultsToDisplay?: number;
  onQuizResultsLoaded?: QuizResultsEventsProps.OnQuizResultsLoaded;
  onQuizResultClick?: QuizResultsEventsProps.OnQuizResultClick;
  onAddToCartClick: QuizResultsEventsProps.OnAddToCartClick;
}

export interface IQuizProps {
  apiKey?: string;
  cioJsClient?: ConstructorIOClient;
  quizId: string;
  quizVersionId?: string;
  resultsPageOptions: ResultsPageOptions;
}

// QUIZ RETURN VALUES
export interface QuizReturnState {
  answers: {
    inputs: Record<string, string | string[]>; // Key is the question Id and value is the answer input
    isLastAnswer: boolean;
  };
  quiz: {
    requestState: RequestStates;
    versionId?: string;
    sessionId?: string;
    firstQuestion?: NextQuestionResponse;
    currentQuestion?: NextQuestionResponse;
    results?: QuizResultsResponse;
    resultsFilters?: string[];
    isFirstQuestion?: boolean;
  };
}

export namespace QuizEventsReturn {
  export type GetNextQuestion = (payload?: string | string[]) => void;
  export type GetPreviousQuestion = () => void;
  export type GetResetQuiz = () => void;
  export type GetResultClick = (result: QuizResultDataPartial, position: number) => void;
  export type GetAddToCart = (
    e: React.MouseEvent<HTMLElement>,
    result: QuizResultDataPartial,
    price?: number
  ) => void;
}

export interface QuizEventsReturn {
  getNextQuestion: QuizEventsReturn.GetNextQuestion;
  getPreviousQuestion: QuizEventsReturn.GetPreviousQuestion;
  getResetQuiz: QuizEventsReturn.GetResetQuiz;
  getResultClick: QuizEventsReturn.GetResultClick;
  getAddToCart: QuizEventsReturn.GetAddToCart;
}

export interface UseQuizReturn {
  cioClient?: ConstructorIOClient;
  state: QuizReturnState;
  events: QuizEventsReturn;
}

// USE QUIZ HOOK
export type UseQuiz = (quizProps: IQuizProps) => UseQuizReturn;
