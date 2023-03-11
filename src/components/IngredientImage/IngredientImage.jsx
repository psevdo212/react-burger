import React from "react";
import styles from "./ingredientImage.module.css";

export const IngredientImage = ({ ingredient, length, Counter }) => {
  return (
    <li className={styles.container}>
      <img
        src={ingredient.image_mobile}
        className={styles.image}
        alt={ingredient.name}
      />
      {Counter && (
        <p className={`text text_type_main-default ${styles.text}`}>{`+${
          length - 6
        }`}</p>
      )}
    </li>
  );
};

export default IngredientImage;
