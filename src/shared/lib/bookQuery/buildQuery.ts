import { Categories } from 'entities/Book';

export function buildQuery(query:string, category?:Categories) {
  if (category && category !== Categories.ALL) {
    return `${query}+subject:${category}`;
  }
  return query;
}
