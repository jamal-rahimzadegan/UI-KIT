import { ReactNode } from 'react';
import { StyledCol } from './ColStyle';

type SizeType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props {
  xs?: SizeType; // <576px
  sm?: SizeType; // ≥576px
  md?: SizeType; // ≥768px
  lg?: SizeType; // ≥992px
  xl?: SizeType; // ≥1200px
  xxl?: SizeType; // ≥1400px
  children: ReactNode;
}

export default function Col(props: Props) {
  const { children } = props;
  return <StyledCol {...props}>{children}</StyledCol>;
}
