import React from "react";
import StatusList from "../StatusList/StatusList";
import TotalOrders from "../TotalOrders/TotalOrders";
import styles from "./orderStats.module.css";

export const OrderStats = ({
  total,
  totalToday,
  doneOrders,
  pendingOrders,
}) => {
  return (
    <section className={styles.orderStats}>
      <div className={styles.orderStats__statusLists}>
        <StatusList title="Готовы:" orders={doneOrders} hightlight />
        <StatusList title="В работе:" orders={pendingOrders} />
      </div>
      <TotalOrders title="Выполнено за все время:">
        {total.toLocaleString()}
      </TotalOrders>
      <TotalOrders title="Выполнено за сегодня:">{totalToday}</TotalOrders>
    </section>
  );
};

export default OrderStats;
