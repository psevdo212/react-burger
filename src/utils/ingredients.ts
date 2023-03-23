export const getOrderDataByIds = (ids) => (state) => {
    const allIngs = ids
      .filter(id =>  id)
      .map(id =>
        state.ingredients.ingredients.find((ing) => ing._id === id)
      );
    const uniqueIngs = allIngs
      .filter(function (item, pos) {
        return allIngs.indexOf(item) === pos;
      })
      .map(ing => ({
        ...ing,
        qty: allIngs.reduce((acc, item) => {
          if (ing?._id === item?._id) {
            acc++;
          }
          return acc;
        }, 0)
      }));
  
    const reorderedUniqueIngs = uniqueIngs
      .filter(ing => ing.type !== 'bun')
      .reverse()
      .concat(uniqueIngs.filter(ing => ing.type === 'bun'));
  
    const totalPrice = allIngs.reduce((acc, ing) => {
      if (ing) acc += ing.price;
      return acc;
    }, 0);
    return {
      ingredients: reorderedUniqueIngs,
      totalPrice: totalPrice
    };
  };