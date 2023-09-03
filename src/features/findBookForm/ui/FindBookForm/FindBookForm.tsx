import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Listbox, ListboxItem } from 'shared/ui/ListBox/ListBox';
import { ButtonInput } from 'shared/ui/ButtonInput/ButtonInput';
import { Categories, Sorts } from 'entities/Book';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import {
  getCategory,
  getQuery,
  getSort,
} from '../../model/selectors/findBookForm';
import {
  findBookFormActions,
  findBookFormReducer,
} from '../../model/slices/findBookFormSlice';
import cls from './FindBookForm.module.scss';

interface FindBookFormProps {
  className?: string;
}
const reducers: ReducersList = {
  bookForm: findBookFormReducer,
};
export const FindBookForm = memo((props: FindBookFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const categories = Object.values(Categories).map<ListboxItem>((category) => ({
    value: category,
    content: t(category),
  }));
  const sorts = Object.values(Sorts).map<ListboxItem>((sort) => ({
    value: sort,
    content: t(sort),
  }));
  const dispatch = useAppDispatch();
  const query = useAppSelector(getQuery);
  const category = useAppSelector(getCategory);
  const sort = useAppSelector(getSort);
  const onChangeCategory = useCallback(
    (value: string) => {
      dispatch(findBookFormActions.setCategory(value as Categories));
    },
    [dispatch],
  );
  const onChangeSort = useCallback(
    (value: string) => {
      dispatch(findBookFormActions.setSort(value as Sorts));
    },
    [dispatch],
  );
  const onChangeQuery = useCallback(
    (value: string) => {
      dispatch(findBookFormActions.setQuery(value));
    },
    [dispatch],
  );
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <VStack
        gap="32"
        max
        align="stretch"
        className={classNames(cls.FindBookForm, {}, [className])}
      >
        <Text
          size={TextSize.L}
          theme={TextTheme.INVERTED}
          title={t('Find a book')}
          className={cls.title}
        />
        <VStack gap="8" align="stretch" className={cls.formWrapper}>
          <ButtonInput
            value={query}
            placeholder={t('Input Placeholder')}
            onChange={onChangeQuery}
          />
          <HStack gap="16">
            <Listbox
              value={category}
              defaultValue={Categories.ALL}
              items={categories}
              label={t('Category')}
              onChange={onChangeCategory}
            />
            <Listbox
              value={sort}
              defaultValue={Sorts.RELEVANCE}
              items={sorts}
              label={t('Sort by')}
              onChange={onChangeSort}
            />
          </HStack>
        </VStack>
      </VStack>
    </DynamicModuleLoader>
  );
});
