import { useEffect } from "react";
import OrderList from "../OrderList/OrderList";
import { useSelector, useDispatch } from "react-redux";
import { wsInitWithCustomUrl, wsClose } from "../../features/wsOrders";
import { getCookie } from "../../utils/cookies";
import styles from "./orders.module.css"

export const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.wsOrders);
  const reverseOrders = [...orders].reverse();

  useEffect(() => {
    dispatch(
      wsInitWithCustomUrl(
        `wss://norma.nomoreparties.space/orders?token=${getCookie(
          "accessToken"
        )}`
      )
    );
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  return (
  <div className={styles.container}>
    <OrderList orders={reverseOrders} isLocation={false} />
  </div>
  )
};

export default Orders;
