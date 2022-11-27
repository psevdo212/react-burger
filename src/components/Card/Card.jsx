import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './card.module.css';

const Card = ({cardType}) => {
  return (
    <div className={styles.card}>
      <div className={styles.counter}><Counter count={1} size="default" extraClass="m-1" /></div>
      <img src={cardType.image} alt="Булка" className='pb-1' style={{width: 240, heght: 120,}} />
      <ul className={styles.price}>
        <li className="text text_type_digits-default pr-2">{cardType.price}</li>
        <li ><CurrencyIcon type="primary"/></li>
      </ul>
      <p className="text text_type_main-default pt-1" style={{height: 48}}>{cardType.name}</p>
    </div>
   );
}

export default Card;
