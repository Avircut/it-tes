import { Categories } from 'entities/Book';
import { buildQuery } from './buildQuery';
import { destroyQuery } from './destroyQuery';

describe('bookQuery.test', () => {
  test('buildQuery noCategory', () => {
    const query = buildQuery('Test query');
    expect(query).toEqual('Test query');
  });
  test('buildQuery category all', () => {
    const query = buildQuery('Test query', Categories.ALL);
    expect(query).toEqual('Test query');
  });
  test('buildQuery empty query category all', () => {
    const query = buildQuery('', Categories.ALL);
    expect(query).toEqual('');
  });
  test('buildQuery empty query specified category', () => {
    const query = buildQuery('', Categories.ART);
    expect(query).toEqual('+subject:art');
  });
  test('buildQuery correct query specified category', () => {
    const query = buildQuery('Test query', Categories.ART);
    expect(query).toEqual('Test query+subject:art');
  });

  test('destroyQuery empty', () => {
    const query = destroyQuery('');
    expect(query).toEqual({ inputValue: '', category: Categories.ALL });
  });
  test('destroyQuery only query', () => {
    const query = destroyQuery('test');
    expect(query).toEqual({ inputValue: 'test', category: Categories.ALL });
  });
  test('destroyQuery only category', () => {
    const query = destroyQuery('+subject:art');
    expect(query).toEqual({ inputValue: '', category: Categories.ART });
  });
  test('destroyQuery category and query', () => {
    const query = destroyQuery('test+subject:art');
    expect(query).toEqual({ inputValue: 'test', category: Categories.ART });
  });
});
