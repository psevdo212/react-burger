import { useState, useContext, useMemo } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card";
import styles from "./burgerIngredients.module.css";
import { BurgerContext } from "../../contexts/BurgerContext";

const BurgerIngredients = () => {
  const ingredients = useContext(BurgerContext);
  const [current, setCurrent] = useState("bun");
  const buns = useMemo(() => ingredients.filter((m) => m.type === "bun"), [ingredients]); // фильтрую массив по типу (чтобы создался массив только из булок)
  const mains = useMemo(() => ingredients.filter((m) => m.type === "main"), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((m) => m.type === "sauce"), [ingredients]);

  return (
    <>
      <div className={styles.tab}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.wrapper}>
        <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
        <div className={styles.container}>
          {buns.map((item) => {
            // создаю карточки из массива булок
            return <Card key={item._id} ingredient={item} />;
          })}
        </div>
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <div className={styles.container}>
          {sauces.map((item) => {
            return <Card key={item._id} ingredient={item} />;
          })}
        </div>
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <div className={styles.container}>
          {mains.map((item) => {
            return <Card key={item._id} ingredient={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BurgerIngredients;
