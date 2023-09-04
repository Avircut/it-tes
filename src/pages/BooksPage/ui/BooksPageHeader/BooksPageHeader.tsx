import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { HStack, VStack } from 'shared/ui/Stack';
import bg from 'shared/assets/content/form-bg.jpg';
import cls from './BooksPageHeader.module.scss';
import { FindBookForm } from '../FindBookForm/FindBookForm';

interface BooksPageHeaderProps {
  className?: string;
}

export const BooksPageHeader = memo((props : BooksPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.BooksPageHeader, {}, [className])} style={{ backgroundImage: `url(${bg})` }}>
      <HStack className="content-wrapper" align="stretch">
        <VStack max className={cls.formWrapper} align="center" justify="center">
          <LangSwitcher className={cls.langSwitcher} />
          <FindBookForm className={cls.form} />
        </VStack>
      </HStack>
    </div>
  );
});
