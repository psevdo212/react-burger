import { useSelector } from "react-redux";
import "../../vendor/normalize.css";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
function App() {
  const data = useSelector((state) => state.ingredients);
  return (
    <div className={styles.App}>
      <AppHeader />
      {data.length > 0 && (
        <main className={styles.main}>
          <section className={styles.ingredients}>
            <h1 className="text text_type_main-large mt-8 mb-5">
              Соберите бургер
            </h1>
            <BurgerIngredients />
          </section>
          <section className="pt-20">
            <BurgerConstructor />
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
