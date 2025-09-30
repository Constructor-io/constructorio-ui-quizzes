import { within, userEvent } from '@storybook/testing-library';
import type { StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes, docsControls } from '../argTypes';
import { sleep } from '../../../utils';
import { apiKey, quizId } from '../../../constants';
import { callbacks, resultsPageOptions, resultCardOptions } from './mocks';

export default {
  title: 'Quiz/Full Quiz e2e tests',
  component: CioQuiz,
  argTypes,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        language: 'jsx',
        format: true,
        type: 'code',
      },
    },
    controls: docsControls,
  },
};

const sessionStateOptions = {
  showSessionModal: false,
};

type Story = StoryObj<typeof CioQuiz>;

// eslint-disable-next-line storybook/prefer-pascal-case
export const e2eInteractionTest: Story = {
  args: {
    apiKey,
    quizId,
    resultsPageOptions,
    sessionStateOptions,
    callbacks,
    resultCardOptions,
    enableHydration: false,
  },
};

e2eInteractionTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // First open text question
  await sleep(500);
  expect(await canvas.findByRole('button')).toHaveClass('disabled');
  await userEvent.type(canvas.getByRole('textbox'), 'Bobby', { delay: 100 });
  expect(canvas.getByRole('button')).not.toHaveClass('disabled');
  userEvent.click(canvas.getByRole('button'));

  // Second open text question
  expect(await canvas.findByText(/This is another open text question/)).toBeInTheDocument();
  await userEvent.type(canvas.getByRole('textbox'), 'Bobby', { delay: 100 });
  expect(await canvas.findByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // first cover question
  await sleep(500);
  expect(await canvas.findByText(/Nice to meet you/)).toBeInTheDocument();
  expect(await canvas.findByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // second cover question
  await sleep(500);
  expect(await canvas.findByText(/This is another cover/)).toBeInTheDocument();
  expect(await canvas.findByRole('button', { name: 'Go' })).not.toHaveClass('disabled');
  userEvent.click(canvas.getByRole('button', { name: 'Go' }));

  // question single select
  await sleep(500);
  expect(await canvas.findByText('How much coffee do you generally drink?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  userEvent.click(canvas.getByRole('button', { name: /More than one/ }));

  // Single Select back button test
  await sleep(500);
  expect(await canvas.findByText('What are your preferred brewing methods?')).toBeInTheDocument();
  userEvent.click(canvas.getByRole('button', { name: 'Quiz Back Button' }));
  await sleep(500);
  expect(await canvas.findByText('How much coffee do you generally drink?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: /More than one/ })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // question multi select
  await sleep(500);
  expect(await canvas.findByText('What are your preferred brewing methods?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  userEvent.click(canvas.getByRole('button', { name: /Chemex/ }));
  await sleep(100);
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  userEvent.click(canvas.getByRole('button', { name: /Espresso Machine/ }));
  await sleep(100);
  expect(canvas.getByRole('button', { name: /Chemex/ })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: /Espresso Machine/ })).toHaveClass('selected');
  userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // New Question
  await sleep(500);
  expect(await canvas.findByText('Did you know?')).toBeInTheDocument();
  userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // New Question
  await sleep(500);
  expect(
    await canvas.findByText('Do you have a preferred coffee growing region?')
  ).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  userEvent.click(canvas.getByRole('button', { name: /No, I'm open/ }));

  await sleep(500);
  expect(await canvas.findByText('Do you have preferred coffee notes?')).toBeInTheDocument();
  userEvent.click(canvas.getByRole('button', { name: /Chocolates/ }));
  await sleep(100);
  userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  await sleep(500);
  expect(await canvas.findByText('Lastly, do you have a roasting preference?')).toBeInTheDocument();
  userEvent.click(canvas.getByRole('button', { name: 'Medium' }));

  await sleep(500);
  expect(await canvas.findByText('Are you into latte-art?')).toBeInTheDocument();
  userEvent.click(canvas.getByRole('button', { name: /I have no idea/ }));

  await sleep(500);
  expect(await canvas.findByText('What brands would you prefer?')).toBeInTheDocument();
  userEvent.click(canvas.getByRole('button', { name: /Signature Select/ }));

  await sleep(500);
  expect(await canvas.findByText('What would be the ideal price for you?')).toBeInTheDocument();
  userEvent.click(canvas.getByRole('button', { name: /6.89/ }));
  await sleep(100);
  userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // Results page
  await sleep(500);
  // Results Config data is fetched correctly
  expect(await canvas.findByText('Here are your results!')).toBeInTheDocument();
  expect(
    await canvas.findByText('Based on your answers, these are our recommendations.')
  ).toBeInTheDocument();
  expect(await canvas.findByText('1 result')).toBeInTheDocument();
  expect(document.querySelector('.cio-results-explanation')).toBeInTheDocument();

  // Share modal test
  await userEvent.click(await canvas.findByText('Share Results'));
  expect(
    await canvas.findByText(
      'Share or save your quiz results through email or using the link below.'
    )
  ).toBeInTheDocument();

  // Add mock clipboard functions that don't require user permissions and replace the native clipboard
  const mockClipboard = {
    data: '',
    writeText(text) {
      this.data = text;
      return Promise.resolve();
    },
    readText() {
      return Promise.resolve(this.data);
    },
  };

  if (typeof global.navigator === 'undefined') {
    global.navigator = {} as any;
  }

  Object.defineProperty(window.navigator, 'clipboard', {
    value: mockClipboard,
    writable: true,
    configurable: true,
  });

  await userEvent.click(await canvas.findByText('Copy link'));
  expect(await canvas.findByText('Link copied to clipboard')).toBeInTheDocument();
  await userEvent.click(await canvas.findByLabelText('Close button'));

  // Reset button test
  await userEvent.click(await canvas.findByText('Retake Quiz'));
  expect(await canvas.findByText('Oh, hi there!')).toBeInTheDocument();
};
