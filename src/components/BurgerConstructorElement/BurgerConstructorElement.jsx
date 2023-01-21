import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerConstructorElement.module.css";
import { Reorder } from "framer-motion";

const BurgerConstructorElement = ({ item, deleteIngredient }) => {
  return (
    <Reorder.Item value={item} className={styles.item}>
      <div className={styles.icon}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={item.ingredient.name}
        price={item.ingredient.price}
        thumbnail={item.ingredient.image}
        handleClose={() => deleteIngredient(item)}
      />
    </Reorder.Item>
  );
};

BurgerConstructorElement.propTypes = {
  item: PropTypes.object.isRequired,
  deleteIngredient: PropTypes.func.isRequired,
};

export default BurgerConstructorElement;
