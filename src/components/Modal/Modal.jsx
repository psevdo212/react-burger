import { useEffect } from "react";
import styles from "./modal.module.css";
import ReactPortal from "../ReactPortal/ReactPortal";

const Modal = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  if (!isOpen) return null; // элемент не рендерится если не открыт
  return (
    <ReactPortal wrapperId="modal">
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <button
            type="button"
            aria-label="Закрыть"
            className={styles.modal__closebutton}
            onClick={handleClose}
          ></button>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
