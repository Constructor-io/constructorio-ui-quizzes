import type { Meta, StoryObj } from '@storybook/react';

import { CoverQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import CoverTypeQuestion from '../../../../components/CoverTypeQuestion/CoverTypeQuestion';
import { getMockQuestionWithImage, getMockQuestion } from '../../tests/mocks';
import QuestionTypeDecorator_v2 from './QuestionTypeDecorator_v2';
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

export const Variations: Story = {
  decorators: [
    (story) =>
      QuestionTypeDecorator_v2(story, [
        coverQuestionWithImage as CoverQuestion,
        coverQuestionWithoutImage as CoverQuestion,
      ]),
  ],
};
