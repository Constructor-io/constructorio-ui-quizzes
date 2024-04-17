import React from 'react';
import { renderToString } from 'react-dom/server';

import ResultHeroCard from '../../../src/components/ResultHeroCard/ResultHeroCard';
import * as factories from '../../__tests__/factories';

describe(`${ResultHeroCard.name} client`, () => {
  const props: React.ComponentProps<typeof ResultHeroCard> = {
    heroItem: factories.browseResult.build(),
  };

  it('renders hero card', () => {
    const view = renderToString(<ResultHeroCard {...props} />);
    expect(view).toContain('Especially Curated For You!');
  });
});
