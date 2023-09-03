import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useFetchBooksList } from 'entities/Book';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getCategory, getQuery, getSort } from 'features/findBookForm/model/selectors/findBookForm';
import { buildQuery } from 'shared/lib/buildQuery/buildQuery';
import cls from './BooksPage.module.scss';
import { BooksPageHeader } from '../BooksPageHeader/BooksPageHeader';
import { BooksList } from '../BooksList/BooksList';

interface BooksPageProps {
    className?: string;
}

export const BooksPage = memo((props: BooksPageProps) => {
  const { className } = props;
  const query = useAppSelector(getQuery);
  const sort = useAppSelector(getSort);
  const category = useAppSelector(getCategory);
  const {
    data: volumes, isLoading, error,
  } = useFetchBooksList({ query: buildQuery(query, category), sort }, {
    refetchOnMountOrArgChange: true,
  });
  return (
    <div className={classNames(cls.BooksPage, {}, [className])}>
      <BooksPageHeader />
      <BooksList volumes={volumes} isLoading={isLoading} />
    </div>
  );
});
