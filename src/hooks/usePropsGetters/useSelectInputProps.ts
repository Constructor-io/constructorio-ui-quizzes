import { Nullable } from '@constructor-io/constructorio-client-javascript/lib/types';
import { useState, useCallback, useEffect, KeyboardEvent, useRef } from 'react';
import { QuestionTypes } from '../../components/CioQuiz/actions';
import { Selected } from '../../components/SelectTypeQuestion/SelectTypeQuestion';
import {
  AnswerInputState,
  GetSelectInputProps,
  Question,
  QuestionOption,
  QuizEventsReturn
} from '../../types';

// eslint-disable-next-line max-params
export default function useSelectInputProps(
  quizAnswerChanged: QuizEventsReturn.QuizAnswerChanged,
  nextQuestion: QuizEventsReturn.NextQuestion,
  currentQuestionData?: Nullable<Question>,
  answerInputs?: AnswerInputState
): GetSelectInputProps {
  const type: `${QuestionTypes}` | undefined = currentQuestionData?.type;
  const hasImages = currentQuestionData?.options?.some((option: QuestionOption) => option.images);

  const [selected, setSelected] = useState<Selected>({});
  const singleSelectClicked = useRef({});

  const toggleIdSelected = useCallback(
    (id: number) => {
      if (type === QuestionTypes.SingleSelect) {
        singleSelectClicked.current = true;
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
          prevSelected[Number(answer.id)] = true;
          setSelected(prevSelected);
        });
      }
    }

    singleSelectClicked.current = false;

    return function clearState() {
      setSelected({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionData?.id]);

  // Update global state
  useEffect(() => {
    if (currentQuestionData?.type === 'multiple' || currentQuestionData?.type === 'single') {
      const selectedAnswers = currentQuestionData?.options
        ?.filter((opt) => selected[Number(opt.id)])
        ?.map((opt) => ({ id: opt.id, value: opt.value }));

      quizAnswerChanged(selectedAnswers);
    }
  }, [
    selected,
    currentQuestionData?.id,
    currentQuestionData?.type,
    currentQuestionData?.options,
    quizAnswerChanged
  ]);

  // Go to next question only every time answerInputs (answers input state) changes...
  // and it's a singleSelectQuestion and user has just clicked on an option
  useEffect(() => {
    if (currentQuestionData?.type === 'single' && singleSelectClicked.current) {
      nextQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answerInputs]);

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
      key: option.id
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentQuestionData?.id, selected]
  );

  return getSelectInputProps;
}
