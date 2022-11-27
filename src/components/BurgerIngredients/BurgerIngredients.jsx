import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card";
import styles from "./burgerIngredients.module.css";

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("one");

  return (
    <>
      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.wrapper}>
        <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
        <div className={styles.container}>
          <Card />
          <Card />
        </div>
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <div className={styles.container}>
          <Card />
          <Card />
          <Card />
        </div>
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <div className={styles.container}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default BurgerIngredients;
