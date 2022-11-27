import React from "react";
import "./vendor/normalize.css";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main style={{display: 'flex'}}>
        <section className="ml-10 mr-10" style={{ width: 600 }}>
          <h1 className="text text_type_main-large mt-8 mb-5">
            Соберите бургер
          </h1>
          <BurgerIngredients />
        </section>
        <section className="pt-20">
          <BurgerConstructor/>
        </section>
      </main>
    </div>
  );
}

export default App;
