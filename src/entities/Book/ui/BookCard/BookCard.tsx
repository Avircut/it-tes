import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import defaultThumb from 'shared/assets/content/default.jpg';
import { Volume } from '../../model/types/BookSchema';
import cls from './BookCard.module.scss';

interface BookCardProps {
    className?: string;
    volume?: Volume;
}

export const BookCard = memo((props: BookCardProps) => {
  const { className, volume } = props;
  const book = volume?.volumeInfo;
  return (
    <VStack gap="8" className={classNames(cls.BookCard, {}, [className])}>
      <img className={cls.image} src={book?.imageLinks.smallThumbnail ?? defaultThumb} alt={book?.title} />
      <Text className={cls.category} text={book?.categories[0]} />
      <Text className={cls.title} title={book?.title} />
      <Text className={cls.author} text={book?.authors?.join(', ')} />
    </VStack>
  );
});
