import React from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import {
  GetAddToCartButtonProps,
  GetAddToFavoritesButtonProps,
  GetCoverQuestionProps,
  GetHydrateQuizButtonProps,
  GetNextQuestionButtonProps,
  GetSkipQuestionButtonProps,
  GetOpenTextInputProps,
  GetPreviousQuestionButtonProps,
  GetQuizImageProps,
  GetQuizResultButtonProps,
  GetQuizResultLinkProps,
  GetResetQuizButtonProps,
  GetSelectInputProps,
  PrimaryColorStyles,
  QuizReturnState,
} from '../../types';

export interface QuizContextValue {
  cioClient?: ConstructorIOClient;
  state?: QuizReturnState;
  getOpenTextInputProps: GetOpenTextInputProps;
  getNextQuestionButtonProps: GetNextQuestionButtonProps;
  getSkipQuestionButtonProps: GetSkipQuestionButtonProps;
  getPreviousQuestionButtonProps: GetPreviousQuestionButtonProps;
  getQuizImageProps: GetQuizImageProps;
  getSelectInputProps: GetSelectInputProps;
  getCoverQuestionProps: GetCoverQuestionProps;
  getResetQuizButtonProps: GetResetQuizButtonProps;
  getHydrateQuizButtonProps: GetHydrateQuizButtonProps;
  getAddToCartButtonProps: GetAddToCartButtonProps;
  getAddToFavoritesButtonProps: GetAddToFavoritesButtonProps;
  getQuizResultButtonProps: GetQuizResultButtonProps;
  getQuizResultLinkProps: GetQuizResultLinkProps;
  primaryColorStyles: PrimaryColorStyles;
  customClickItemCallback: boolean;
  customAddToFavoritesCallback: boolean;
}

export default React.createContext<Partial<QuizContextValue>>({});
