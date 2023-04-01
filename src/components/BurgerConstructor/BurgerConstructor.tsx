import { useState, useMemo, FC } from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import styles from "./burgerConstructor.module.css";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import BurgerConstructorElement from "../BurgerConstructorElement/BurgerConstructorElement";
import { useDrop } from "react-dnd";
import {
  addIngredient,
  sortIngredient,
  removeIngredient,
  resetConstructor,
} from "../../features/burgerConstructor";
import { Reorder } from "framer-motion";
import { getOrderNumber } from "../../features/order";
import { useNavigate } from "react-router-dom";
import { IBurgConstItem } from "../../utils/interfaces";

const BurgerConstructor: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((store) => store.auth.isLogged);
  const bun = useAppSelector((store) => store.burgerConstructor.selectedBun);
  const notBun = useAppSelector(
    (store) => store.burgerConstructor.selectedIngredient
  );
  const navigate = useNavigate();

  const totalPrice = useMemo<number>(() => {
    return notBun.reduce(
      (sum: number, item: IBurgConstItem) => (sum += item.ingredient.price),
      bun ? bun.ingredient.price * 2 : 0
    );
  }, [notBun, bun]);

  const [, notBunTarget] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (ingredient) => {
      dispatch(addIngredient(ingredient));
    },
  });

  const ingredientsIDs = useMemo(
    () => ({
      ingredients: [
        bun?.ingredient._id,
        ...notBun?.map((item) => item.ingredient._id),
        bun?.ingredient._id,
      ],
    }),
    [bun, notBun]
  );

  const handleMakeOrder = (): void => {
    setIsOpen(true);
    // @ts-ignore
    dispatch(getOrderNumber(ingredientsIDs));
  };

  const closeOrderModal = (): void => {
    setIsOpen(false);
    dispatch(resetConstructor());
  };

  const toLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <div className={styles.constructorwrap}>
        {bun.id ? (
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
          {notBun.length || bun.id ? (
            <Reorder.Group
              axis="y"
              values={notBun}
              className={styles.list}
              onReorder={(item) => dispatch(sortIngredient(item))}
            >
              {notBun.map((item: IBurgConstItem) => {
                return (
                  <BurgerConstructorElement
                    key={item.id}
                    item={item}
                    deleteIngredient={() => dispatch(removeIngredient(item))}
                  />
                );
              })}
            </Reorder.Group>
          ) : (
            <div className={styles.choosewrap}>
              <h2 className={`${styles.choose}`}>
                Перенесите сюда ингредиенты
              </h2>
            </div>
          )}
        </div>
        {bun.id ? (
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
          disabled={notBun.length < 1 || !bun} // пока нет булки и хотя бы одной начинки - кнопка неактивна
          onClick={isAuth ? handleMakeOrder : toLoginPage} //если не авторизован - заказ не отправится, произойдет переадресация
        >
          Оформить заказ
        </Button>
      </div>
      {isOpen && (
        <Modal handleClose={closeOrderModal} isOpen={setIsOpen}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
