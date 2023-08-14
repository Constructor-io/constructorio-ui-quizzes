import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Title, Primary, ArgsTable } from '@storybook/addon-docs';

import { within } from '@storybook/testing-library';
import CoverTypeQuestion, {
  ICoverTypeQuestionProps,
} from '../../../../components/CoverTypeQuestion/CoverTypeQuestion';
import StoryPreview from '../../utils/StoryPreview';

const coverQuestionComponentProps: ICoverTypeQuestionProps = {
  id: 1,
  title: 'This is question title',
  description: 'This is question description',
  images: {
    primary_url:
      'https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png',
  },
};

const meta: Meta<typeof CoverTypeQuestion> = {
  title: 'Quiz/Questions/CoverQuestion',
  component: CoverTypeQuestion,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <ArgsTable />
          <Primary />
        </>
      ),
    },
  },
  tags: ['autodocs'],
};

const { images, ...coverQuestionComponentPropsWithoutImages } = coverQuestionComponentProps;

export default meta;
type Story = StoryObj<typeof CoverTypeQuestion>;

export const KitchenSink: Story = {
  render: () => (
    <StoryPreview
      Component={CoverTypeQuestion}
      variationsArgsList={[coverQuestionComponentProps, coverQuestionComponentPropsWithoutImages]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    document.querySelector('.cio-container--with-image');

    // 👇 Assert DOM structure
    const title = canvas.getByText('This is question title');
    const description = canvas.getByText('This is question description');
    const quizImage = document.querySelector('.cio-question-image');
    await expect(quizImage).toBeInTheDocument();
    await expect(title).toBeInTheDocument();
    await expect(description).toBeInTheDocument();
  },
};
