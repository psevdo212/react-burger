import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.counter}><Counter count={1} size="default" extraClass="m-1" /></div>
      <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="Булка" className='pb-1' style={{width: 240, heght: 120,}} />
      <ul className={styles.price}>
        <li className="text text_type_digits-default pr-2">20</li>
        <li ><CurrencyIcon type="primary"/></li>
      </ul>
      <p className="text text_type_main-default pt-1" style={{height: 48}}>Краторная булка N-200i</p>
    </div>
   );
}

export default Card;
