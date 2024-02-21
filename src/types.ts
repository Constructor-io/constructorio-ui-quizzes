import { CSSProperties } from 'react';
import {
  QuizResultData,
  NextQuestionResponse,
  QuizResultsResponse,
  QuestionOption,
  Question,
  QuizResultsConfig,
} from '@constructor-io/constructorio-client-javascript/lib/types';
import ConstructorIOClient, {
  GetBrowseResultsForItemIdsResponse,
} from '@constructor-io/constructorio-client-javascript';
import { RequestStates } from './constants';
// eslint-disable-next-line import/no-cycle
import { QuestionTypes } from './components/CioQuiz/actions';

export type {
  QuestionOption,
  QuestionImages,
  Question,
  NextQuestionResponse,
  QuizResultsResponse,
  QuizResultsConfigResponse,
  QuizResultsConfig,
  BrowseResultData,
  BrowseRequestType,
  QuizzesParameters,
  QuizzesResultsParameters,
} from '@constructor-io/constructorio-client-javascript/lib/types';

export type QuizResultDataPartial = Partial<QuizResultData>;
export type QuizEmailResults = { email: string; url: string };

// QUIZ PROPS
export interface ResultCardOptions {
  resultCardSalePriceKey?: string;
  resultCardRegularPriceKey?: string;
  resultCardRatingCountKey?: string;
  resultCardRatingScoreKey?: string;
  renderResultCardPriceDetails?: (result: QuizResultDataPartial) => JSX.Element;
}

export namespace QuizResultsEventsProps {
  export type OnQuizResultsLoaded = (results: QuizResultDataPartial) => void;
  export type OnQuizResultClick = (result: QuizResultDataPartial, position: number) => void;
  export type OnAddToCartClick = (result: QuizResultDataPartial) => void;
  export type OnAddToFavoritesClick = (result: QuizResultDataPartial) => void;
  export type OnQuizNextQuestion = (question: QuestionWithAnswer) => void;
  export type OnQuizSkipQuestion = (question: QuestionWithAnswer) => void;
  export type OnEmailResults = (data: QuizEmailResults) => Promise<void>;
}

export interface ResultsPageOptions {
  numResultsToDisplay?: number;
  favoriteItems?: string[];
  showShareResultsButton?: boolean;
  fmtOptions?: Record<string, unknown>;
}

export interface QuestionsPageOptions {
  skipQuestionButtonText?: string;
}

export interface SessionStateOptions {
  showSessionModal?: boolean;
  showSessionModalOnResults?: boolean;
  sessionStateKey?: string;
}

export type QuestionWithAnswer = Question & {
  answer: AnswerInput;
};

export interface Callbacks {
  onQuizNextQuestion?: QuizResultsEventsProps.OnQuizNextQuestion;
  onQuizResultsLoaded?: QuizResultsEventsProps.OnQuizResultsLoaded;
  onQuizResultClick?: QuizResultsEventsProps.OnQuizResultClick;
  onAddToCartClick: QuizResultsEventsProps.OnAddToCartClick;
  onAddToFavoritesClick?: QuizResultsEventsProps.OnAddToFavoritesClick;
  onQuizSkipQuestion?: QuizResultsEventsProps.OnQuizSkipQuestion;
  onEmailResults?: QuizResultsEventsProps.OnEmailResults;
}

export interface IQuizProps {
  apiKey?: string;
  cioJsClient?: ConstructorIOClient;
  quizId: string;
  quizVersionId?: string;
  resultsPageOptions?: ResultsPageOptions;
  resultCardOptions?: ResultCardOptions;
  sessionStateOptions?: SessionStateOptions;
  primaryColor?: string;
  enableHydration?: boolean;
  callbacks?: Callbacks;
  questionsPageOptions?: QuestionsPageOptions;
}

// QUIZ RETURN VALUES
export interface QuizReturnState {
  answers: {
    inputs: AnswerInputState; // Key is the question Id and value is the answer input
  };
  quiz: {
    requestState: RequestStates;
    versionId?: string;
    sessionId?: string;
    currentQuestion?: CurrentQuestion | undefined;
    results?: QuizResultsResponse | QuizSharedResultsData | undefined;
    selectedOptionsWithAttributes?: string[];
    matchedOptions?: string[];
    resultsConfig: QuizResultsConfig | null;
  };
  quizSessionStorageState: QuizSessionStorageState;
}

export type AnswerInput = {
  type: InputQuestionsTypes;
  value: string | Omit<QuestionOption, 'attribute' | 'images'>[] | null;
};

export type AnswerInputState = {
  [key: string]: AnswerInput;
};

export interface QuizSessionStorageState {
  key: string;
  skipToResults: boolean;
  hasSessionStorageState: () => boolean;
}

export type InputQuestionsTypes =
  | QuestionTypes.OpenText
  | QuestionTypes.Cover
  | QuestionTypes.SingleSelect
  | QuestionTypes.MultipleSelect;

export type CurrentQuestion = NextQuestionResponse & {
  isFirstQuestion: boolean;
  isOpenQuestion: boolean;
  isCoverQuestion: boolean;
  isSingleQuestion: boolean;
  isMultipleQuestion: boolean;
  isSelectQuestion: boolean;
};

