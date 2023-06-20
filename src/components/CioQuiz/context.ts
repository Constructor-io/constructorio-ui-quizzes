import React from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import {
  GetAddToCartButtonProps,
  GetCoverQuestionProps,
  GetHydrateQuizButtonProps,
  GetNextQuestionButtonProps,
  GetOpenTextInputProps,
  GetPreviousQuestionButtonProps,
  GetQuizImageProps,
  GetQuizResultButtonProps,
  GetQuizResultLinkProps,
  GetResetQuizButtonProps,
  GetSelectInputProps,
  QuizReturnState,
} from '../../types';

export interface QuizContextValue {
  cioClient?: ConstructorIOClient;
  state?: QuizReturnState;
  getOpenTextInputProps: GetOpenTextInputProps;
  getNextQuestionButtonProps: GetNextQuestionButtonProps;
  getPreviousQuestionButtonProps: GetPreviousQuestionButtonProps;
  getQuizImageProps: GetQuizImageProps;
  getSelectInputProps: GetSelectInputProps;
  getCoverQuestionProps: GetCoverQuestionProps;
  getResetQuizButtonProps: GetResetQuizButtonProps;
  getHydrateQuizButtonProps: GetHydrateQuizButtonProps;
  getAddToCartButtonProps: GetAddToCartButtonProps;
  getQuizResultButtonProps: GetQuizResultButtonProps;
  getQuizResultLinkProps: GetQuizResultLinkProps;
  customClickItemCallback: boolean;
}

export default React.createContext<Partial<QuizContextValue>>({});
