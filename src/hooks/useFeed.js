import { useSelector } from "react-redux";

export const useFeed = (order) => {
  const ingredients = useSelector((store) => store.ingredients);

  const getOrderIngredientsList = () => {
    const currentIngredient = [];
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
