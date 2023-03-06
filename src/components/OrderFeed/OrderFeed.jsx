import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./orderFeed.module.css";
import { wsInit, wsClose } from "../../features/wsOrders";
import OrderList from "../OrderList/OrderList";
import OrderStats from "../OrderStats/OrdersStats";
import Loader from "../Loader/Loader";

const OrderFeed = () => {
  const dispatch = useDispatch();
  const { wsRequest, wsFailed, orders, total, totalToday } = useSelector(
    (store) => store.wsOrders
  );

  const pendingOrders = orders
    .filter((order) => order.status === "pending")
    .map((order) => order.number);
  const doneOrders = orders
    .filter((order) => order.status === "done")
    .map((order) => order.number);

  useEffect(() => {
    dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  return wsRequest ? (
    <Loader />
  ) : (
    <>
      {!wsFailed && orders.length > 0 ? (
        <main className={styles.content}>
          <h1
            className={`text text_type_main-large mt-10 mb-5 ml-2 ${styles.content__title}`}>
            Лента заказов
          </h1>
          {orders.length === 50 ? (
            <section className={styles.content__ordersSection}>
              <OrderList path="feed/" orders={orders} />
            </section>
          ) : (
            <Loader />
          )}
          <section className={styles.content__statsSection}>
            <OrderStats
              total={total}
              totalToday={totalToday}
              doneOrders={doneOrders}
              pendingOrders={pendingOrders}
            />
          </section>
        </main>
      ) : (
        <p>Не удалось загрузить данные!</p>
      )}
    </>
  );
};

export default OrderFeed;
