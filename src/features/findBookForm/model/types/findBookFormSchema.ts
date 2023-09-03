import { Categories, Sorts } from 'entities/Book';

export interface FindBookFormSchema {
  query?:string;
  category?: Categories;
  sort?: Sorts;
}
