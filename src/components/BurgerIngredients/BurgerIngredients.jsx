import React from "react";
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card";
import styles from "./burgerIngredients.module.css";

const BurgerIngredients = ({ card }) => {
  const [current, setCurrent] = React.useState("one");
  const bun = card.filter((m) => m.type === "bun");// фильтрую массив по типу (чтобы создался массив только из булок)
  const main = card.filter((m) => m.type === "main");
  const sauce = card.filter((m) => m.type === "sauce");
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
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
}

export default BurgerIngredients;
