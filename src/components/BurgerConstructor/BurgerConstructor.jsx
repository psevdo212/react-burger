import {useState} from "react";
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  Button,
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerConstructor.module.css";
import { ingPropTypes } from "../../utils/types";
import Modal from "../Modal/Modal";
import OrderModal from "../OrderModal/OrderModal";

const BurgerConstructor = ({ingredients}) => {
  const [isOpen, setIsOpen] = useState(false);
  const item = ingredients.filter(m => m.type !== 'bun');
  return (
    <div>
      <div className={styles.locked}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.icon}></div>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </li>
        </ul>
      </div>
      <div className={styles.unlocked}>
        <ul className={styles.list}>
          {item.map(item => {
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
          )
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
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </li>
        </ul>
      </div>
      <div className={styles.wrap}>
        <div className={styles.orderwrap}>
          <ul className={styles.order}>
            <li
              className={styles.price}
            >
              <p className="text text_type_digits-medium">610</p>
            </li>
            <li className={styles.price}>
              <CurrencyIcon type="primary" />
            </li>
          </ul>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={() => setIsOpen(true)}>
          Оформить заказ
        </Button>
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <OrderModal/>
      </Modal>
    </div>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingPropTypes).isRequired,
}

export default BurgerConstructor;
