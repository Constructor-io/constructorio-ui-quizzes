import { create } from '@storybook/theming/create';
import { getPreferredColorScheme } from '../src/utils'

export default create({
  brandTitle: 'Constructor',
  brandUrl: 'https://github.com/Constructor-io/constructorio-ui-quizzes',
  brandImage:  getPreferredColorScheme() === 'light' ? 'https://constructor.com/hubfs/Website%20-%202024/Logos/Logo-black.svg' : 'https://constructor.com/hubfs/Website%20-%202024/Logos/Logo-white.svg',
  brandTarget: '_blank',
});
