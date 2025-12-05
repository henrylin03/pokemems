import React, { useLayoutEffect, useRef } from "react";
import styles from "./Modal.module.css";

interface Props {
  shouldShow: boolean;
  className?: string;
  children: React.ReactNode;
}

const Modal = ({ shouldShow, className = "", children }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    if (ref.current?.open && !shouldShow) ref.current.close();
    else if (!ref.current?.open && shouldShow) ref.current?.showModal();
  }, [shouldShow]);

  return (
    <dialog
      ref={ref}
      className={className ? `${className} ${styles.modal}` : styles.modal}
    >
      {children}
    </dialog>
  );
};

export default Modal;
