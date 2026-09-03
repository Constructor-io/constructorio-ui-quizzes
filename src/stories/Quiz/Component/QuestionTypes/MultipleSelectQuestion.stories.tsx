import { SelectQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';

import SelectTypeQuestion from '../../../../components/SelectTypeQuestion/SelectTypeQuestion';
import {
  getMockQuestionWithImage,
  getMockQuestion,
  questionOptionsWithImages,
  questionOptions,
  questionOptionsWithDescriptions,
} from '../../tests/mocks';
import QuestionTypeVariationsDecorator, {
  QuestionTypePrimaryDecorator,
} from './QuestionTypeDecorator';

const multipleSelectQuestionWithImages = {
  ...getMockQuestionWithImage(QuestionTypes.MultipleSelect),
  options: questionOptionsWithImages,
};
const multipleSelectQuestionWithoutImages = {
  ...getMockQuestion(QuestionTypes.MultipleSelect),
  options: questionOptions,
};
const multipleSelectQuestionWithDescriptions = {
  ...getMockQuestion(QuestionTypes.MultipleSelect),
  options: questionOptionsWithDescriptions,
};
const multipleSelectQuestionWithSomeDescriptions = {
  ...getMockQuestion(QuestionTypes.MultipleSelect),
  options: questionOptionsWithDescriptions.map(({ description, ...option }, index) => ({
    ...option,
    ...(index % 2 === 0 && { description }),
  })),
};
const multipleSelectQuestionWithImagesAndDescriptions = {
  ...getMockQuestionWithImage(QuestionTypes.MultipleSelect),
  options: questionOptionsWithImages.map((option, index) => ({
    ...option,
    description: questionOptionsWithDescriptions[index]?.description,
  })),
};

const meta: Meta<typeof SelectTypeQuestion> = {
  title: 'Quiz/CioQuiz/Questions/MultipleSelectQuestion',
  component: SelectTypeQuestion,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SelectTypeQuestion>;

export const Primary: Story = {
  decorators: [
    (story) =>
      QuestionTypePrimaryDecorator(story, [multipleSelectQuestionWithImages as SelectQuestion]),
  ],
};

export const WithImages: Story = {
  decorators: [
    (story) =>
      QuestionTypeVariationsDecorator(story, [multipleSelectQuestionWithImages as SelectQuestion]),
  ],
};

export const WithoutImages: Story = {
  decorators: [
    (story) =>
      QuestionTypeVariationsDecorator(story, [
        multipleSelectQuestionWithoutImages as SelectQuestion,
      ]),
  ],
};

export const WithOptionDescriptions: Story = {
  decorators: [
    (story) =>
      QuestionTypePrimaryDecorator(story, [
        multipleSelectQuestionWithDescriptions as SelectQuestion,
      ]),
  ],
};

export const WithSomeOptionDescriptions: Story = {
  decorators: [
    (story) =>
      QuestionTypePrimaryDecorator(story, [
        multipleSelectQuestionWithSomeDescriptions as SelectQuestion,
      ]),
  ],
};

export const WithImagesAndOptionDescriptions: Story = {
  decorators: [
    (story) =>
      QuestionTypePrimaryDecorator(story, [
        multipleSelectQuestionWithImagesAndDescriptions as SelectQuestion,
      ]),
  ],
};
