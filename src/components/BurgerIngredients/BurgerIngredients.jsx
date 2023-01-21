import { useState, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import Ingredient from "../Ingredient/Ingredient";
import styles from "./burgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = () => {
  const ingredients = useSelector((state) => state.ingredients);
  const [current, setCurrent] = useState("buns");
  const buns = useMemo(
    () => ingredients.filter((m) => m.type === "bun"),
    [ingredients]
  ); // фильтрую массив по типу (чтобы создался массив только из булок)
  const mains = useMemo(
    () => ingredients.filter((m) => m.type === "main"),
    [ingredients]
  );
  const sauces = useMemo(
    () => ingredients.filter((m) => m.type === "sauce"),
    [ingredients]
  );
  const refContainer = useRef(null);
  const bunRef = useRef(null);
  const mainRef = useRef(null);
  const sauceRef = useRef(null);
  const onTabScroll = () => {
    const scrollSection = refContainer.current.getBoundingClientRect().top;
    const bunList = bunRef.current.getBoundingClientRect().top;
    const sauceList = sauceRef.current.getBoundingClientRect().top;
    const mainList = mainRef.current.getBoundingClientRect().top;
    if (bunList <= scrollSection) setCurrent("buns");
    if (sauceList <= scrollSection) setCurrent("sauces");
    if (mainList <= scrollSection) setCurrent("mains");
  };

  return (
    <>
      <div className={styles.tab}>
        <Tab
          value="buns"
          active={current === "buns"}
          onClick={() => {
            bunRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={current === "sauces"}
          onClick={() => {
            sauceRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Соусы
        </Tab>
        <Tab
          value="mains"
          active={current === "mains"}
          onClick={() => {
            mainRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.wrapper} ref={refContainer} onScroll={onTabScroll}>
        <h2 ref={bunRef} className="text text_type_main-medium mt-10 mb-6">
          Булки
        </h2>
        <div className={styles.container}>
          {buns.map((item) => {
            // создаю карточки из массива булок
            return <Ingredient key={item._id} ingredient={item} />;
          })}
        </div>
        <div className="mt-10" ref={sauceRef}>
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <div className={styles.container}>
            {sauces.map((item) => {
              return <Ingredient key={item._id} ingredient={item} />;
            })}
          </div>
        </div>
        <h2 ref={mainRef} className="text text_type_main-medium mt-10 mb-6">
          Начинки
        </h2>
        <div className={styles.container}>
          {mains.map((item) => {
            return <Ingredient key={item._id} ingredient={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BurgerIngredients;
