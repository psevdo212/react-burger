import React from "react";
import styles from "./orderDetails.module.css";

const OrderDetails = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.heading}>
        <h1 className="text text_type_digits-large">034536</h1>
      </div>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <div className={styles.done}></div>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
