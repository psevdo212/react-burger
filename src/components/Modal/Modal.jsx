import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import ReactPortal from "../ReactPortal/ReactPortal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Modal = ({ children, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
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
          <div className={styles.button__content}>
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
        </div>
      </>
    </ReactPortal>
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
