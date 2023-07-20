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

export interface SessionStateOptions {
  showSessionModal?: boolean;
  showSessionModalOnResults?: boolean;
  sessionStateKey?: string;
}

export interface IQuizProps {
  apiKey?: string;
  cioJsClient?: ConstructorIOClient;
  quizId: string;
  quizVersionId?: string;
  resultsPageOptions: ResultsPageOptions;
  sessionStateOptions?: SessionStateOptions;
  primaryColor?: string;
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
  export type NextQuestion = (payload?: string | string[]) => void;
  export type PreviousQuestion = () => void;
  export type ResetQuiz = () => void;
  export type ResultClick = (result: QuizResultDataPartial, position: number) => void;
  export type AddToCart = (
    e: React.MouseEvent<HTMLElement>,
    result: QuizResultDataPartial,
    price?: number
  ) => void;
  export type HydrateQuiz = () => void;
  export type HasStoredState = () => boolean;
  export type ResetStoredState = () => void;
  export type IsResultsStep = () => boolean;
}

export interface QuizEventsReturn {
  nextQuestion: QuizEventsReturn.NextQuestion;
  previousQuestion: QuizEventsReturn.PreviousQuestion;
  resetQuiz: QuizEventsReturn.ResetQuiz;
  resultClick: QuizEventsReturn.ResultClick;
  addToCart: QuizEventsReturn.AddToCart;
  hydrateQuiz: QuizEventsReturn.HydrateQuiz;
  hasStoredState: QuizEventsReturn.HasStoredState;
  resetStoredState: QuizEventsReturn.ResetStoredState;
  isResultsStep: QuizEventsReturn.IsResultsStep;
}

export interface PrimaryColorStyles {
  '--primary-color-h': string;
  '--primary-color-s': string;
  '--primary-color-l': string;
}

export interface UseQuizReturn {
  cioClient?: ConstructorIOClient;
  state: QuizReturnState;
  events: QuizEventsReturn;
  primaryColorStyles: PrimaryColorStyles;
}

// USE QUIZ HOOK
export type UseQuiz = (quizProps: IQuizProps) => UseQuizReturn;
