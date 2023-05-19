/* eslint-disable import/no-extraneous-dependencies */
import { SelectQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';

import SelectTypeQuestion from '../../../../components/SelectTypeQuestion/SelectTypeQuestion';
import {
  getMockQuestionWithImage,
  getMockQuestion,
  questionOptionsWithImages,
  questionOptions,
} from '../../tests/mocks';
import QuestionTypeDecorator from './QuestionTypeDecorator';

const multipleSelectQuestionWithImages = {
  ...getMockQuestionWithImage(QuestionTypes.MultipleSelect),
  options: questionOptionsWithImages,
};
const multipleSelectQuestionWithoutImages = {
  ...getMockQuestion(QuestionTypes.MultipleSelect),
  options: questionOptions,
};

const meta: Meta<typeof SelectTypeQuestion> = {
  title: 'Quiz/Questions/MultipleSelectQuestion',
  component: SelectTypeQuestion,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SelectTypeQuestion>;

export const MultipleSelectQuestionWithImages: Story = {
  args: {},
  decorators: [
    (story) => QuestionTypeDecorator(story, multipleSelectQuestionWithImages as SelectQuestion),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    const title = canvas.getByText('This is question title');
    const description = canvas.getByText('This is question description');
    const allOptions = canvas.getAllByRole('button');
    const firstOption = canvas.getAllByRole('button')[0];
    const secondOption = canvas.getAllByRole('button')[1];
    const optionImage = document.querySelector('.cio-question-image') as HTMLElement;
    const optionValue = document.querySelector('.cio-question-option-value') as HTMLElement;
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(allOptions.length).toBeGreaterThan(0);
    expect(firstOption).toContainElement(optionImage);
    expect(firstOption).toContainElement(optionValue);
    expect(optionValue.innerText).toEqual('coffee');
    expect(optionImage.getAttribute('src')).toEqual(
      'https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png'
    );

    // 👇 Simulate interactions with the component
    await userEvent.click(firstOption);
    expect(firstOption).toHaveClass('selected');
    await userEvent.click(secondOption);
    expect(firstOption).toHaveClass('selected');
    expect(secondOption).toHaveClass('selected');
    await userEvent.click(secondOption);
    expect(secondOption).not.toHaveClass('selected');
  },
};

export const MultipleSelectQuestionWithoutImages: Story = {
  args: {},
  decorators: [
    (story) => QuestionTypeDecorator(story, multipleSelectQuestionWithoutImages as SelectQuestion),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    const firstOption = canvas.getAllByRole('button')[0];
    const optionImage = document.querySelector('.cio-question-image') as HTMLElement;
    expect(firstOption).not.toContainElement(optionImage);
  },
};
