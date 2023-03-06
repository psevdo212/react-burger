import styles from "./orderList.module.css";
import React from "react";
import OrderInfo from "../OrderInfo/OrderInfo";
import Loader from "../Loader/Loader";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const OrderList = ({ withStatus, path, orders }) => {
  console.log(orders);
  const ingredients = useSelector((store) => store.ingredients);
  console.log(ingredients);

  // const currentData = useMemo(() => {
  //   const currentData = [];
  //   orders.filter((dataElem) => {
  //     // eslint-disable-next-line
  //     return ingredients.map((orderElem) => {
  //       if (orderElem === dataElem._id) {
  //         return currentData.push(orderElem);
  //       }
  //     });
  //   });
  //   return currentData;
  // }, [ingredients, orders]);

  //console.log(currentData)
  // var id_filter = [1,4,5,8];
  // var filtered = people.filter(function(item) {
  //     return id_filter.indexOf(item.id) !== -1 && item.gender==='m';
  // });
  // console.log(filtered);

  // const current = orders.filter((item) => {
  //       // eslint-disable-next-line
  //       return ingredients.map((orderElem) => {
  //         if (orderElem === item._id) {
  //           return current.push(orderElem);
  //         }
  //       });
  //     });
  //   console.log(current)

  
  

  console.log(current)

  return !orders ? (
    <Loader />
  ) : (
    <ul className={styles.orderList}>
      {current.map((order) => (
        <OrderInfo
          key={order._id}
          path={path}
          withStatus={withStatus}
          data={order}
        />
      ))}
    </ul>
  );
};

export default OrderList;
