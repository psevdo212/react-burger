import { useMemo } from "react";
import styles from "./orderStats.module.css"
import PropTypes from "prop-types";

export const OrdersStats = ({ orders, total, totalToday }) => {
  const { ordersDone, ordersPending } = useMemo(() => {
    if (!orders.length) {
      return { ordersDone: [], ordersPending: [] };
    }
    return orders.reduce(
      (count, item) => {
        switch (item.status) {
          case "done":
            count.ordersDone.push(item.number);
            break;
          case "pending":
            count.ordersPending.push(item.number);
            break;
          // no default
        }
        return count;
      },
      { ordersDone: [], ordersPending: [] }
    );
  }, [orders]);

  console.log(ordersDone)
  console.log(ordersPending)

  return (
    <div className={styles.container}>
      <div className={styles.orders_section}>
        <div className={styles.orders}>
          <p className={`text_type_main-medium ${styles.text}`}>Готовы:</p>
          <ul className={styles.order_list}>
            {ordersDone.slice(0, 10).map((item, index) => {
              return (
                <li
                  key={index}
                  className={`text text_type_digits-default ${styles.done_text}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.orders}>
          <p className={`text_type_main-medium ${styles.text}`}>В работе:</p>
          <ul className={styles.order_list}>
            {ordersPending.slice(0, 10).map((item, index) => {
              return (
                <li
                  key={index}
                  className={`text text_type_digits-default ${styles.done_text}`}
                >
                  {item}
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

OrdersStats.propTypes = {
  orders: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  totalToday: PropTypes.number.isRequired,
};

export default OrdersStats;