export namespace QuizEventsReturn {
  export type QuizAnswerChanged = (
    payload?: string | Omit<QuestionOption, 'attribute' | 'images'>[]
  ) => void;
  export type NextQuestion = () => void;
  export type SkipQuestion = () => void;
  export type PreviousQuestion = () => void;
  export type ResetQuiz = () => void;
  export type ResultClick = (result: QuizResultDataPartial, position: number) => void;
  export type AddToCart = (
    e: React.MouseEvent<HTMLElement>,
    result: QuizResultDataPartial,
    price?: number
  ) => void;
  export type AddToFavorites = (
    e: React.MouseEvent<HTMLElement>,
    result: QuizResultDataPartial,
    price?: number,
    sendEvent?: boolean
  ) => void;
  export type HydrateQuiz = () => void;
  export type ResetSessionStorageState = () => void;
}

export interface QuizEventsReturn {
  nextQuestion: QuizEventsReturn.NextQuestion;
  skipQuestion: QuizEventsReturn.SkipQuestion;
  quizAnswerChanged: QuizEventsReturn.QuizAnswerChanged;
  previousQuestion: QuizEventsReturn.PreviousQuestion;
  resetQuiz: QuizEventsReturn.ResetQuiz;
  resultClick: QuizEventsReturn.ResultClick;
  addToCart: QuizEventsReturn.AddToCart;
  addToFavorites: QuizEventsReturn.AddToFavorites;
  hydrateQuiz: QuizEventsReturn.HydrateQuiz;
  resetSessionStorageState: QuizEventsReturn.ResetSessionStorageState;
}

export interface OpenTextInputProps {
  className: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}
export interface QuizSharedResultsData extends GetBrowseResultsForItemIdsResponse {
  attributes: string[];
}

export interface CoverQuestionProps {}

export interface NextQuestionButtonProps {
  className: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export interface SkipQuestionButtonProps {
  className: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export interface PreviousQuestionButtonProps {
  className: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
  style?: Record<string, string>;
}

export interface ResetQuizButtonProps {
  className: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
  style?: Record<string, string>;
}

export interface ShareResultsButtonProps {
  className: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: CSSProperties;
}

export interface HydrateQuizButtonProps {
  className: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
  style?: Record<string, string>;
}

export interface AddToCartButtonProps {
  className: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
  style?: Record<string, string>;
}

export interface QuizImageProps {
  className?: string;
  src?: string;
  alt?: string;
}

export interface QuizResultPropsLink {
  href?: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLElement>;
}

export interface QuizResultPropsButton {
  className: string;
  role: 'button';
  tabIndex: number;
  onClick: React.MouseEventHandler<HTMLElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLElement>;
}

export type QuizResultProps = QuizResultPropsLink | QuizResultPropsButton;
export interface SelectInputProps {
  className: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLElement>;
  role: 'button';
  tabIndex: number;
  key: number;
}

export type GetOpenTextInputProps = () => OpenTextInputProps;
export type GetCoverQuestionProps = () => CoverQuestionProps;
export type GetSelectInputProps = (option: QuestionOption) => SelectInputProps;
export type GetNextQuestionButtonProps = () => NextQuestionButtonProps;
export type GetSkipQuestionButtonProps = () => SkipQuestionButtonProps;
export type GetPreviousQuestionButtonProps = () => PreviousQuestionButtonProps;
export type GetResetQuizButtonProps = (
  stylesType?: 'primary' | 'secondary'
) => ResetQuizButtonProps;
export type GetShareResultsButtonProps = () => ShareResultsButtonProps;
export type GetHydrateQuizButtonProps = () => HydrateQuizButtonProps;
export type GetAddToCartButtonProps = (
  result: QuizResultDataPartial,
  price?: number
) => AddToCartButtonProps;
export type GetAddToFavoritesButtonProps = (
  result: QuizResultDataPartial,
  price?: number,
  clickHandler?: () => void
) => AddToCartButtonProps;
export type GetQuizImageProps = () => QuizImageProps;
export type GetSelectQuestionImageProps = (option: QuestionOption) => QuizImageProps;

export interface QuizResultOptions<T = 'button' | 'link'> {
  result: QuizResultDataPartial;
  position: number;
  type?: T;
}
export type GetQuizResultButtonProps = (
  options: QuizResultOptions<'button'>
) => QuizResultPropsButton;
export type GetQuizResultLinkProps = (options: QuizResultOptions<'link'>) => QuizResultPropsLink;

export interface PrimaryColorStyles {
  '--primary-color-h': string;
  '--primary-color-s': string;
  '--primary-color-l': string;
}

export interface UseQuizReturn {
  cioClient?: ConstructorIOClient;
  state: QuizReturnState;
  events: QuizEventsReturn;
  getOpenTextInputProps: GetOpenTextInputProps;
  getNextQuestionButtonProps: GetNextQuestionButtonProps;
  getSkipQuestionButtonProps: GetSkipQuestionButtonProps;
  getPreviousQuestionButtonProps: GetPreviousQuestionButtonProps;
  getQuizImageProps: GetQuizImageProps;
  getSelectQuestionImageProps: GetSelectQuestionImageProps;
  getSelectInputProps: GetSelectInputProps;
  getCoverQuestionProps: GetCoverQuestionProps;
  getResetQuizButtonProps: GetResetQuizButtonProps;
  getShareResultsButtonProps: GetShareResultsButtonProps;
  getHydrateQuizButtonProps: GetHydrateQuizButtonProps;
  getAddToCartButtonProps: GetAddToCartButtonProps;
  getAddToFavoritesButtonProps: GetAddToFavoritesButtonProps;
  getQuizResultButtonProps: GetQuizResultButtonProps;
  getQuizResultLinkProps: GetQuizResultLinkProps;
  primaryColorStyles: PrimaryColorStyles;
}

// USE QUIZ HOOK
export type UseQuiz = (quizProps: IQuizProps) => UseQuizReturn;
