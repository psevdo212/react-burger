import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./orderPage.module.css";
import { wsInit, wsClose, wsInitWithCustomUrl } from "../../features/wsOrders";
import { getCookie } from "../../utils/cookies";
import { useParams } from "react-router-dom";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Loader from "../../components/Loader/Loader";

export const OrderPage = ({ isUserOrder }) => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.wsOrders.orders);
  const ingredients = useSelector((store) => store.ingredients);
  const { id } = useParams();

  useEffect(() => {
    if (!isUserOrder && orders.length === 0) {
      dispatch(wsInit());
      return () => {
        dispatch(wsClose());
      };
    } else if (isUserOrder && orders.length === 0) {
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
    }
    // eslint-disable-next-line
  }, []);

  const findOrder = (orders, id) => {
    return orders.find((item) => item._id === id);
  };

  const order = findOrder(orders, id);

  const foundIngredients = order?.ingredients.map((orderIngredient) =>
    ingredients.find((item) => item._id === orderIngredient)
  );

  const price = () => {
    let totalPrice = 0;
    foundIngredients?.forEach((ingredient) => {
      const findIngredient = ingredients.find(
        (findIngredient) => findIngredient?._id === ingredient?._id
      );
      if (findIngredient?.price) {
        totalPrice += findIngredient.price;
      }
    });
    return totalPrice;
  };

  const orderStatus = (status) => {
    if ((status = "done")) {
      return "Выполнен";
    } else return "В работе";
  };

  return <> {order ? (
    <div className={styles.container}>
      <p
        className={`text text_type_digits-default mb-10 ${styles.number}`}
      >{`#${order.number}`}</p>
      <p className="text text_type_main-medium mb-3">{order.name}</p>
      <p className={`text_type_main-small ${styles.status}`}>
        {`${orderStatus(order.status)}`}
      </p>
      <p className="text text_type_main-medium mb-6">Состав: </p>
      <ul className={styles.order_list}>
        {Array.from(new Set(foundIngredients))?.map((item, index) => {
          return (
            <li className={styles.ingredient} key={index}>
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
                <p className="text text_type_digits-default">{`${
                  foundIngredients &&
                  foundIngredients?.filter((i) => i?._id === item?._id).length
                } x ${item.price}`}</p>
                <CurrencyIcon />
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.info_container}>
        <FormattedDate
          className="text text_type_main-default text_color_inactive mr-6"
          date={new Date(order?.createdAt)}
        />
        <div className={styles.price_container}>
          <p className="text text_type_digits-default mr-2">{price()}</p>
          <CurrencyIcon />
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  )}
  </>
};

export default OrderPage;
