/* eslint-disable import/no-extraneous-dependencies, no-console */

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes } from '../argTypes';
import { isTrackingRequestSent, stringifyWithDefaults } from '../../../utils';
import { ComponentTemplate, addComponentStoryDescription } from '../Component';
import { basicDescription, apiKey, quizId } from '../../../constants';

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
  },
};

const resultsPageOptions = {
  onQuizResultClick: (result, position) => {
    console.log('Click result');
    console.dir(result, position);
  },
  onQuizResultsLoaded: (results) => {
    console.log('Loaded results');
    console.dir(results);
  },
  onAddToCartClick: (item) => {
    console.log('Add to cart');
    console.dir(item);
  },
  resultCardRegularPriceKey: 'price',
  resultCardSalePriceKey: 'salePrice',
};

export const e2eInteractionTest = ComponentTemplate.bind({});
e2eInteractionTest.args = { apiKey, quizId, resultsPageOptions };
addComponentStoryDescription(
  e2eInteractionTest,
  `const args = ${stringifyWithDefaults(e2eInteractionTest.args)}`,
  basicDescription
);

e2eInteractionTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // First open text question
  expect(await canvas.findByRole('button')).toHaveClass('disabled');
  await userEvent.type(canvas.getByRole('textbox'), 'Bobby', { delay: 100 });
  expect(canvas.getByRole('button')).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button'));

  // Second open text question
  expect(await canvas.findByText(/This is another open text question/)).toBeInTheDocument();
  await userEvent.type(canvas.getByRole('textbox'), 'Bobby', { delay: 100 });
  expect(await canvas.findByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // first cover question
  expect(await canvas.findByText(/Nice to meet you/)).toBeInTheDocument();
  expect(await canvas.findByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // second cover question
  expect(await canvas.findByText(/This is another cover/)).toBeInTheDocument();
  expect(await canvas.findByRole('button', { name: 'Go' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Go' }));

  // question single select
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
  await userEvent.click(canvas.getByRole('button', { name: '' }));
  expect(await canvas.findByText('How much coffee do you generally drink?')).toBeInTheDocument();
  expect(canvas.getByRole('button', { name: /All day long/ })).toHaveClass('selected');
  expect(canvas.getByRole('button', { name: 'Continue' })).not.toHaveClass('disabled');
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // question multi select
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
  await userEvent.click(canvas.getByRole('button', { name: '' }));
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
  await userEvent.click(canvas.getByRole('button', { name: /Chocolates/ }));
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('Lastly, do you have a roasting preference?')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: 'Medium' }));
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  expect(await canvas.findByText('Are you into latte-art?')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', { name: /I have no idea/ }));
  await userEvent.click(canvas.getByRole('button', { name: 'Continue' }));

  // Results page
  expect(await canvas.findByText('Here are your results')).toBeInTheDocument();
  expect(await canvas.findByText('Because you answered')).toBeInTheDocument();
  expect(document.querySelectorAll('.cio-results-filter-option')?.length).toBeGreaterThan(0);
  const isQuizResultsTrackingRequestSent = isTrackingRequestSent('/quiz_result_load');
  expect(isQuizResultsTrackingRequestSent).toBeTruthy();

  // Result Card
  const resultCard = document.querySelector('.cio-result-card');
  const addToCardButton = document.querySelector('.cio-result-card-cta-button');
  await userEvent.click(resultCard);
  const isResultClickTrackingRequestSent = isTrackingRequestSent('/quiz_result_click');
  expect(isResultClickTrackingRequestSent).toBeTruthy();
  await userEvent.click(addToCardButton);
  const isAddToCartTrackingRequestSent = isTrackingRequestSent('/quiz_conversion');
  expect(isAddToCartTrackingRequestSent).toBeTruthy();

  // Reset button test
  await userEvent.click(await canvas.findByText('Redo Quiz'));
  expect(await canvas.findByText('Oh, hi there!')).toBeInTheDocument();
};
