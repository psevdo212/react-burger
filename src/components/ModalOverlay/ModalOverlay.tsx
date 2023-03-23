import React, { FC } from "react";
import styles from "./modalOverlay.module.css";
import { TModalOverlay } from "../../utils/types";

const ModalOverlay: FC<TModalOverlay> = ({ closeByOverlay }) => {
  return <div className={styles.overlay} onClick={closeByOverlay}></div>;
};


export default ModalOverlay;
