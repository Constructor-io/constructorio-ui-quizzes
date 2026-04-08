import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('renders title when provided', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    render(<Subject quizId='quizId' onResultsClick={() => {}} title='Review your answers' />);

    expect(screen.getByText('Review your answers')).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    render(<Subject quizId='quizId' onResultsClick={() => {}} />);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('calls onSummaryPageLoaded when summary page mounts', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    const onSummaryPageLoaded = jest.fn();

    render(
      <Subject
        quizId='quizId'
        onResultsClick={() => {}}
        onSummaryPageLoaded={onSummaryPageLoaded}
      />
    );

    expect(onSummaryPageLoaded).toHaveBeenCalledTimes(1);
  });

  it('does not call onSummaryPageLoaded when not provided', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    expect(() => {
      render(<Subject quizId='quizId' onResultsClick={() => {}} />);
    }).not.toThrow();
  });

  it('renders custom summary page when renderSummaryPage is provided', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    const renderSummaryPage = jest.fn().mockReturnValue(<div>Custom Summary</div>);

    render(
      <Subject quizId='quizId' onResultsClick={() => {}} renderSummaryPage={renderSummaryPage} />
    );

    expect(screen.getByText('Custom Summary')).toBeInTheDocument();
    expect(screen.queryByLabelText('Summary page')).not.toBeInTheDocument();
    expect(renderSummaryPage).toHaveBeenCalledWith(
      expect.objectContaining({
        answerInputs: mockState.answers.inputs,
        onResultsClick: expect.any(Function),
        onJumpToQuestion: expect.any(Function),
      })
    );
  });

  it('renderSummaryPage onJumpToQuestion calls getJumpToQuestionButtonProps', () => {
    jest.spyOn(utils, 'getStateFromSessionStorage').mockReturnValue({
      quizId: {
        answerInputs: mockState.answers.inputs,
        answers: [],
        isQuizCompleted: false,
        prevAnswerInputs: mockState.answers.inputs,
      },
    });

    const renderSummaryPage = jest.fn().mockImplementation(({ onJumpToQuestion }) => (
      <button type='button' onClick={() => onJumpToQuestion(2)}>
        Jump
      </button>
    ));

    render(
      <Subject quizId='quizId' onResultsClick={() => {}} renderSummaryPage={renderSummaryPage} />
    );

    fireEvent.click(screen.getByText('Jump'));

    expect(getJumpToQuestionButtonProps).toHaveBeenCalledWith(2);
    expect(onJumpToQuestionMock).toHaveBeenCalled();
  });
});
