import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './BooksDetailPage.module.scss';

interface BooksDetailPageProps {
    className?: string;
}

export const BooksDetailPage = memo((props: BooksDetailPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.BooksDetailPage, {}, [className])} />
  );
});
