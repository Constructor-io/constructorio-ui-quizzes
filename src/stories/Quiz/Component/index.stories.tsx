import { within, userEvent, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes } from '../argTypes';
import { stringify } from '../../../utils';
import { ComponentTemplate, addComponentStoryDescription } from '.';
import { basicDescription, componentDescription, apiKey, quizId } from '../../../constants';

export default {
  title: 'Quiz',
  component: CioQuiz,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: componentDescription
      }
    }
  }
};

export const Default = ComponentTemplate.bind({});
Default.args = { apiKey, quizId };
addComponentStoryDescription(Default, `const args = ${stringify(Default.args)}`, basicDescription);

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const continueButton = await canvas.findByRole('button');
  // First open question
  expect(await canvas.findByRole('button')).toHaveClass('disabled');
  await userEvent.type(canvas.getByRole('textbox'), 'Bobby', { delay: 100 });
  expect(canvas.getByRole('button')).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button'));

  // Second cover question
  expect(await canvas.findByText('Nice to meet you!')).toBeInTheDocument();
  expect(await canvas.findByRole('button')).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button'));

  // Third question single select
  expect(await canvas.findByText('What is your favorite color')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Red' }));
  expect(canvas.getByRole('button', { name: 'Red' })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Blue' }));
  expect(canvas.getByRole('button', { name: 'Blue' })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: 'Red' })).not.toHaveClass('selected');
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // Fourth question multi select
  expect(await canvas.findByText('How much coffee do you generally drink?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: /A cup during/ }));
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('What are your preferred brewing methods?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: /Pour Over/ }));
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('Did You Know?')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(
    await canvas.findByText('Do you have a preferred coffee growing region?')
  ).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: 'Continue' })).toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: /No, I'm open/ }));
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('Especially Curated For You!'));
};
