import { OpenQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import type { Meta, StoryObj } from '@storybook/react';

import OpenTextTypeQuestion from '../../../../components/OpenTextTypeQuestion/OpenTextTypeQuestion';
import { getMockQuestionWithImage, getMockQuestion } from '../../tests/mocks';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';
import QuestionTypeVariationsDecorator, {
  QuestionTypePrimaryDecorator,
} from './QuestionTypeDecorator';

const openTextQuestionWithImage = getMockQuestionWithImage(QuestionTypes.OpenText);
const openTextQuestionWithoutImage = getMockQuestion(QuestionTypes.OpenText);

const meta: Meta<typeof OpenTextTypeQuestion> = {
  title: 'Quiz/CioQuiz/Questions/OpenTextQuestion',
  component: OpenTextTypeQuestion,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof OpenTextTypeQuestion>;

export const Primary: Story = {
  decorators: [
    (story) => QuestionTypePrimaryDecorator(story, [openTextQuestionWithImage as OpenQuestion]),
  ],
};

export const WithImages: Story = {
  decorators: [
    (story) => QuestionTypeVariationsDecorator(story, [openTextQuestionWithImage as OpenQuestion]),
  ],
};

export const WithoutImages: Story = {
  decorators: [
    (story) =>
      QuestionTypeVariationsDecorator(story, [openTextQuestionWithoutImage as OpenQuestion]),
  ],
};
