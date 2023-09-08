import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { server } from 'shared/config/jest/setupTests';
import { rest } from 'msw';
import BooksPage from './BooksPage';

describe('BooksPage.test', () => {
  test('Fetch data', () => {
    componentRender(<BooksPage />);
    screen.findAllByTestId('BookCard').then((cards) => {
      expect(cards.length).toBe(30);
    });
  });
  test('Fetch with error', () => {
    server.use(
      rest.get(`${__API__}/volumes/`, (_req, res, ctx) => {
        _req.url.searchParams.set('query', 'Test');
        return res(ctx.status(403), ctx.json('Access Denied'));
      }),
    );
    componentRender(<BooksPage />);
    screen.findByTestId('LoadingError').then((error) => {
      expect(error).toBeInTheDocument();
    });
  });
});
