import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import cls from './LoadMore.module.scss';

interface LoadMoreProps {
  className?: string;
  onClick?: () => void;
}

export const LoadMore = memo((props : LoadMoreProps) => {
  const { className, onClick } = props;
  const { t } = useTranslation();
  return (
    <div onClick={onClick} className={classNames(cls.LoadMore, {}, [className])}>
      {t('Load more')}
    </div>
  );
});
