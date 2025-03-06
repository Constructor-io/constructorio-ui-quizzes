import { Nullable } from '@constructor-io/constructorio-client-javascript/lib/types';
import { useState, useCallback, useEffect } from 'react';
import {
  AnswerInputState,
  GetOpenTextInputProps,
  Question,
  QuizEventsReturn,
  OpenQuestionCallback,
} from '../../types';

// eslint-disable-next-line max-params
export default function useOpenTextInputProps(
  setQuizAnswers: QuizEventsReturn.QuizAnswerChanged,
  nextQuestion: QuizEventsReturn.NextQuestion,
  currentQuestionData?: Nullable<Question>,
  answerInputs?: AnswerInputState,
  onOpenQuestionInput?: OpenQuestionCallback
): GetOpenTextInputProps {
  const [input, setInput] = useState('');

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
  }, []);

  const onKeyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = e;
      if (key !== 'Enter') {
        return;
      }

      if (input && currentQuestionData?.type === 'open') {
        if (onOpenQuestionInput) {
          onOpenQuestionInput(input, currentQuestionData);
        }

        nextQuestion();
      }
    },
    [currentQuestionData, input, nextQuestion, onOpenQuestionInput]
  );

  useEffect(() => {
    if (currentQuestionData?.type === 'open') {
      setQuizAnswers(input);
    }
  }, [input, currentQuestionData?.type, currentQuestionData?.id, setQuizAnswers]);

  // Reset input for new open text questions
  useEffect(() => {
    if (answerInputs && currentQuestionData?.id) {
      const questionAnswer = answerInputs[currentQuestionData.id]?.value;
      if (questionAnswer) {
        setInput(questionAnswer as string);
      } else {
        setInput('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionData?.id]);

  const getOpenTextInputProps: GetOpenTextInputProps = useCallback(
    () => ({
      className: 'cio-question-input-text',
      placeholder: currentQuestionData?.input_placeholder || 'Answer here...',
      value: input,
      onChange: onChangeHandler,
      onKeyDown: onKeyDownHandler,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentQuestionData?.input_placeholder, currentQuestionData?.id, input, onKeyDownHandler]
  );

  return getOpenTextInputProps;
}
