import { FC, lazy } from 'react';
import { BooksPageProps } from './BooksPage';

export const BooksPageAsync = lazy<FC<BooksPageProps>>(() => import('./BooksPage'));
