import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Listbox, ListboxItem } from 'shared/ui/ListBox/ListBox';
import { ButtonInput } from 'shared/ui/ButtonInput/ButtonInput';
import { Categories, Sorts } from 'entities/Book';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';

import {
  BooksPageActions,
} from '../../model/slices/BooksPageSlice';
import {
  getCategory,
  getSort,
  getInputValue,
} from '../../model/selectors/findBookForm';
import cls from './FindBookForm.module.scss';

interface FindBookFormProps {
  className?: string;
}

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
  const category = useAppSelector(getCategory);
  const sort = useAppSelector(getSort);
  const inputValue = useAppSelector(getInputValue);
  const onChangeCategory = useCallback(
    (value: string) => {
      dispatch(BooksPageActions.setCategory(value as Categories));
      dispatch(BooksPageActions.setQuery(inputValue));
    },
    [dispatch, inputValue],
  );
  const onChangeSort = useCallback(
    (value: string) => {
      dispatch(BooksPageActions.setSort(value as Sorts));
      dispatch(BooksPageActions.setQuery(inputValue));
    },
    [dispatch, inputValue],
  );
  const onChangeInput = useCallback(
    (value: string) => {
      dispatch(BooksPageActions.setInputValue(value));
    },
    [dispatch],
  );
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        dispatch(BooksPageActions.setQuery(inputValue));
      }
    },
    [dispatch, inputValue],
  );
  const onSearchClick = useCallback(() => {
    dispatch(BooksPageActions.setQuery(inputValue));
  }, [dispatch, inputValue]);
  return (
    <VStack
      role="form"
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
          role="search"
          placeholder={t('Input Placeholder')}
          onClick={onSearchClick}
          onKeyDown={onKeyDown}
          onChange={onChangeInput}
          value={inputValue}
        />
        <HStack gap="16" className={cls.listboxes}>
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
  );
});
