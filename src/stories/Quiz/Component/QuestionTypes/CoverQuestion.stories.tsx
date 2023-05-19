/* eslint-disable import/no-extraneous-dependencies */
import { expect } from '@storybook/jest';
import { CoverQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import CoverTypeQuestion from '../../../../components/CoverTypeQuestion/CoverTypeQuestion';
import { getMockQuestionWithImage, getMockQuestion } from './mocks';
import QuestionTypeDecorator from './QuestionTypeDecorator';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';

const coverQuestionWithImage = getMockQuestionWithImage(QuestionTypes.Cover);
const coverQuestionWithoutImage = getMockQuestion(QuestionTypes.Cover);

const meta: Meta<typeof CoverTypeQuestion> = {
  title: 'Quiz/Questions/CoverQuestion',
  component: CoverTypeQuestion,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CoverTypeQuestion>;

export const CoverQuestionWithImage: Story = {
  args: {},
  decorators: [(story) => QuestionTypeDecorator(story, coverQuestionWithImage as CoverQuestion)],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    document.querySelector('.cio-container--with-image');

    // 👇 Assert DOM structure
    const title = canvas.getByText('This is question title');
    const description = canvas.getByText('This is question description');
    const quizImage = document.querySelector('.cio-question-image');
    await expect(quizImage).toBeInTheDocument();
    await expect(title).toBeInTheDocument();
    await expect(description).toBeInTheDocument();
  },
};

export const CoverQuestionWithoutImage: Story = {
  args: {},
  decorators: [(story) => QuestionTypeDecorator(story, coverQuestionWithoutImage as CoverQuestion)],
  play: async () => {
    // 👇 Assert DOM structure
    const quizImage = document.querySelector('.cio-question-image');
    await expect(quizImage).not.toBeInTheDocument();
  },
};
