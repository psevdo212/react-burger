import { useState, useEffect } from "react";
import "../../vendor/normalize.css";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { getData } from "../../utils/api";
import { BurgerContext } from "../../contexts/BurgerContext";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.App}>
      <AppHeader />
      {data.length > 0 && (
      <main className={styles.main}>
        <BurgerContext.Provider value={data}>
        <section className={styles.ingredients}>
          <h1 className="text text_type_main-large mt-8 mb-5">
            Соберите бургер
          </h1>
          <BurgerIngredients/>
        </section>
        <section className="pt-20">
          <BurgerConstructor/>
        </section>
        </BurgerContext.Provider>
      </main>)}
    </div>
  );
}

export default App;
