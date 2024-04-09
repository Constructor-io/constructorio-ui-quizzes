import React from 'react';
import { renderToString } from 'react-dom/server';

import SelectTypeQuestion from '../../../src/components/SelectTypeQuestion/SelectTypeQuestion';
import { withContext } from '../../__tests__/utils';
import { CurrentQuestion, QuizReturnState } from '../../../src/types';
import * as factories from '../../__tests__/factories';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';

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
