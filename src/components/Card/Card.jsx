import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./card.module.css";
import { ingPropTypes } from "../../utils/types";

const Card = ({ cardType }) => {
  return (
    <div className={styles.card}>
      <div className={styles.counter}>
        <Counter count={1} size="default" extraClass="m-1" />
      </div>
      <img src={cardType.image} alt={cardType.name} className={styles.image} />
      <ul className={styles.price}>
        <li className="text text_type_digits-default pr-2">{cardType.price}</li>
        <li>
          <CurrencyIcon type="primary" />
        </li>
      </ul>
      <div className={styles.cardname}>
        <p className="text text_type_main-default pt-1">
          {cardType.name}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardType: ingPropTypes.isRequired,
}

export default Card;
