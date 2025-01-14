import React from 'react';
import { render } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  const { getByTestId } = render(<Home />);
  const header = getByTestId('header');
  expect(header.textContent).toBe('Welcome!');
});
