import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
  'data-testid'?: string;
}

export const AppLink = memo((props:AppLinkProps) => {
  const {
    to, children, className, theme = AppLinkTheme.PRIMARY, 'data-testid': dataTestId = 'Link', ...otherProps
  } = props;
  return (
    <Link data-testid={dataTestId} to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
});
