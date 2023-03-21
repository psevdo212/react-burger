import { FC } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerConstructorElement.module.css";
import { Reorder } from "framer-motion";
import { IBurgConstItem } from "../../utils/interfaces";

type TBurgConstrElem = {
  item: IBurgConstItem,
  deleteIngredient: (item: IBurgConstItem) => void,
}

const BurgerConstructorElement: FC<TBurgConstrElem> = ({ item, deleteIngredient }) => {
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

export default BurgerConstructorElement;
