import { useState } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient.module.css";
import { ingPropTypes } from "../../utils/types";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {useDrag} from 'react-dnd';

const Ingredient = ({ ingredient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  const [{isDragging}, drag] = useDrag(() => ({
    type: "ingredients",
    item: {...ingredient},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <div className={styles.card} onClick={handleOpenModal} ref={drag} style={{border: isDragging ? "1px solid white" : "0px"}}>
      <div className={styles.counter}>
        <Counter count={0} size="default" extraClass="m-1" />
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
          <IngredientDetails data={ingredient} />
        </Modal>
      )}
    </div>
  );
};

Ingredient.propTypes = {
  ingredient: ingPropTypes.isRequired,
};

export default Ingredient;
