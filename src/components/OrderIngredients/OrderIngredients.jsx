import styles from "./orderIngredients.module.css";
import { useFeed } from "../../hooks/useFeed";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation } from "react-router-dom";
//import { useSelector } from "react-redux";

export const OrderIngredients = () => {
  const location = useLocation();
  // const orders = useSelector((store) => store.wsOrders.orders);
  // const { id } = useParams();
  //const order = orders.find((item) => item._id === id);
  const order = location.state.order;
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

  return (
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
  );
};
