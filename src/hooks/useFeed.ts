import { TIngredient, TOrder } from "../utils/types";
import { useAppSelector } from "./storeHooks";

export const useFeed = (order: TOrder) => {
  const ingredients = useAppSelector((store) => store.ingredients);
  const getOrderIngredientsList = () => {
    const currentIngredient: Array<TIngredient> = [];
    order.ingredients.forEach((ingredientId) => {
      ingredients.forEach((ingredient) => {
        if (ingredient._id === ingredientId) {
          currentIngredient.push(ingredient);
        }
      });
    });
    return currentIngredient;
  };

  const orderPrice = getOrderIngredientsList().reduce((count, item) => {
    return count + item.price;
  }, 0);

  return { orderPrice, getOrderIngredientsList };
};
