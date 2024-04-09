import { renderHook, act } from '@testing-library/react';

import useQuizNextClick from '../../../../src/hooks/useQuizEvents/useQuizNextClick';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../../../src/components/CioQuiz/quizLocalReducer';
import { QuestionTypes } from '../../../../src/components/CioQuiz/actions';

describe('Testing Hook (client): useQuizNextClick', () => {
  it('calls dispatchLocalState and onQuizNextQuestion correctly', () => {
    const dispatchLocalStateMock = jest.fn();
    const onQuizNextQuestionMock = jest.fn();
    const quizApiStateMock = {
      quizCurrentQuestion: {
        id: '1',
        next_question: {
          id: '2',
          type: 'singleChoice',
        },
      },
    } as unknown as QuizAPIReducerState;

    const quizLocalStateMock = {
      answerInputs: {
        '2': {
          value: ['Answer 1'],
        },
      },
    } as unknown as QuizLocalReducerState;

    const { result } = renderHook(() =>
      useQuizNextClick(
        quizApiStateMock,
        quizLocalStateMock,
        dispatchLocalStateMock,
        onQuizNextQuestionMock
      )
    );

    act(() => {
      result.current();
    });

    expect(dispatchLocalStateMock).toHaveBeenCalledWith({
      type: QuestionTypes.Next,
      payload: quizApiStateMock.quizCurrentQuestion,
    });

    expect(onQuizNextQuestionMock).toHaveBeenCalledWith({
      id: '2',
      type: 'singleChoice',
      answer: quizLocalStateMock.answerInputs['2'],
    });
  });
});
