import { expect } from '@storybook/jest';
import { OpenQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import OpenTextTypeQuestion from '../../../../components/OpenTextTypeQuestion/OpenTextTypeQuestion';
import { getMockQuestionWithImage, getMockQuestion } from '../../tests/mocks';
import QuestionTypeDecorator from './QuestionTypeDecorator';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';

const openTextQuestionWithImage = getMockQuestionWithImage(QuestionTypes.OpenText);
const openTextQuestionWithoutImage = getMockQuestion(QuestionTypes.OpenText);

const meta: Meta<typeof OpenTextTypeQuestion> = {
  title: 'Quiz/Questions/OpenTextQuestion',
  component: OpenTextTypeQuestion,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof OpenTextTypeQuestion>;

export const OpenTextQuestionWithImage: Story = {
  args: {},
  decorators: [(story) => QuestionTypeDecorator(story, openTextQuestionWithImage as OpenQuestion)],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    document.querySelector('.cio-container--with-image');

    // 👇 Assert DOM structure
    await expect(canvas.getByAltText('Quiz Image')).toBeInTheDocument();
    await expect(canvas.getByText('This is question title')).toBeInTheDocument();
    await expect(canvas.getByText('This is question description')).toBeInTheDocument();
    await expect(canvas.getByPlaceholderText('Answer here...')).toBeInTheDocument();
    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByPlaceholderText('Answer here...'), 'Name');
    expect(canvas.getByPlaceholderText('Answer here...').getAttribute('value')).toBe('Name');
  },
};

export const OpenTextQuestionWithoutImage: Story = {
  args: {},
  decorators: [
    (story) => QuestionTypeDecorator(story, openTextQuestionWithoutImage as OpenQuestion),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    const title = canvas.getByText('This is question title');
    const description = canvas.getByText('This is question description');
    const quizImage = document.querySelector('.cio-question-image');
    expect(quizImage).not.toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(canvas.getByPlaceholderText('Answer here...')).toBeInTheDocument();
    // 👇 Simulate interactions with the component
    userEvent.type(canvas.getByPlaceholderText('Answer here...'), 'Name');
    expect(canvas.getByPlaceholderText('Answer here...').getAttribute('value')).toBe('Name');
  },
};
