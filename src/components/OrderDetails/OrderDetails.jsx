import { React } from "react";
import { useSelector } from "react-redux";
import styles from "./orderDetails.module.css";

const OrderDetails = () => {
  const orderNumber = useSelector((store) => store.order.order);
  const isLoading = useSelector((store) => store.order.loading);
  return (
    <div className={styles.modal}>
      {isLoading ? (
        <p className="text text_type_main-medium mt-20">Отправляем ваш заказ...</p>
      ) : (
      <>
      <div className={styles.heading}>
        <h1 className="text text_type_digits-large">{orderNumber.number}</h1>
      </div>
          <p className="text text_type_main-medium">идентификатор заказа</p>
          <div className={styles.done}></div>
          <p className="text text_type_main-default mb-2">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default">
            Дождитесь готовности на орбитальной станции
          </p></>)}
    </div>
  );
};

export default OrderDetails;