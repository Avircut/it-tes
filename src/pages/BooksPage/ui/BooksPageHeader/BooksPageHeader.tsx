import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { FindBookForm } from 'features/findBookForm';
import cls from './BooksPageHeader.module.scss';

interface BooksPageHeaderProps {
  className?: string;
  query?: string;
  onChange: () => void;
}

export const BooksPageHeader = memo((props : BooksPageHeaderProps) => {
  const { className, query, onChange } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.BooksPageHeader, {}, [className])}>
      <LangSwitcher className={cls.langSwitcher} />
      <FindBookForm onChange={onChange} query={query} />
    </div>
  );
});
