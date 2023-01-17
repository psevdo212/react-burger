import { useState, useMemo } from "react";
import {
  ConstructorElement,
  Button,
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import styles from "./burgerConstructor.module.css";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { makeOrder } from "../../utils/api";
import { useDrop } from "react-dnd";
import { addIngredient } from "../../features/burgerConstructor";

const BurgerConstructor = () => {
  const ingredients = useSelector((state) => state.burgerConstructor);
  const [isOpen, setIsOpen] = useState(false);
  const [orderNum, setOrderNum] = useState();
  const dispatch = useDispatch();
  const bun = ingredients && ingredients.find((item) => item.ingredient.type === "bun");
  const totalPrice = ingredients.length
    ? ingredients.reduce(
        (prev, cur) =>
          cur.ingredient.type !== "bun"
            ? prev + cur.ingredient.price
            : prev + cur.ingredient.price * 2,
        0
      )
    : 0;

  const [, notBunTarget] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (ingredient) => {
      dispatch(addIngredient(ingredient));
    },
  });

 // const [, dropTarget] = useDrop({
  //   accept: 'ingredient',
  //   drop(item) {
  //     onDropHandler(item);
  //   },
  // });

//чтоб булка два раза не добавлялась

  // const handleDrop = (item) => {
  //   if (item.type === 'bun') {
  //     const bun = currentBurger.find((el) => el.type === 'bun');
  //     const index = currentBurger.indexOf(bun);
  //     if (index !== -1) {
  //       dispatch({ type: DELETE_INGREDIENT, index });
  //     }
  //   }
  //   dispatch({ type: ADD_INGREDIENT, item });
  // };



  const content = useMemo(
    () =>
      ingredients
        .filter((item) => item.ingredient.type !== "bun")
        .map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.icon}>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                text={item.ingredient.name}
                price={item.ingredient.price}
                thumbnail={item.ingredient.image}
              />
            </li>
          );
        }),
    [ingredients]
  );

  //   const handleMakeOrder = () => {
  //     makeOrder([
  //       bun._id,
  //       ...notBun.map((item) => item._id),
  //       bun._id,
  //     ])
  //       .then((data) => {
  //         if (data.success) {
  //           setOrderNum(data);
  //           setIsOpen(true);
  //         } else {
  //           return Promise.reject(data);
  //         }
  //       })
  //       .catch((err) => console.log(`Ошибка ${err}`));
  //   };

  return (
    <>
    <div className={styles.constructorwrap}>
      {bun ? (
        <div className={styles.locked}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.icon}></div>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.ingredient.name} (верх)`}
                price={bun.ingredient.price}
                thumbnail={bun.ingredient.image_mobile}
              />
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles.invisbun}></div>
      )}
      <div className={styles.unlocked} ref={notBunTarget}>
        {ingredients.length ? (<ul className={styles.list}>{content}</ul>)
        : (
          <div className={styles.choosewrap}><h2 className={`${styles.choose}`}>
              Перенесите сюда ингредиенты
            </h2></div>
        )}
      </div>
      {bun ? (
        <div className={styles.bottomlock}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.icon}></div>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.ingredient.name} (низ)`}
                price={bun.ingredient.price}
                thumbnail={bun.ingredient.image_mobile}
              />
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles.invisbun}></div>
      )}
      </div>
      <div className={styles.wrap}>
        <div className={styles.orderwrap}>
          <ul className={styles.order}>
            <li className={styles.price}>
              <p className="text text_type_digits-medium">{totalPrice}</p>
            </li>
            <li className={styles.price}>
              <CurrencyIcon type="primary" />
            </li>
          </ul>
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          //onClick={handleMakeOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {isOpen && (
        <Modal handleClose={() => setIsOpen(false)} isOpen={setIsOpen}>
          <OrderDetails orderNum={orderNum.order.number} />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
