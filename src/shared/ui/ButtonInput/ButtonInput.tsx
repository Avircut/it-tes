import { classNames } from 'shared/lib/classNames/classNames';
import { ForwardedRef, ReactNode, memo } from 'react';
import searchIcon from 'shared/assets/icons/search.svg';
import { HStack } from '../Stack';
import { Input, InputProps } from '../Input/Input';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import cls from './ButtonInput.module.scss';

export interface ButtonInputProps extends InputProps {
  onClick?: () => void;
}

export const ButtonInput = memo((props : ButtonInputProps) => {
  const {
    className, onClick, ...otherProps
  } = props;
  return (
    <HStack align="center" className={classNames(cls.ButtonInput, {}, [className])}>
      <Input {...otherProps} className={cls.input} />
      <Button className={cls.btn} onClick={() => onClick?.()} theme={ButtonTheme.CLEAR}><Icon Svg={searchIcon} /></Button>
    </HStack>
  );
});
