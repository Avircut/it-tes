import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';
import RuFlag from 'shared/assets/icons/ru.png';
import EnFlag from 'shared/assets/icons/en.png';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  const langFlag = i18n.language === 'ru' ? RuFlag : EnFlag;
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      <img src={langFlag} alt={t('Language')} />
      {t('Language')}
    </Button>
  );
});
