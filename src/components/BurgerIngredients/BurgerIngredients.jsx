import React from "react";
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card";
import styles from "./burgerIngredients.module.css";
import { ingPropTypes } from "../../utils/types";

const BurgerIngredients = ({ ingredients }) => {
  const [current, setCurrent] = React.useState("bun");
  const bun = ingredients.filter((m) => m.type === "bun");// фильтрую массив по типу (чтобы создался массив только из булок)
  const main = ingredients.filter((m) => m.type === "main");
  const sauce = ingredients.filter((m) => m.type === "sauce");
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
          {bun.map((bun) => { // создаю карточки из массива булок
            return <Card key={bun._id} cardType={bun} />;
          })}
        </div>
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <div className={styles.container}>
          {sauce.map((sauce) => {
            return <Card key={sauce._id} cardType={sauce} />;
          })}
        </div>
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <div className={styles.container}>
          {main.map((main) => {
            return <Card key={main._id} cardType={main} />;
          })}
        </div>
      </div>
    </>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingPropTypes).isRequired,
}

export default BurgerIngredients;
