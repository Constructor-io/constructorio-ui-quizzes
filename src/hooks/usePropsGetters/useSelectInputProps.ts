import { useState, useCallback, useEffect, KeyboardEvent } from 'react';
import { QuestionTypes } from '../../components/CioQuiz/actions';
import { Selected } from '../../components/SelectTypeQuestion/SelectTypeQuestion';
import {
  AnswerInputState,
  GetSelectInputProps,
  Question,
  QuestionOption,
  QuizEventsReturn,
} from '../../types';

export default function useSelectInputProps(
  quizAnswerChanged: QuizEventsReturn.QuizAnswerChanged,
  currentQuestionData?: Question,
  answerInputs?: AnswerInputState
): GetSelectInputProps {
  const type: `${QuestionTypes}` | undefined = currentQuestionData?.type;
  const hasImages = currentQuestionData?.options?.some((option: QuestionOption) => option.images);

  const [selected, setSelected] = useState<Selected>({});

  const toggleIdSelected = useCallback(
    (id: number) => {
      if (type === QuestionTypes.SingleSelect) {
        setSelected({ [id]: true });
      } else if (type === QuestionTypes.MultipleSelect) {
        if (selected[id]) {
          const newState = { ...selected };
          delete newState[id];
          setSelected(newState);
        } else {
          setSelected({ ...selected, [id]: true });
        }
      }
    },
    [selected, type]
  );

  const onOptionKeyDown = (event: KeyboardEvent<HTMLElement>, id: number) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      toggleIdSelected(id);
    }
  };

  // Update component local state
  useEffect(() => {
    if (currentQuestionData?.type) {
      const nextQuestionId = currentQuestionData.id;
      const currentAnswer = answerInputs?.[nextQuestionId];
      const prevSelected: Selected = {};
      if (Array.isArray(currentAnswer?.value)) {
        currentAnswer?.value?.forEach((answer) => {
          prevSelected[Number(answer)] = true;
          setSelected(prevSelected);
        });
      }
    }

    return function clearState() {
      setSelected({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionData?.id]);

  // Update global state
  useEffect(() => {
    if (currentQuestionData?.type === 'multiple' || currentQuestionData?.type === 'single') {
      const selectedAnswers = Object.keys(selected).filter((key) => selected[Number(key)]);
      quizAnswerChanged(selectedAnswers);
    }
  }, [selected, currentQuestionData?.id, currentQuestionData?.type, quizAnswerChanged]);

  const getSelectInputProps: GetSelectInputProps = useCallback(
    (option: QuestionOption) => ({
      className: `${
        !hasImages ? 'cio-question-option-container-text-only' : 'cio-question-option-container'
      } ${selected[option.id] ? 'selected' : ''}`,
      onClick: () => {
        toggleIdSelected(option.id);
      },
      onKeyDown: (event) => {
        onOptionKeyDown(event, option.id);
      },
      role: 'button',
      tabIndex: 0,
      key: option.id,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentQuestionData, selected]
  );

  return getSelectInputProps;
}
