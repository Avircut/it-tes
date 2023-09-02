import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Volume } from 'entities/Book';
import { BookCard } from 'entities/Book/ui/BookCard/BookCard';
import cls from './BooksList.module.scss';

interface BooksListProps {
  className?: string;
  volumes?: Volume[]
}

export const BooksList = memo((props : BooksListProps) => {
  const { className, volumes = [] } = props;
  const { t } = useTranslation();
  return (
    <HStack className={classNames(cls.BooksList, {}, [className])}>
      {volumes.map((volume) => (
        <BookCard volume={volume} />
      ))}
    </HStack>
  );
});
