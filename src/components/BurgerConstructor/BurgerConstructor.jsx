import React from "react";
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
      <div className={styles.wrap} style={{marginTop: 40, justifyContent: 'flex-end'}}>
        <div style={{marginRight: 41}}>
          <ul className={styles.order}>
            <li className={styles.item} style={{marginBottom: 0, marginRight: 9, paddingTop: 3,}}><p className="text text_type_digits-medium">610</p></li>
            <li className={styles.item} style={{marginBottom: 0}}><CurrencyIcon type="primary" /></li>
          </ul>
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default BurgerConstructor;
