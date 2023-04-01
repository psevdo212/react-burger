import React from "react";
import styles from "./orderList.module.css";
import OrderInfo from "../OrderInfo/OrderInfo";
import { TWsOrder } from "../../utils/types";

type TOrderList = {
  orders: TWsOrder[],
  isLocation: boolean,
}

export const OrderList = ({ orders, isLocation }: TOrderList) => {
  return (      
      <ul className={styles.order_list}>
        {orders.map((order) => {
          return (
            <OrderInfo key={order._id} order={order} isLocation={isLocation} />
          );
        })}
      </ul>
    
  );
};

export default OrderList;
