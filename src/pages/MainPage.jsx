import React from 'react'
import { useSelector } from 'react-redux';
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from './mainPage.module.css'

export const MainPage = () => {
    const data = useSelector((state) => state.ingredients);
  return (
    <div>
    {data.length > 0 && (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <section className={styles.ingredients}>
          <h1 className="text text_type_main-large mt-8 mb-5">
            Соберите бургер
          </h1>
          <BurgerIngredients />
        </section>
        <section className="pt-20">
          <BurgerConstructor />
        </section>
      </DndProvider>
    </main>
  )}
  </div>
  )
}

export default MainPage