import styles from './orderInfo.module.css';
import {useMemo} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientIcon from '../IngredientIcon/IngredientIcon';
import { useSelector } from 'react-redux';

export const OrderInfo = ({ withStatus, path, data }) => {
  const location = useLocation();
  //const ordersData = useSelector((store) => store.wsOrders)
  const ingredients = data.ingredients;
  //console.log(data)
  //const totalPrice = ingredients.reduce((acc, elem) => acc + elem.price, 0);
  const date = new Date(data.createdAt) + "";

  // const order = useMemo(() => {
  //   if (ordersData) {
  //     // eslint-disable-next-line
  //     return ordersData.orders.find((elem) => elem.number == number);
  //   }
  // }, [ordersData, number]);

//   const currentData = useMemo(() => {
//     const currentData = [];
//     ingredients.filter((dataElem) => {
//       // eslint-disable-next-line
//       return data.ingredients.map((orderElem) => {
//         if (orderElem === dataElem._id) {
//           return currentData.push(dataElem);
//         }
//       });
//     });
//     return currentData;
//   }, [ingredients, data.ingredients]);

// console.log(currentData)




  let status = '';
  switch (data.status) {
    case 'created':
      status = 'Создан';
      break;
    case 'pending':
      status = 'Готовится';
      break;
    case 'done':
      status = 'Выполнен';
      break;
      // no default
  }

  if (!ingredients) {
    return null;
  }

  return (
    <li className={`p-6 ${styles.orderInfo}`}>
      <Link
        to={{
          pathname: `${path}${data._id}`,
          state: { background: location }
        }}
        className={styles.orderInfo__link}>
        <p
          className={`text text_type_digits-default ${styles.orderInfo__header}`}>
          #{data.number}{' '}
          <time className="text text_type_main-default text_color_inactive">
          {`${date.slice(4, 33)}`}
          </time>
        </p>
        <h2 className={`text text_type_main-medium mt-6 ${styles.title}`}>
          {data.name}
        </h2>
        {withStatus && (
          <p
            className={`text text_type_main-default mt-2 ${
              data.status === 'done' && styles.orderInfo__subTitle
            }`}>
            {status}
          </p>
        )}
        <div className={styles.orderInfo__priceInfo}>
          <ul className={styles.orderInfo__ingredientsList}>
            {ingredients.length > 5 && (
              <IngredientIcon
                img={ingredients[ingredients.length - 6].image_mobile}
                extra={ingredients.length - 5}
              />
            )}
            {ingredients.slice(-5).map((ing, i) => {
              return <IngredientIcon img={ing.image} key={i} count={ing.qty} />;
            })}
          </ul>
          <p className={styles.orderInfo__priceWrapper}>
            <span
              className={`text text_type_digits-default ${styles.orderInfo__price}`}>
              {'тут будет цена'}
            </span>
            <CurrencyIcon type="primary" />
          </p>
        </div>
      </Link>
    </li>
  );
};

export default OrderInfo;