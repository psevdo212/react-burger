import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { OrderIngridients } from "../../components/OrderIngredients/OrderIngredients";
import { wsInit, wsInitWithCustomUrl, wsClose } from "../../features/wsOrders";
import { getCookie } from "../../utils/cookies";

export const OrderPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.wsOrders.orders);
  const { id } = useParams();
  const order = orders.find((item) => item._id === id);

  return (
    order && (
      <>
        <OrderIngridients />
      </>
    )
  );
};

export default OrderPage;