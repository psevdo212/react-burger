import React from "react";
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  Button,
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerConstructor.module.css";

const BurgerConstructor = () => {
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
          <li className={styles.item}>
            <div className={styles.icon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </li>
          <li className={styles.item}>
            <div className={styles.icon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </li>
          <li className={styles.item}>
            <div className={styles.icon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </li>
          <li className={styles.item}>
            <div className={styles.icon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </li>
          <li className={styles.item}>
            <div className={styles.icon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </li>
          <li className={styles.item}>
            <div className={styles.icon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </li>
          <li className={styles.item}>
            <div className={styles.icon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </li>
        </ul>
      </div>
      <div className="locked" style={{marginTop: 6}}>
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
      <div
        className={styles.wrap}
        style={{ marginTop: 39, justifyContent: "flex-end", paddingRight: 16 }}
      >
        <div style={{ marginRight: 41 }}>
          <ul className={styles.order}>
            <li
              className={styles.item}
              style={{ marginBottom: 0, marginRight: 9,}}
            >
              <p className="text text_type_digits-medium">610</p>
            </li>
            <li className={styles.item} style={{ marginBottom: 0 }}>
              <CurrencyIcon type="primary" />
            </li>
          </ul>
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
};

export default BurgerConstructor;
