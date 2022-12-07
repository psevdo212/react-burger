import { useState } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./card.module.css";
import { ingPropTypes } from "../../utils/types";
import Modal from "../Modal/Modal";
import IngredientModal from "../IngredientModal/IngredientModal";

const Card = ({ ingredient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className={styles.card} onClick={handleOpenModal}>
      <div className={styles.counter}>
        <Counter count={1} size="default" extraClass="m-1" />
      </div>
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className={styles.image}
      />
      <ul className={styles.price}>
        <li className="text text_type_digits-default pr-2">
          {ingredient.price}
        </li>
        <li>
          <CurrencyIcon type="primary" />
        </li>
      </ul>
      <div className={styles.cardname}>
        <p className="text text_type_main-default pt-1">{ingredient.name}</p>
      </div>
      {isOpen && (
        <Modal handleClose={handleCloseModal}>
          <IngredientModal data={ingredient} />
        </Modal>
      )}
    </div>
  );
};

Card.propTypes = {
  ingredient: ingPropTypes.isRequired,
};

export default Card;
