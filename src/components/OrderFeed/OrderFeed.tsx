import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import styles from "./orderFeed.module.css";
import { wsInit, wsClose } from "../../features/wsOrders";
import OrderList from "../OrderList/OrderList";
import OrdersStats from "../OrderStats/OrdersStats";
import Loader from "../Loader/Loader";

export const OrderFeed = () => {
  const dispatch = useAppDispatch();
  const { wsRequest, wsFailed, orders, total, totalToday } = useAppSelector(
    (store) => store.wsOrders
  );

  useEffect(() => {
    dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
    // eslint-disable-next-line
  }, []);

  return wsRequest ? (
    <Loader />
  ) : (
    <>
      {!wsFailed && orders.length > 0 ? (
        <section className={styles.section}>
          <div className={styles.section__ul}>
          <h1 className="text text_type_main-large mb-5 pr-4">Лента заказов</h1>
          <OrderList orders={orders} isLocation={false} /></div>
          <OrdersStats
            orders={orders}
            total={total}
            totalToday={totalToday}
          />
        </section>
      ) : (
        <p>Не удалось загрузить данные!</p>
      )}
    </>
  );
};

export default OrderFeed;
