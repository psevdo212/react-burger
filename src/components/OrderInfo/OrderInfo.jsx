import styles from "./orderInfo.module.css";
import { useSelector } from "react-redux";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useFeed } from "../../hooks/useFeed";
import IngredientImage from "../IngredientImage/IngredientImage";

export const OrderInfo = ({ order, isLocation }) => {
  const ingredients = useSelector((store) => store.ingredients);
  const location = useLocation();
  const { getOrderIngredientsList, orderPrice } = useFeed(order);
  const Counter = () => {
    if (ingredients.length - 6 === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <li className={styles.container}>
      <Link
        className={`text_color_primary ${styles.link}`}
        to={
          isLocation
            ? `/profile/ordershistory/${order._id}`
            : `/orderfeed/${order._id}`
        }
        state={{ background: location, order: order }}
      >
        <div className={styles.order_info}>
          <p className="text text_type_digits-default ml-6 mt-6">{`#${order.number}`}</p>
          <FormattedDate
            className="text text_type_main-default text_color_inactive mr-6"
            date={new Date(order.createdAt)}
          />
        </div>

        <p className="text text_type_main-medium ml-6">{order.name}</p>
        <div className={styles.feed_details}>
          <ul className={styles.feed_ingredients}>
            {getOrderIngredientsList().map((item, index) => {
              if (index < 5) {
                return <IngredientImage ingredient={item} key={index} />;
              } else if (index === 5) {
                return (
                  <IngredientImage
                    ingredient={item}
                    key={index}
                    length={getOrderIngredientsList().length}
                    Counter={Counter()}
                  />
                );
              }
            })}
          </ul>
          <div className={` mr-6 ${styles.order_price}`}>
            <p className={`text text_type_digits-default ${styles.price_text}`}>
              {orderPrice}
            </p>
            <CurrencyIcon />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default OrderInfo;
