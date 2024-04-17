import { renderHook } from '@testing-library/react';
import useCoverQuestionProps from '../../../../src/hooks/usePropsGetters/useCoverQuestionProps';
import { QuestionTypes } from '../../../../src/components/CioQuiz/actions';
import { Question } from '../../../../src/types';

describe('Testing Hook (client): useCoverQuestionProps', () => {
  it('calls setQuizAnswers with empty string if currentQuestionData.type is "cover"', () => {
    const setQuizAnswersMock = jest.fn();
    const currentQuestionData = { type: QuestionTypes.Cover } as Question;

    renderHook(() => useCoverQuestionProps(setQuizAnswersMock, currentQuestionData));

    expect(setQuizAnswersMock).toHaveBeenCalledWith('');
  });

  it('does not call setQuizAnswers if currentQuestionData.type is not "cover"', () => {
    const setQuizAnswersMock = jest.fn();
    const currentQuestionData = { type: QuestionTypes.OpenText } as Question;

    renderHook(() => useCoverQuestionProps(setQuizAnswersMock, currentQuestionData));

    expect(setQuizAnswersMock).not.toHaveBeenCalled();
  });

  it('getCoverQuestionProps returns an empty object', () => {
    const { result } = renderHook(() => useCoverQuestionProps(() => {}, null));

    expect(result.current()).toEqual({});
  });
});
