import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./orderFeed.module.css";
import { wsInit, wsInitWithCustomUrl, wsClose } from "../../features/wsOrders";
import OrderList from "../OrderList/OrderList";
import OrdersStats from "../OrderStats/OrdersStats";
import Loader from "../Loader/Loader";
import { getCookie } from "../../utils/cookies";

export const OrderFeed = () => {
  const dispatch = useDispatch();
  const { wsRequest, wsFailed, orders, total, totalToday } = useSelector(
    (store) => store.wsOrders
  );
  const isAuth = useSelector((store) => store.auth.isLogged);
  const reverseOrders = [...orders].reverse();

  useEffect(() => {
    isAuth
      ? dispatch(
          wsInitWithCustomUrl(
            `wss://norma.nomoreparties.space/orders?token=${getCookie(
              "accessToken"
            )}`
          )
        )
      : dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
  }, []);

  return wsRequest ? (
    <Loader />
  ) : (
    <>
      {!wsFailed && orders.length > 0 ? (
        <section className={styles.section}>
          <OrderList orders={reverseOrders} isLocation={false} />
          <OrdersStats orders={reverseOrders} total={total} totalToday={totalToday} />
        </section>
      ) : (
        <p>Не удалось загрузить данные!</p>
      )}
    </>
  );
};

export default OrderFeed;
