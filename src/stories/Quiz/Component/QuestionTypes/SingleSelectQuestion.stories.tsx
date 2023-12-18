import { SelectQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import type { Meta, StoryObj } from '@storybook/react';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';

import SelectTypeQuestion from '../../../../components/SelectTypeQuestion/SelectTypeQuestion';
import {
  getMockQuestion,
  getMockQuestionWithImage,
  questionOptionsWithImages,
  questionOptions,
} from '../../tests/mocks';
import QuestionTypeDecorator from './QuestionTypeDecorator';

const singleSelectQuestionWithImages = {
  ...getMockQuestionWithImage(QuestionTypes.SingleSelect),
  options: questionOptionsWithImages,
};
const singleSelectQuestionWithoutImages = {
  ...getMockQuestion(QuestionTypes.SingleSelect),
  options: questionOptions,
};

const meta: Meta<typeof SelectTypeQuestion> = {
  title: 'Quiz/Component/Questions/SingleSelectQuestion',
  component: SelectTypeQuestion,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SelectTypeQuestion>;

export const WithImages: Story = {
  decorators: [
    (story) => QuestionTypeDecorator(story, [singleSelectQuestionWithImages as SelectQuestion]),
  ],
};

export const WithoutImages: Story = {
  decorators: [
    (story) => QuestionTypeDecorator(story, [singleSelectQuestionWithoutImages as SelectQuestion]),
  ],
};
