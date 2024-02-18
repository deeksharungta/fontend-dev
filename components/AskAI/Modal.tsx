"use client";

import { ReactNode, useEffect } from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
  onClose?: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const closeHandler = () => {
    onClose && onClose();
  };

  useEffect(() => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
  }, []);

  return (
    <>
      <div className={styles["backdrop"]} onClick={closeHandler} />
      <div className={`${styles["modal"]}`}>{children}</div>
    </>
  );
};

export default Modal;
