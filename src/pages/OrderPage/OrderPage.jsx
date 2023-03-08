import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./orderPage.module.css";
import {
  wsInit,
  wsClose,
  wsInitWithCustomUrl,
} from "../../features/wsOrders";
import { getCookie } from "../../utils/cookies";
import { useParams } from "react-router-dom";
import { useFeed } from "../../hooks/useFeed";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Loader from "../../components/Loader/Loader";

export const OrderPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.auth.isLogged);
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
    // eslint-disable-next-line
  }, []);
  
  const { wsRequest, wsFailed, orders } = useSelector(
    (store) => store.wsOrders.orders
  );
  const { id } = useParams();
  console.log(id);
  const order = orders.find((item) => item._id === id);
  const { getOrderIngredientsList, orderPrice } = useFeed(order);
  

  

  const orderStatus = (status) => {
    if ((status = "done")) {
      return "Выполнен";
    } else return "В работе";
  };

  const counter = (ingredient) => {
    let counter = 0;
    getOrderIngredientsList().forEach((item) => {
      if (item._id === ingredient._id) {
        counter += 1;
      }
    });
    return counter;
  };

  const uniqueList = Array.from(new Set(getOrderIngredientsList()));

  return wsRequest ? (
    <Loader />
  ) : (
    <>
      {!wsFailed && orders.length > 0 ? (
        <div className={styles.container}>
          <p
            className={`text text_type_digits-default mb-10 ${styles.number}`}
          >{`#${order.number}`}</p>
          <p className="text text_type_main-medium mb-3">{order.name}</p>
          <p className={`text_type_main-small ${styles.status}`}>
            {orderStatus(order.status)}
          </p>
          <p className="text text_type_main-medium mb-6">Состав: </p>
          <ul className={styles.order_list}>
            {uniqueList.map((item) => {
              return (
                <li className={styles.ingredient} key={item._id}>
                  <div className={styles.image_container}>
                    <img
                      src={item.image_mobile}
                      className={styles.image}
                      alt={item.name}
                    ></img>
                  </div>
                  <p className={`text text_type_main-default ${styles.name}`}>
                    {item.name}
                  </p>
                  <div className={styles.price_container}>
                    <p className="text text_type_digits-default">{`${counter(
                      item
                    )} x ${item.price}`}</p>
                    <CurrencyIcon />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles.info_container}>
            <FormattedDate
              className="text text_type_main-default text_color_inactive mr-6"
              date={new Date(order.createdAt)}
            />
            <div className={styles.price_container}>
              <p className="text text_type_digits-default mr-2">{orderPrice}</p>
              <CurrencyIcon />
            </div>
          </div>
        </div>
      ) : (
        <p>Не удалось загрузить данные!</p>
      )}
    </>
  );
};
