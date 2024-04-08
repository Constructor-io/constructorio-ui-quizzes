import React from 'react';
import { render, screen } from '@testing-library/react';

import ResultHeroCard from '../../../src/components/ResultHeroCard/ResultHeroCard';
import * as factories from '../../__tests__/factories';

describe(`${ResultHeroCard.name} client`, () => {
  const props: React.ComponentProps<typeof ResultHeroCard> = {
    heroItem: factories.browseResult.build(),
  };

  it('renders hero card', () => {
    render(<ResultHeroCard {...props} />);
    expect(screen.getByText('Especially Curated For You!')).toBeInTheDocument();
  });
});
