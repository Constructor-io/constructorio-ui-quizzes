import React from 'react';
import { renderToString } from 'react-dom/server';

import SelectTypeQuestion from '../../../src/components/SelectTypeQuestion/SelectTypeQuestion';
import { withContext } from '../../__tests__/utils';
import { CurrentQuestion, QuizReturnState } from '../../../src/types';
import * as factories from '../../__tests__/factories';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
import { QuestionTypes } from '../../../src/components/CioQuiz/actions';

describe(`${SelectTypeQuestion.name} client`, () => {
  const getSelectInputPropsMock = jest.fn().mockImplementation((props) => ({
    key: props.id,
  }));

  describe('single select', () => {
    const question = factories.selectQuestion.build();
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: { next_question: question } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders select question', () => {
      const view = renderToString(<Subject />);
      expect(view).toContain('Title');
      expect(view).toContain(`data-cnstrc-question-type="${question.type}"`);
    });
  });

  describe('single filter value', () => {
    const question = factories.filterValueQuestion.build();
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: { next_question: question } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders select question', () => {
      const view = renderToString(<Subject />);
      expect(view).toContain('Title');
      expect(view).toContain(`data-cnstrc-question-type="${question.type}"`);
    });
  });

  describe('multiple select', () => {
    const question = factories.selectQuestion.build({
      type: 'multiple',
    });
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: { next_question: question } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders select question', () => {
      const view = renderToString(<Subject />);
      expect(view).toContain('Select one or more options');
      expect(view).toContain(`data-cnstrc-question-type="${question.type}"`);
    });
  });

  describe('multiple filter values', () => {
    const question = factories.filterValueQuestion.build({
      type: QuestionTypes.MultipleFilterValues,
    });
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: { next_question: question } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders select question', () => {
      const view = renderToString(<Subject />);
      expect(view).toContain('Select one or more options');
      expect(view).toContain(`data-cnstrc-question-type="${question.type}"`);
    });
  });

  describe('multiple select with option descriptions', () => {
    const question = factories.selectQuestion.build({
      type: QuestionTypes.MultipleSelect,
      options: [
        factories.selectOption.build({ description: 'OPTION DESCRIPTION' }),
        factories.selectOption.build({ description: null }),
      ],
    });
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: { next_question: question } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders the description of the options that have one', () => {
      const view = renderToString(<Subject />);
      expect(view).toContain('OPTION DESCRIPTION');
      expect(view).toContain('cio-question-option-description');
    });
  });

  describe('single select with option descriptions', () => {
    const question = factories.selectQuestion.build({
      options: factories.selectOption.buildList(2, { description: 'OPTION DESCRIPTION' }),
    });
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: { next_question: question } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('does not render option descriptions inside the option cards', () => {
      const view = renderToString(<Subject />);
      expect(view).not.toContain('cio-question-option-description');
    });
  });

  describe('when question is null', () => {
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        state: {
          quiz: { currentQuestion: undefined } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders empty', () => {
      const view = renderToString(<Subject />);
      expect(view).toContain('');
    });
  });
});
