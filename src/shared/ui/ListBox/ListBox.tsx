import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import DropDownIcon from 'shared/assets/icons/dropdown.svg';
import { useTranslation } from 'react-i18next';
import cls from './ListBox.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { HStack } from '../Stack';
import { DropdownDirection } from '../../types/ui';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

export interface ListboxItem{
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListboxProps{
  items?: ListboxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value:string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?:string;
}

export function Listbox(props: ListboxProps) {
  const { t } = useTranslation();
  const {
    className, items, defaultValue = t('Choose from List'), value, onChange, readonly, direction = 'bottomRight', label,
  } = props;
  const optionClasses = [cls[direction]];
  return (
    <HStack role="listbox">
      {label && <span>{`${label}:`}</span>}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        {({ open }) => (
          <>
            <HListbox.Button as="div" className={cls.trigger}>
              <Button className={open ? cls.open : ''} theme={ButtonTheme.LISTBOX} disabled={readonly}>
                <HStack justify="between">
                  <Text className={cls.caption} text={value ? t(value) : t(defaultValue)} />
                  <Icon Svg={DropDownIcon} className={cls.icon} />
                </HStack>

              </Button>
            </HListbox.Button>
            <HListbox.Options className={classNames(cls.options, {}, optionClasses)}>
              {items?.map((item) => (
                <HListbox.Option
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  as={Fragment}
                >
                  {({ active, selected }) => (
                    <li
                      role="option"
                      aria-selected={selected}
                      className={classNames(
                        cls.item,
                        { [cls.active]: active, [cls.selected]: selected, [cls.disabled]: item.disabled },
                        [],
                      )}
                    >
                      {item.content}
                    </li>
                  )}
                </HListbox.Option>
              ))}
            </HListbox.Options>
          </>
        )}

      </HListbox>
    </HStack>

  );
}
