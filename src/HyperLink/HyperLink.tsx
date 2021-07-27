import React from 'react';
import Link from 'next/link';
import { A } from './HyperLinkStyle';
import { LIGHT_THEME } from 'assets/style/theme';

type HyperLinkType = {
  hasLink?: boolean;
  href: object | string;
  as?: string;
  onClick?: Function;
  children: React.ReactNode;
  className?: string;
  color?: string;
  hasParam?: boolean;
  shallow?: boolean;
  style?: object;
  target?: '_blank' | '_parent' | '_self' | '_top';
  bgColor?: keyof typeof LIGHT_THEME;
};

export default function HyperLink(props: HyperLinkType): any {
  const {
    target = '_self',
    hasLink = true,
    href,
    as,
    onClick,
    children,
    className,
    color,
    hasParam = false,
    ...restProps
  } = props;

  return hasLink ? (
    <Link passHref href={href || ''} as={as || href || ''} {...restProps}>
      <A rel="noopener noreferrer" target={target} color={color} className={className} onClick={onClick} {...restProps}>
        {children}
      </A>
    </Link>
  ) : (
    children
  );
}
