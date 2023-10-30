import type { Meta, StoryObj } from '@storybook/react';

import { CoverQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import CoverTypeQuestion from '../../../../components/CoverTypeQuestion/CoverTypeQuestion';
import { getMockQuestionWithImage, getMockQuestion } from '../../tests/mocks';
import QuestionTypeDecorator from './QuestionTypeDecorator';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';

const coverQuestionWithImage = getMockQuestionWithImage(QuestionTypes.Cover);
const coverQuestionWithoutImage = getMockQuestion(QuestionTypes.Cover);

const meta: Meta<typeof CoverTypeQuestion> = {
  title: 'Quiz/Component/Questions/CoverQuestion',
  component: CoverTypeQuestion,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CoverTypeQuestion>;

export const WithImages: Story = {
  decorators: [(story) => QuestionTypeDecorator(story, [coverQuestionWithImage as CoverQuestion])],
};

export const WithoutImages: Story = {
  decorators: [
    (story) => QuestionTypeDecorator(story, [coverQuestionWithoutImage as CoverQuestion]),
  ],
};
