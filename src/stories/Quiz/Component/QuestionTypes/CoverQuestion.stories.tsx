import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CoverQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import CoverTypeQuestion from '../../../../components/CoverTypeQuestion/CoverTypeQuestion';
import { getMockQuestionWithImage, getMockQuestion, useMockContextValue } from '../../tests/mocks';
import QuestionTypeVariationsDecorator, {
  QuestionTypePrimaryDecorator,
} from './QuestionTypeDecorator';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';
import QuizContext from '../../../../components/CioQuiz/context';

const coverQuestionWithImage = getMockQuestionWithImage(QuestionTypes.Cover);
const coverQuestionWithoutImage = getMockQuestion(QuestionTypes.Cover);

const meta: Meta<typeof CoverTypeQuestion> = {
  title: 'Quiz/CioQuiz/Questions/CoverQuestion',
  component: CoverTypeQuestion,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CoverTypeQuestion>;

export const Primary: Story = {
  decorators: [
    (story) => QuestionTypePrimaryDecorator(story, [coverQuestionWithImage as CoverQuestion]),
  ],
};

export const WithImages: Story = {
  decorators: [
    (story) => QuestionTypeVariationsDecorator(story, [coverQuestionWithImage as CoverQuestion]),
  ],
};

export const WithoutImages: Story = {
  decorators: [
    (story) => QuestionTypeVariationsDecorator(story, [coverQuestionWithoutImage as CoverQuestion]),
  ],
};
