import { useState, useCallback, useEffect } from 'react';
import { AnswerInputState, GetOpenTextInputProps, Question, QuizEventsReturn } from '../../types';

export default function useOpenTextInputProps(
  setQuizAnswers: QuizEventsReturn.QuizAnswerChanged,
  nextQuestion: QuizEventsReturn.NextQuestion,
  currentQuestionData?: Question,
  answerInputs?: AnswerInputState
): GetOpenTextInputProps {
  const [input, setInput] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === 'Enter') {
      if (input && currentQuestionData?.type === 'open') {
        nextQuestion();
      }
    }
  };

  useEffect(() => {
    if (currentQuestionData?.type === 'open') {
      setQuizAnswers(input);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, currentQuestionData]);

  // Reset input for new open text questions
  useEffect(() => {
    if (answerInputs && currentQuestionData) {
      const questionAnswer = answerInputs[currentQuestionData.id]?.value;
      if (questionAnswer) {
        setInput(questionAnswer as string);
      } else {
        setInput('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionData]);

  const getOpenTextInputProps: GetOpenTextInputProps = useCallback(
    () => ({
      className: 'cio-question-input-text',
      placeholder: currentQuestionData?.inputPlaceholder,
      value: input,
      onChange: onChangeHandler,
      onKeyDown: onKeyDownHandler,
      style: {
        marginBottom: '10px',
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentQuestionData, input]
  );

  return getOpenTextInputProps;
}
