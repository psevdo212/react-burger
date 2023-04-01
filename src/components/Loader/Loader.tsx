import React, { FC } from 'react';
import styles from './loader.module.css';

export const Loader: FC = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;