import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Volume } from 'entities/Book';
import { BookCard } from 'entities/Book/ui/BookCard/BookCard';
import { Text, TextTheme, TextWeight } from 'shared/ui/Text/Text';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './BooksList.module.scss';

interface BooksListProps {
  className?: string;
  volumes?: Volume[];
  isFetching: boolean;
  error?: SerializedError | FetchBaseQueryError;
  total?: number;
}

export const BooksList = memo((props : BooksListProps) => {
  const {
    className, volumes = [], isFetching, error, total = 0,
  } = props;
  const { t } = useTranslation();
  if (error) {
    return (
      <VStack align="center" className="content-wrapper">
        <Text theme={TextTheme.ERROR} title={t('Loading Books Error')} />
        <Text theme={TextTheme.ERROR} text={t('Make another request')} />
      </VStack>
    );
  }
  if (isFetching && !volumes.length) {
    return (
      <VStack gap="16" className="content-wrapper">
        <Skeleton width="100%" height={70} />
        <HStack max align="stretch" className={classNames(cls.BooksList, {}, [className])}>
          <Skeleton width="100%" height={430} border="4" />
          <Skeleton width="100%" height={430} border="4" />
          <Skeleton width="100%" height={430} border="4" />
          <Skeleton width="100%" height={430} border="4" />
          <Skeleton width="100%" height={430} border="4" />
        </HStack>
      </VStack>
    );
  }
  if (!volumes.length) {
    return (
      <HStack className="content-wrapper" max justify="center" align="center">
        <Text title={t('Please fill the form')} />
      </HStack>
    );
  }
  return (
    <VStack gap="16" className="content-wrapper">
      <HStack justify="center" align="center" max className={cls.amount}>
        <Text weight={TextWeight.SEMIBOLD} text={`${t('Total found')} ${String(total)} ${t('results')}`} />
      </HStack>
      <HStack align="stretch" className={classNames(cls.BooksList, {}, [className])}>
        {volumes.map((volume) => (
          <BookCard key={volume.id} volume={volume} />
        ))}
        {isFetching
        && (
        <>
          <Skeleton width="100%" height={430} border="4" />
          <Skeleton width="100%" height={430} border="4" />
          <Skeleton width="100%" height={430} border="4" />
          <Skeleton width="100%" height={430} border="4" />
          <Skeleton width="100%" height={430} border="4" />
        </>
        )}
      </HStack>

    </VStack>
  );
});
