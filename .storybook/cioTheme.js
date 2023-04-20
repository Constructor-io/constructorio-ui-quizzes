import { create } from '@storybook/theming/create';
import { getPreferredColorScheme } from '../src/utils'

export default create({
  brandTitle: 'Constructor.io',
  brandUrl: 'https://github.com/Constructor-io/constructorio-ui-quizzes',
  brandImage:  getPreferredColorScheme() === 'light' ? 'https://docs.constructor.io/img/logo-dark.svg' : 'https://docs.constructor.io/img/logo-light.svg',
  brandTarget: '_blank',
});
