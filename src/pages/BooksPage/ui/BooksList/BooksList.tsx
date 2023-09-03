import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Volume } from 'entities/Book';
import { BookCard } from 'entities/Book/ui/BookCard/BookCard';
import { PageLoader } from 'widgets/PageLoader';
import cls from './BooksList.module.scss';

interface BooksListProps {
  className?: string;
  volumes?: Volume[];
  isLoading: boolean;
  error?: string;
}

export const BooksList = memo((props : BooksListProps) => {
  const {
    className, volumes = [], isLoading, error,
  } = props;
  const { t } = useTranslation();
  if (isLoading) {
    return (
      <PageLoader />
    );
  }
  return (
    <HStack className={classNames(cls.BooksList, {}, [className])}>
      {volumes.map((volume) => (
        <BookCard key={volume.id} volume={volume} />
      ))}
    </HStack>
  );
});
