import { useMemo } from "react";
import styles from "./orderStats.module.css"
import { TWsOrder } from "../../utils/types";

export const OrdersStats = ({ orders, total, totalToday }: {orders: TWsOrder[], total: number, totalToday: number}) => {
  const { ordersDone, ordersPending }: {ordersDone: TWsOrder[], ordersPending: TWsOrder[]} = useMemo(() => {
    if (!orders.length) {
      return { ordersDone: [], ordersPending: [] };
    }
    return orders.reduce(
      (count: {ordersDone: TWsOrder[], ordersPending: TWsOrder[]}, item) => {
        switch (item.status) {
          case "done":
            count.ordersDone.push(item);
            break;
          case "pending":
            count.ordersPending.push(item);
            break;
          // no default
        }
        return count;
      },
      { ordersDone: [], ordersPending: [] }
    );
  }, [orders]);

  return (
    <div className={styles.container}>
      <div className={styles.orders_section}>
        <div className={styles.orders}>
          <p className={`text_type_main-medium ${styles.text}`}>Готовы:</p>
          <ul className={styles.order_list}>
            {ordersDone.map((item) => {
              return (
                <li
                  key={item.number}
                  className={`text text_type_digits-default ${styles.done_text}`}
                >
                  {item.number}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.orders}>
          <p className={`text_type_main-medium ${styles.text}`}>В работе:</p>
          <ul className={styles.order_list}>
            {ordersPending.map((item) => {
              return (
                <li
                  key={item.number}
                  className={`text text_type_digits-default ${styles.done_text}`}
                >
                  {item.number}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mt-15">
        <p className={`text_type_main-medium ${styles.text}`}>
          Выполнено за всё время:
        </p>
        <p className={`text text_type_digits-large ${styles.large_text}`}>
          {total}
        </p>
      </div>
      <div className="mt-15">
        <p className={`text_type_main-medium ${styles.text}`}>
          Выполнено за сегодня:
        </p>
        <p className={`text text_type_digits-large ${styles.large_text}`}>
          {totalToday}
        </p>
      </div>
    </div>
  );
};

export default OrdersStats;
