import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  selectedIngredient: [],
  selectedBun: null,
};

const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addIngredient: {
      reducer(state, action) {
        action.payload.ingredient.type !== "bun"
          ? state.selectedIngredient.push(action.payload)
          : state.selectedBun = action.payload;
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
