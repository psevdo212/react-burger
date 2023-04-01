import { FC, useEffect } from "react";
import styles from "./modal.module.css";
import ReactPortal from "../ReactPortal/ReactPortal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { TModal } from "../../utils/types";


const Modal: FC<TModal> = ({ children, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    window.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      window.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  // }

  
  return (
    <ReactPortal wrapperId="modal">
      <>
      <ModalOverlay
        closeByOverlay={(e) => {
          e.stopPropagation();
          handleClose();
        }}
      />
      <div className={styles.modal__content}>
        <div className={styles.content}>{children}</div>
        <button
          type="button"
          aria-label="Закрыть"
          className={styles.modal__closebutton}
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
        ></button>
      </div>
      </>
    </ReactPortal>
  );
};

export default Modal;
