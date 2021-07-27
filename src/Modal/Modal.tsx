import React, { ReactNode, useEffect } from 'react';
import { lockBodyScroll } from 'utils';
import { ModalBody, BackDrop, ModalContainer } from './ModalStyle';

interface ModalProps {
  isOpen: boolean;
  close?: Function;
  doOnClose?: Function;
  parentClass?: string;
  className?: string;
  children: ReactNode;
}

export default function Modal(props: ModalProps): JSX.Element {
  const { isOpen, close, doOnClose, children, className = '', parentClass } = props;

  const closeModal = () => {
    doOnClose && doOnClose();
    close && close(false);
  };

  useEffect(() => lockBodyScroll(isOpen), [isOpen]);

  return (
    <BackDrop className={parentClass} isOpen={isOpen} onClick={closeModal}>
      <ModalContainer className={parentClass ?? 'center-items'}>
        <ModalBody className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalBody>
      </ModalContainer>
    </BackDrop>
  );
}
