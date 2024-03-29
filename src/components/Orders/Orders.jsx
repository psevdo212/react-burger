import { useEffect } from "react";
import OrderList from "../OrderList/OrderList";
import { useSelector, useDispatch } from "react-redux";
import { wsInitWithCustomUrl, wsClose } from "../../features/wsOrders";
import { getCookie } from "../../utils/cookies";
import styles from "./orders.module.css";
import Loader from "../Loader/Loader";

export const Orders = () => {
  const dispatch = useDispatch();
  const { wsRequest, wsFailed, orders } = useSelector((store) => store.wsOrders);
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

  return wsRequest ? (
    <Loader />
  ) : (
    <>
      {!wsFailed && orders.length > 0 ? (
        <div className={styles.container}>
          <OrderList orders={reverseOrders} isLocation={true} />
        </div>
      ) : (
        <p>Не удалось загрузить данные!</p>
      )}
    </>
  );
};

export default Orders;
