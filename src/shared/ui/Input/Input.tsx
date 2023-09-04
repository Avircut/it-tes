import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly = false,
    ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);
  const mods: Mods = {
    [cls.readonly]: readonly,
  };
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChangeHandler}
      className={classNames(cls.input, mods, [className])}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={inputRef}
      value={value}
      readOnly={readonly}
      {...otherProps}
    />
  );
});
