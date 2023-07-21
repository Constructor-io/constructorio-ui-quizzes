import { useState, useCallback, useEffect, KeyboardEvent, useRef } from 'react';
import { QuestionTypes } from '../../components/CioQuiz/actions';
import { Answers } from '../../components/CioQuiz/quizLocalReducer';
import { Selected } from '../../components/SelectTypeQuestion/SelectTypeQuestion';
import {
  AnswerInputState,
  GetSelectInputProps,
  Question,
  QuestionOption,
  QuizEventsReturn,
} from '../../types';

// eslint-disable-next-line max-params
export default function useSelectInputProps(
  quizAnswerChanged: QuizEventsReturn.QuizAnswerChanged,
  nextQuestion: QuizEventsReturn.NextQuestion,
  currentQuestionData?: Question,
  answerInputs?: AnswerInputState,
  answers?: Answers
): GetSelectInputProps {
  const type: `${QuestionTypes}` | undefined = currentQuestionData?.type;
  const hasImages = currentQuestionData?.options?.some((option: QuestionOption) => option.images);

  const [selected, setSelected] = useState<Selected>({});
  const singleSelectQuestionAnswer = useRef({});

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

  useEffect(() => {
    console.log(answerInputs);
    if (currentQuestionData?.type === 'single') {
      debugger;
      nextQuestion();
    }
  }, [answerInputs]);

  // const currentQuestionId = currentQuestionData?.id;
  // let currentAnswer;
  // if (currentQuestionId) {
  //   currentAnswer = answerInputs?.[currentQuestionId];
  // }

  // const [currentAnswerId, setCurrentAnswerId] = useState('');

  // useEffect(() => {
  //   console.log(selected);
  //   debugger;
  //   if (Object.keys(selected).length) {
  //     setCurrentAnswerId(Object.keys(selected)?.[0]);
  //   }
  // }, [selected]);

  // useEffect(() => {
  //   if (currentQuestionData?.type === 'single' && currentAnswer.type === 'single') {
  //     console.log('selectedssssssssssss', selected);
  //     console.log('currentAnswerId', currentAnswerId);

  //     nextQuestion();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentAnswerId]);

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
    [currentQuestionData?.id, selected]
  );

  return getSelectInputProps;
}
