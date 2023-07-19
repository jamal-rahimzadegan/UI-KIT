import { MouseEvent, PropsWithChildren, useEffect, useRef } from 'react';
import D from './style';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export default function Dialog(props: Props) {
  const { isOpen, onClose, children } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isClickInsideRectangle = (e: MouseEvent, element: HTMLElement) => {
    const r = element.getBoundingClientRect();
    return e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom;
  };

  const handleClick = (e: any) => {
    return dialogRef.current && !isClickInsideRectangle(e, dialogRef.current) && onClose();
  };

  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [isOpen]);

  return (
    <D.Container ref={dialogRef} onCancel={onClose} onClick={handleClick}>
      {children}
    </D.Container>
  );
}
