import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Listbox } from 'shared/ui/ListBox/ListBox';
import cls from './FindBookForm.module.scss';

interface FindBookFormProps {
  className?: string;
  query?: string;
  onChange: () => void;
}

export const FindBookForm = memo((props: FindBookFormProps) => {
  const { className, query, onChange } = props;

  const { t } = useTranslation();
  return (
    <VStack className={classNames(cls.FindBookForm, {}, [className])}>
      <Text title={t('Find a book')} />
      <Input value={query} onChange={onChange} />
      <HStack gap="16">
        <Listbox label={t('Category')} onChange={onChange} />
        <Listbox label={t('Sort by')} onChange={onChange} />
      </HStack>
    </VStack>
  );
});
