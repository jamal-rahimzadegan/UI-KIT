import { PropsWithChildren } from 'react';
import Sheet from './style';

type Props = PropsWithChildren<{
  isOpen: boolean;
  close: () => unknown;
  height?: string;
  className?: string;
}>;

export default function BottomSheet(props: Props) {
  const { children, close, ...restProps } = props;

  return (
    <Sheet.Backdrop onClick={close}>
      <Sheet.Container {...restProps}>{children}</Sheet.Container>
    </Sheet.Backdrop>
  );
}
