import React from "react";
import styles from "./orderList.module.css";
import OrderInfo from "../OrderInfo/OrderInfo";

export const OrderList = ({ orders, isLocation }) => {
  return (
    <div>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      <ul className={styles.order_list}>
        {orders.map((order) => {
          return (
            <OrderInfo key={order._id} order={order} isLocation={isLocation} />
          );
        })}
      </ul>
    </div>
  );
};

export default OrderList;
