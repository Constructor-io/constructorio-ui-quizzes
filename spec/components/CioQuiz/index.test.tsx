import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import * as factories from '../../__tests__/factories';

import * as services from '../../../src/services/index';
import CioQuiz from '../../../src/components/CioQuiz';

describe(`${CioQuiz.name} client`, () => {
  const props: React.ComponentProps<typeof CioQuiz> = {
    quizId: 'quiz_id',
    apiKey: 'api_key',
    callbacks: {
      onAddToCartClick: jest.fn(),
      onAddToFavoritesClick: jest.fn(),
      onEmailResults: jest.fn(),
      onQuizNextQuestion: jest.fn(),
      onQuizResultClick: jest.fn(),
      onQuizSkipQuestion: jest.fn(),
      onQuizResultsLoaded: jest.fn(),
      onShareResultsModalOpen: jest.fn(),
      onShareResultsModalClose: jest.fn(),
      onQuizResultsConfigLoaded: jest.fn(),
    },
    questionsPageOptions: { skipQuestionButtonText: 'Skip' },
    sessionStateOptions: { showSessionModal: true },
  };

  describe('loaded services with question', () => {
    beforeEach(() => {
      jest.spyOn(services, 'getQuizResultsConfig').mockResolvedValue({
        quiz_id: 'quiz_id',
        quiz_version_id: 'quiz_version_id',
        results_config: factories.quizResultsConfig.build(),
      });

      jest.spyOn(services, 'getNextQuestion').mockResolvedValue({
        quiz_id: 'quiz_id',
        quiz_version_id: 'quiz_version_id',
        next_question: factories.coverQuestion.build({
          title: 'Cover Question',
          cta_text: undefined,
        }),
        total_questions: 4,
      });
    });

    it('renders question', async () => {
      const { container } = render(<CioQuiz {...props} />);
      await screen.findByText('Cover Question');
      expect(container.firstChild).not.toHaveClass('cio-quiz-loading');
    });

    it('does not show session prompt', async () => {
      render(<CioQuiz {...props} sessionStateOptions={{ showSessionModal: undefined }} />);
      await screen.findByText('Cover Question');
      expect(
        screen.queryByText('Do you want to continue where you left off?')
      ).not.toBeInTheDocument();
    });

    it('has bg image for select question', async () => {
      jest.spyOn(services, 'getNextQuestion').mockResolvedValue({
        quiz_id: 'quiz_id',
        quiz_version_id: 'quiz_version_id',
        next_question: factories.selectQuestion.build({ images: factories.images.build() }),
        total_questions: 4,
      });
      render(<CioQuiz {...props} sessionStateOptions={{ showSessionModal: undefined }} />);
      await screen.findByText('Title');
      expect(screen.getByAltText('Secondary Alt')).toBeInTheDocument();
    });
  });

  describe('loaded services with results', () => {
    beforeEach(() => {
      jest.spyOn(services, 'getQuizResultsConfig').mockResolvedValue({
        quiz_id: 'quiz_id',
        quiz_version_id: 'quiz_version_id',
        results_config: factories.quizResultsConfig.build(),
      });

      jest.spyOn(services, 'getNextQuestion').mockResolvedValue({
        quiz_id: 'quiz_id',
        quiz_version_id: 'quiz_version_id',
        // @ts-ignore
        next_question: undefined,
        total_questions: 4,
      });

      jest.spyOn(services, 'getQuizResults').mockResolvedValue({
        quiz_id: 'quiz_id',
        quiz_version_id: 'quiz_version_id',
        quiz_selected_options: [{ value: 'VALUE', has_attribute: true, is_matched: false }],
        response: {
          result_sources: {},
          facets: [],
          groups: [],
          results: [factories.quizResult.build()],
          sort_options: [],
          refined_content: [],
          total_num_results: 1,
          features: [],
        },
        quiz_session_id: 'quiz_session_id',
      });
    });

    it('renders results', async () => {
      render(<CioQuiz {...props} />);
      await screen.findByText('Desktop title');
      expect(screen.getByText('1 result')).toBeInTheDocument();
    });

    it('share results', async () => {
      render(<CioQuiz {...props} resultsPageOptions={{ showShareResultsButton: true }} />);
      await screen.findByText('Desktop title');
      fireEvent.click(screen.getByText('Share Results'));
      expect(
        screen.getByText(/Share or save your quiz results through email or/)
      ).toBeInTheDocument();
      expect(props.callbacks?.onShareResultsModalOpen).toHaveBeenCalledTimes(1);
      fireEvent.click(screen.getByRole('button', { name: 'Close button' }));
      expect(props.callbacks?.onShareResultsModalClose).toHaveBeenCalledTimes(1);
      expect(
        screen.queryByText(/Share or save your quiz results through email or/)
      ).not.toBeInTheDocument();
    });
  });
});
