import { useEffect } from "react";
import OrderList from "../OrderList/OrderList";
import { useSelector, useDispatch } from "react-redux";
import { wsInitWithCustomUrl, wsClose } from "../../features/wsOrders";
import { getCookie } from "../../utils/cookies";

export const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector(
    (store) => store.wsOrders
  );
  const reverseOrders = [...orders].reverse();

  useEffect(() => {
    dispatch(
          wsInitWithCustomUrl(
            `wss://norma.nomoreparties.space/orders?token=${getCookie(
              "accessToken"
            )}`
          )
        )
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  return <OrderList orders={reverseOrders} isLocation={false} />;
};

export default Orders;
