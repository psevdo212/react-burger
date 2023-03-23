import styles from "./ingredientPage.module.css";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHooks";
import { FC } from "react";

export const IngredientPage: FC = () => {
  const { id } = useParams();
  const ingredients = useAppSelector((state) => state.ingredients);
  const data = ingredients.find((i) => i._id === id);

  return (
    <section className={styles.ingredient}>
      <h1 className={`${styles.title} text text_type_main-large mt-1 mb-3`}>
        Детали ингредиента
      </h1>
      <img className={styles.image} src={data?.image_large} alt={data?.name} />
      <p className="text text_type_main-medium pl-5 mb-8">{data?.name}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className="text text_type_main-default mb-2">Калории,ккал</p>
          <p className="text text_type_digits-default">{data?.calories}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default mb-2">Белки, г</p>
          <p className="text text_type_digits-default">{data?.proteins}</p>
        </li>
        <li className={`${styles.item} ml-5`}>
          <p className="text text_type_main-default mb-2">Жиры, г</p>
          <p className="text text_type_digits-default">{data?.fat}</p>
        </li>
        <li className={`${styles.item} ml-2`}>
          <p className="text text_type_main-default mb-2">Углеводы, г</p>
          <p className="text text_type_digits-default">{data?.carbohydrates}</p>
        </li>
      </ul>
    </section>
  );
};

export default IngredientPage;
