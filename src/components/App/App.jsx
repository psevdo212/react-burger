import React from "react";
import "../../vendor/normalize.css";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { data } from "../../utils/data";

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        <section className={styles.ingredients}>
          <h1 className="text text_type_main-large mt-8 mb-5">
            Соберите бургер
          </h1>
          <BurgerIngredients ingredients = {data}/>
        </section>
        <section className="pt-20">
          <BurgerConstructor ingredients = {data} />
        </section>
      </main>
    </div>
  );
}

export default App;
