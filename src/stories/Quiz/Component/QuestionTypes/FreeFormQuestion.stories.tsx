import { FreeFormQuestion } from '@constructor-io/constructorio-client-javascript/lib/types';
import type { Meta, StoryObj } from '@storybook/react-vite';

import OpenTextTypeQuestion from '../../../../components/OpenTextTypeQuestion/OpenTextTypeQuestion';
import { getMockQuestionWithImage, getMockQuestion } from '../../tests/mocks';
import { QuestionTypes } from '../../../../components/CioQuiz/actions';
import QuestionTypeVariationsDecorator, {
  QuestionTypePrimaryDecorator,
} from './QuestionTypeDecorator';

const freeFormQuestionWithImage = {
  ...getMockQuestionWithImage(QuestionTypes.FreeForm),
  title: "Tell us what you're looking for",
  description: 'Describe the perfect product in your own words',
  input_placeholder: 'E.g., comfortable running shoes with good arch support',
};

const freeFormQuestionWithoutImage = {
  ...getMockQuestion(QuestionTypes.FreeForm),
  title: 'What are you searching for?',
  description: 'Help us find the perfect match for you',
  input_placeholder: 'Describe what you need...',
};

const meta: Meta<typeof OpenTextTypeQuestion> = {
  title: 'Quiz/CioQuiz/Questions/FreeFormQuestion',
  component: OpenTextTypeQuestion,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof OpenTextTypeQuestion>;

export const Primary: Story = {
  decorators: [
    (story) => QuestionTypePrimaryDecorator(story, [freeFormQuestionWithImage as FreeFormQuestion]),
  ],
};

export const WithImages: Story = {
  decorators: [
    (story) =>
      QuestionTypeVariationsDecorator(story, [freeFormQuestionWithImage as FreeFormQuestion]),
  ],
};

export const WithoutImages: Story = {
  decorators: [
    (story) =>
      QuestionTypeVariationsDecorator(story, [freeFormQuestionWithoutImage as FreeFormQuestion]),
  ],
};

export const WithLongPlaceholder: Story = {
  decorators: [
    (story) =>
      QuestionTypeVariationsDecorator(story, [
        {
          ...freeFormQuestionWithoutImage,
          input_placeholder:
            'E.g., I need waterproof hiking boots for mountain trails with good ankle support, size 10, preferably in dark colors',
        } as FreeFormQuestion,
      ]),
  ],
};
