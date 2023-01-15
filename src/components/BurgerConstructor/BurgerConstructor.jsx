import { useState, useMemo, useEffect } from "react";
import {
  ConstructorElement,
  Button,
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from 'react-redux'
import styles from "./burgerConstructor.module.css";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { makeOrder } from "../../utils/api";

const BurgerConstructor = () => {
  const ingredients = useSelector((state) => state.ingredients)
  const [isOpen, setIsOpen] = useState(false);
  const [sum, setSum] = useState(0);
  const [orderNum, setOrderNum] = useState();
  const bun = useMemo(
    () => ingredients.find((item) => item.type === "bun"),
    [ingredients]
  );

  const notBun = useMemo(
    () => ingredients.filter((item) => item.type !== "bun"),
    [ingredients]
  );

  useEffect(() => {
    const notBunPrice = notBun.reduce(
      (sum, item) => (sum += item.price),
      0
    );
    const price = notBunPrice + bun.price * 2;
    setSum(price);
  }, [bun, notBun]);

  const handleMakeOrder = () => {
    makeOrder([
      bun._id,
      ...notBun.map((item) => item._id),
      bun._id,
    ])
      .then((data) => {
        if (data.success) {
          setOrderNum(data);
          setIsOpen(true);
        } else {
          return Promise.reject(data);
        }
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  };

  return (
    <div>
      <div className={styles.locked}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.icon}></div>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </li>
        </ul>
      </div>
      <div className={styles.unlocked}>
        <ul className={styles.list}>
          {notBun.map((item) => {
            return (
              <li key={item._id} className={styles.item}>
                <div className={styles.icon}>
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.bottomlock}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.icon}></div>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </li>
        </ul>
      </div>
      <div className={styles.wrap}>
        <div className={styles.orderwrap}>
          <ul className={styles.order}>
            <li className={styles.price}>
              <p className="text text_type_digits-medium">{sum}</p>
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
          onClick={handleMakeOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {isOpen && (
        <Modal handleClose={() => setIsOpen(false)} isOpen={setIsOpen}>
          <OrderDetails orderNum={orderNum.order.number}/>
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
