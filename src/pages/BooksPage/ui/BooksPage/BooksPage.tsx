import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useFetchBooksList } from 'entities/Book';
import cls from './BooksPage.module.scss';
import { BooksPageHeader } from '../BooksPageHeader/BooksPageHeader';

interface BooksPageProps {
    className?: string;
}

export const BooksPage = memo((props: BooksPageProps) => {
  const { className } = props; // TODO: add reducer for form
  const {
    data: volumes, isLoading, error, refetch,
  } = useFetchBooksList({ query: '' });
  return (
    <div className={classNames(cls.BooksPage, {}, [className])}>
      <BooksPageHeader onChange={refetch} />
    </div>
  );
});
