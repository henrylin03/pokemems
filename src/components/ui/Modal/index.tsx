import { useLayoutEffect, useRef } from "react";
import styles from "./Modal.module.css";

interface Props {
  shouldShow: boolean;
}

const Modal = ({ shouldShow }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    if (ref.current?.open && !shouldShow) ref.current.close();
    else if (!ref.current?.open && shouldShow) ref.current?.showModal();
  }, [shouldShow]);

  return (
    <dialog ref={ref} className={styles.modal}>
      test
    </dialog>
  );
};

export default Modal;
