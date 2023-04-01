import React, { FC } from "react";
import { TIngImage } from "../../utils/types";
import styles from "./ingredientImage.module.css";

export const IngredientImage: FC<TIngImage> = ({ ingredient, length, Counter }) => {
  return (
    <li className={styles.container}>
      <img
        src={ingredient.image_mobile}
        className={styles.image}
        alt={ingredient.name}
      />
      {Counter && length &&(
        <p className={`text text_type_main-default ${styles.text}`}>{`+${
          length - 6
        }`}</p>
      )}
    </li>
  );
};

export default IngredientImage;
