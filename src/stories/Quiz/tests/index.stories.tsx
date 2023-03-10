/* eslint-disable import/no-extraneous-dependencies */
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes } from '../argTypes';
import { stringify } from '../../../utils';
import { ComponentTemplate, addComponentStoryDescription } from '../Component';
import { basicDescription, apiKey, quizId } from '../../../constants';

export default {
  title: 'Quiz/Interaction Tests',
  component: CioQuiz,
  argTypes,
  parameters: {
    docs: {
      page: null,
    },
  },
};

export const e2eInteractionTest = ComponentTemplate.bind({});
e2eInteractionTest.args = { apiKey, quizId };
addComponentStoryDescription(
  e2eInteractionTest,
  `const args = ${stringify(e2eInteractionTest.args)}`,
  basicDescription
);

e2eInteractionTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // First open question
  expect(await canvas.findByRole('button')).toHaveClass('disabled');
  await userEvent.type(canvas.getByRole('textbox'), 'Bobby', { delay: 100 });
  expect(canvas.getByRole('button')).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button'));

  // Second cover question
  expect(await canvas.findByText(/Nice to meet you/)).toBeInTheDocument();
  expect(await canvas.findByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // Third question single select
  expect(await canvas.findByText('How much coffee do you generally drink?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: /More than one/ }));
  expect(canvas.getByRole('button', { name: /More than one/ })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: /All day long/ }));
  expect(canvas.getByRole('button', { name: /All day long/ })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: /More than one/ })).not.toHaveClass('selected');
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // Single Select back button test
  expect(await canvas.findByText('What are your preferred brewing methods?')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'Back' }));
  expect(await canvas.findByText('How much coffee do you generally drink?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: /All day long/ })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // Fourth question multi select
  expect(await canvas.findByText('What are your preferred brewing methods?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: /Chemex/ }));
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: /Espresso Machine/ }));
  expect(canvas.getByRole('button', { name: /Chemex/ })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: /Espresso Machine/ })).toHaveClass('selected');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // Multi Select back button test
  expect(await canvas.findByText('Did you know?')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'Back' }));
  expect(await canvas.findByText('What are your preferred brewing methods?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: /Espresso Machine/ })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: /Chemex/ })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('Did you know?')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(
    await canvas.findByText('Do you have a preferred coffee growing region?')
  ).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: /No, I'm open/ }));
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('Do you have preferred coffee notes?')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'Chocolates' }));
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('Lastly, do you have a roasting preference?')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'Medium' }));
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('Are you into latte-art?')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'I have no idea' }));
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('Especially Curated For You!'));

  // Reset button test
  await userEvent.click(await canvas.findByRole('button', { name: 'Reset' }));
  expect(await canvas.findByText('Oh, hi there!')).toBeInTheDocument();
};