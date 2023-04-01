import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { IBurgConstItem } from "../utils/interfaces";

type TBurgConst = {
  selectedIngredient: IBurgConstItem[];
  selectedBun: IBurgConstItem;
};

const initialState: TBurgConst = {
  selectedIngredient: [],
  selectedBun: {
    id: "",
    ingredient: {
      _id: "",
      name: "",
      type: "",
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: "",
      image_mobile: "",
      image_large: "",
      __v: 0,
    },
  },
};

const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addIngredient: {
      reducer(state, action: PayloadAction<IBurgConstItem>) {
        action.payload.ingredient.type !== "bun"
          ? state.selectedIngredient.push(action.payload)
          : (state.selectedBun = action.payload);
      },
      prepare(ingredient) {
        return {
          payload: {
            id: nanoid(6),
            ingredient: ingredient,
          },
        };
      },
    },
    sortIngredient(state, action) {
      return {
        ...state,
        selectedIngredient: action.payload,
      };
    },
    removeIngredient(state, action) {
      return {
        ...state,
        selectedIngredient: state.selectedIngredient.filter(
          (ingredient) => ingredient.id !== action.payload.id
        ),
      };
    },
    resetConstructor() {
      return initialState;
    },
  },
});

export const {
  addIngredient,
  sortIngredient,
  removeIngredient,
  resetConstructor,
} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
