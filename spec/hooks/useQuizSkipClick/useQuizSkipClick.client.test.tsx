import { renderHook, act } from '@testing-library/react';
import useQuizSkipClick from '../../../src/hooks/useQuizEvents/useQuizSkipClick';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../../src/components/CioQuiz/quizLocalReducer';
import { QuestionTypes } from '../../../src/components/CioQuiz/actions';

describe('Testing Hook (client): useQuizSkipClick', () => {
  it('correctly handles skip action and calls provided callback', () => {
    const dispatchLocalStateMock = jest.fn();
    const onQuizSkipQuestionMock = jest.fn();
    const quizApiStateMock = {
      quizCurrentQuestion: {
        id: '1',
        next_question: {
          id: 2,
          type: 'multiple',
          title: '',
          description: '',
          options: [],
          cta_text: '',
        },
      },
    } as unknown as QuizAPIReducerState;
    const quizLocalStateMock = {
      answerInputs: {
        '2': {
          value: null,
        },
      },
    } as unknown as QuizLocalReducerState;

    const { result } = renderHook(() =>
      useQuizSkipClick(
        quizApiStateMock,
        quizLocalStateMock,
        dispatchLocalStateMock,
        onQuizSkipQuestionMock
      )
    );

    act(() => {
      result.current();
    });

    expect(dispatchLocalStateMock).toHaveBeenCalledWith({
      type: QuestionTypes.Skip,
      payload: quizApiStateMock.quizCurrentQuestion,
    });

    expect(onQuizSkipQuestionMock).toHaveBeenCalledWith({
      id: 2,
      type: 'multiple',
      cta_text: '',
      options: [],
      title: '',
      description: '',
      answer: {
        ...quizLocalStateMock.answerInputs['2'],
        value: null,
      },
    });
  });
});
