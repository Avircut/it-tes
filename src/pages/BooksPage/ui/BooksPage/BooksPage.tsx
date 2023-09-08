import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Categories, useFetchBooksList } from 'entities/Book';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { buildQuery } from 'shared/lib/bookQuery/buildQuery';
import { VStack } from 'shared/ui/Stack';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LoadMore } from 'shared/ui/LoadMore/LoadMore';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { initBooksPage } from '../../model/services/initBooksPage';
import { BooksPageActions, BooksPageReducer } from '../../model/slices/BooksPageSlice';
import cls from './BooksPage.module.scss';
import { BooksPageHeader } from '../BooksPageHeader/BooksPageHeader';
import { BooksList } from '../BooksList/BooksList';
import {
  getQuery, getSort, getCategory, getStartIndex, getMaxResults,
} from '../../model/selectors/findBookForm';

export interface BooksPageProps {
    className?: string;
}
const reducers: ReducersList = {
  booksPage: BooksPageReducer,
};
const BooksPage = memo((props: BooksPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
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
  // Volumes are not unique between pages (the same Volume could be on 1st and 2nd pages)
  const volumes = response?.items || [];
  const total = response?.totalItems;
  // Doesn't work coz of not correct total items value gaven by Google Books API (every page request changes total books amount)
  const isNotLastPage = Boolean(total && startIndex + maxResults < total);
  const onLoadMore = useCallback(() => {
    dispatch(BooksPageActions.IncrementPage());
  }, [dispatch]);
  useInitialEffect(() => {
    dispatch(initBooksPage(searchParams));
  });
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <VStack role="main" gap="16" align="stretch" className={classNames(cls.BooksPage, {}, [className])}>
        <BooksPageHeader />
        <VStack gap="16" className="content-wrapper">
          <BooksList volumes={volumes} total={total} isFetching={isFetching} error={error} />
          {isNotLastPage && <LoadMore onClick={onLoadMore} />}
        </VStack>
      </VStack>
    </DynamicModuleLoader>
  );
});

export default BooksPage;
