import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Categories, useFetchBooksList } from 'entities/Book';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { buildQuery } from 'shared/lib/buildQuery/buildQuery';
import { VStack } from 'shared/ui/Stack';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LoadMore } from 'shared/ui/LoadMore/LoadMore';
import { BooksPageActions } from '../../model/slices/BooksPageSlice';
import cls from './BooksPage.module.scss';
import { BooksPageHeader } from '../BooksPageHeader/BooksPageHeader';
import { BooksList } from '../BooksList/BooksList';
import {
  getQuery, getSort, getCategory, getStartIndex, getMaxResults,
} from '../../model/selectors/findBookForm';

interface BooksPageProps {
    className?: string;
}

export const BooksPage = memo((props: BooksPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const query = useAppSelector(getQuery);
  const sort = useAppSelector(getSort);
  const category = useAppSelector(getCategory);
  const startIndex = useAppSelector(getStartIndex);
  const maxResults = useAppSelector(getMaxResults);
  const isSkipped = !query && category === Categories.ALL;
  const {
    data: response, isFetching, error,
  } = useFetchBooksList({
    query: buildQuery(query, category), sort, startIndex, maxResults,
  }, {
    refetchOnMountOrArgChange: true,
    skip: isSkipped,
  });
  const volumes = response?.items;
  const total = response?.totalItems;
  const isNotLastPage = total && startIndex < total;
  const onLoadMore = useCallback(() => {
    dispatch(BooksPageActions.IncrementPage());
  }, [dispatch]);
  return ( // TODO: add query params support and correct pagination work (reload cache when filter/sort changed)
    <VStack gap="16" align="stretch" className={classNames(cls.BooksPage, {}, [className])}>
      <BooksPageHeader />
      <VStack gap="16" className="content-wrapper">
        <BooksList volumes={volumes} total={total} isFetching={isFetching} error={error} />
        {isNotLastPage && <LoadMore onClick={onLoadMore} />}
      </VStack>

    </VStack>

  );
});
