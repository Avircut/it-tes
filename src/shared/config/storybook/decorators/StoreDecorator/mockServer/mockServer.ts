import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockData } from './mockData';

export const handlers = [
  rest.get(__API__, (_req, res, ctx) => {
    return res(ctx.json(mockData));
  }),
];

export const server = setupServer(...handlers);
