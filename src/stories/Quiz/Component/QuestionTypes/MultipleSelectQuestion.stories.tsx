import { SelectQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import type { Meta, StoryObj } from '@storybook/react';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';

import SelectTypeQuestion from '../../../../components/SelectTypeQuestion/SelectTypeQuestion';
import {
  getMockQuestionWithImage,
  getMockQuestion,
  questionOptionsWithImages,
  questionOptions,
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
