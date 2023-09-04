import { Categories, Sorts } from 'entities/Book';

export interface BooksPageSchema {
  query?:string;
  category?: Categories;
  sort?: Sorts;
  inputValue?: string;
  startIndex: number;
  maxResults: number;
}
