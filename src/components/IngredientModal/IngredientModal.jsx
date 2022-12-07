import React from "react";
import styles from "./ingredientModal.module.css";
import { ingPropTypes } from "../../utils/types";

const IngredientModal = ({ data }) => {
  return (
    <div className={styles.modal}>
      <h1 className={`${styles.title} text text_type_main-large mt-3 mb-3`}>
        Детали ингредиента
      </h1>
      <img className={styles.image} src={data.image_large} alt={data.name} />
      <p className="text text_type_main-medium pl-15 mb-8">{data.name}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className="text text_type_main-default mb-2">Калории,ккал</p>
          <p className="text text_type_digits-default">{data.calories}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default mb-2">Белки, г</p>
          <p className="text text_type_digits-default">{data.proteins}</p>
        </li>
        <li className={`${styles.item} ml-5`}>
          <p className="text text_type_main-default mb-2">Жиры, г</p>
          <p className="text text_type_digits-default">{data.fat}</p>
        </li>
        <li className={`${styles.item} ml-2`}>
          <p className="text text_type_main-default mb-2">Углеводы, г</p>
          <p className="text text_type_digits-default">{data.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

IngredientModal.propTypes = {
  data: ingPropTypes.isRequired,
};

export default IngredientModal;
