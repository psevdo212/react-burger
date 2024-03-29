import { useMemo } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient.module.css";
import { ingPropTypes } from "../../utils/types";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";

const Ingredient = ({ ingredient }) => {
  const bun = useSelector((state) => state.burgerConstructor.selectedBun);
  const notBun = useSelector(
    (state) => state.burgerConstructor.selectedIngredient
  );
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ingredients",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const counter = useMemo(() => {
    if (ingredient.type !== "bun") {
      return notBun.filter(
        (currentIng) => currentIng.ingredient._id === ingredient._id
      ).length;
    }
    return bun?.ingredient._id === ingredient._id ? 2 : 0;
  }, [notBun, bun, ingredient._id, ingredient.type]);

  return (
    <div
      className={styles.card}
      ref={drag}
      style={{ border: isDragging ? "1px solid white" : "0px" }}
    >
      {counter > 0 ? (
        <div className={styles.counter}>
          <Counter count={counter} size="default" extraClass="m-1" />
        </div>
      ) : null}
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
    </div>
  );
};

Ingredient.propTypes = {
  ingredient: ingPropTypes.isRequired,
};

export default Ingredient;
