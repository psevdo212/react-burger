import React from "react";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredientIcon.module.css";

export const IngredientIcon = ({ img, extra, count, isDiv }) => {
  return !isDiv ? (
    <li className={styles.ingredient}>
      <img className={styles.ingredient__image} src={img} alt="ингредиент" />
      {count && count > 1 && !extra && <Counter count={count} size="small" />}
      {extra && (
        <div
          className={`text text_type_main-default ${styles.ingredient__overlay}`}
        >{`+${extra}`}</div>
      )}
    </li>
  ) : (
    <div className={styles.ingredient} style={{ margin: "0" }}>
      <img className={styles.ingredient__image} src={img} alt="ингредиент" />
      {extra && (
        <div
          className={`text text_type_main-default ${styles.ingredient__overlay}`}
        >{`+${extra}`}</div>
      )}
    </div>
  );
};
export default IngredientIcon;
