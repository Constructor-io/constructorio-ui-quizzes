import React from 'react';
import { render, screen } from '@testing-library/react';

import { fireEvent } from '@storybook/testing-library';
import { withContext } from '../../__tests__/utils';
import SummaryPage from '../../../src/components/SummaryPage/SummaryPage';
import * as utils from '../../../src/utils';
import { QuizReturnState } from '../../../src';
import { QuestionTypes } from '../../../src/components/CioQuiz/actions';
import { RequestStates } from '../../../src/constants';

describe(`${SummaryPage.name} client`, () => {
  const onPreviousMock = jest.fn();
  const getPreviousQuestionButtonProps = jest
    .fn()
    .mockReturnValue({ onClick: onPreviousMock, 'aria-label': 'Previous' });

  const onJumpToQuestionMock = jest.fn();
  const getJumpToQuestionButtonProps = jest.fn().mockReturnValue({ onClick: onJumpToQuestionMock });

  const mockState: QuizReturnState = {
    answers: {
      inputs: {
        1: {
          type: QuestionTypes.SingleFilterValue,
          questionTitle: 'single_filter_title',
          value: 'value',
        },
        2: {
          type: QuestionTypes.MultipleFilterValues,
          questionTitle: 'multiple_filter_title',
          value: [
            { id: '1', value: 'value_1' },
            { id: '2', value: 'value_2' },
          ],
        },
        3: {
          type: QuestionTypes.OpenText,
          questionTitle: 'Hey?',
          value: 'Hey',
        },
        4: {
          type: QuestionTypes.Cover,
          questionTitle: 'Welcome',
          // There is supposed to be no value, but we want to test that it is not displayed anyways
          value: 'Cover answer',
        },
      },
      payload: [['']],
    },
    quiz: {
      resultsConfig: null,
      requestState: RequestStates.Success,
    },
    quizSessionStorageState: {
      key: 'key',
      skipToResults: false,
      hasSessionStorageState: () => true,
    },
  };

  const Subject = withContext(SummaryPage, {
    contextMocks: {
      getPreviousQuestionButtonProps,
      getJumpToQuestionButtonProps,
      state: mockState,
    },
  });

  it('renders empty as there is no session storage present', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue(null);
    const onResultsClick = jest.fn();
    render(<Subject quizId='quizId' onResultsClick={onResultsClick} />);
    expect(onResultsClick).toHaveBeenCalled();
  });

  it('renders summary page with selected options', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    render(<Subject quizId='quizId' onResultsClick={() => {}} />);

    expect(screen.getByText('value')).toBeInTheDocument();
    expect(screen.getByText('value_1, value_2')).toBeInTheDocument();
    expect(screen.getByText('Hey')).toBeInTheDocument();
    expect(screen.queryByText('Cover answer')).not.toBeInTheDocument();
  });

  it('jumping between questions work as expected', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    render(<Subject quizId='quizId' onResultsClick={() => {}} />);
    expect(getJumpToQuestionButtonProps).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByText('value_1, value_2'));

    expect(onJumpToQuestionMock).toHaveBeenCalled();
  });

  it('onResultsClick callback works as expected', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    const onResultsClick = jest.fn();

    render(<Subject quizId='quizId' onResultsClick={onResultsClick} />);

    fireEvent.click(screen.getByText('Results'));

    expect(onResultsClick).toHaveBeenCalled();
  });

  it('changes results button text if passed', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    render(
      <Subject quizId='quizId' onResultsClick={() => {}} resultsButtonText='Random outcome text' />
    );

    expect(screen.getByText('Random outcome text')).toBeInTheDocument();
  });
});
