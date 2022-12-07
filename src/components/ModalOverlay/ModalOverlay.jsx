import React from "react";
import styles from "./modalOverlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ closeByOverlay }) => {
  return <div className={styles.overlay} onClick={closeByOverlay}></div>;
};

ModalOverlay.propTypes = {
  closeByOverlay: PropTypes.func.isRequired,
};

export default ModalOverlay;
