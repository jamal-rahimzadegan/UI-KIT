import React, { ReactNode, useEffect } from "react";
import KEY_CODE from "./constants";
import D from "./style";

//  TODO: put it inside the index.html using React-Portal.
// TODO: move focus to dialog
// NOTE: you may want to use <dialog/> tag, but consider the browser support.

interface Props {
  isOpen: boolean;
  close: Function;
  cb?: Function;
  parentClass?: string;
  className?: string;
  children: ReactNode;
  title: string;
  desc: string;
}

export default function Dialog(props: Props): JSX.Element {
  const {
    isOpen,
    close,
    cb,
    children,
    className = "",
    parentClass,
    title,
    desc,
  } = props;

  const closeDialog = () => {
    close(false);
    cb?.();
  };

  const closeWithEscape = (e: KeyboardEvent) => {
    // KEY_CODE.ESC = "Escape"
    return e.code === KEY_CODE.ESC && close(false);
  };

  useEffect(() => {
    isOpen && document.addEventListener("keydown", closeWithEscape, false);
    return () => {
      !isOpen &&
        document.removeEventListener("keydown", closeWithEscape, false);
    };
  }, [isOpen]);

  return (
    <D.BackDrop
      role="dialog"
      open={isOpen}
      className={parentClass}
      onClick={closeDialog}
      aria-labelledby={title}
      aria-describedby={desc}
    >
      <D.ModalContainer className={parentClass}>
        <D.ModalBody
          className={className}
          onClick={(e: Event) => e.stopPropagation()}
        >
          <h2>{title}</h2>
          {children}
        </D.ModalBody>
      </D.ModalContainer>
    </D.BackDrop>
  );
}
