import { Categories } from 'entities/Book';

export function destroyQuery(query:string) {
  if (query.indexOf('+') !== -1) {
    const search = query.split('+')[0];
    const category = query.split(':')[1];
    return { inputValue: search, category };
  }
  return { inputValue: query, category: Categories.ALL };
}
