import type { Meta, StoryObj } from '@storybook/react';

import MyQuiz from './index';
import '../../../styles.css';

const meta: Meta<typeof MyQuiz> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Quiz/Hooks',
  component: MyQuiz,
};

type Story = StoryObj<typeof MyQuiz>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <MyQuiz />,
};

export default meta;
