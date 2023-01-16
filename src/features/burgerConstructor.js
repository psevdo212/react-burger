import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addIngredient: {
      reducer(state, action) {
      state.push(action.payload)
    },
    prepare(ingredient) {
      return {
        payload: {
          id: nanoid(6),
          ingredient: ingredient,
        }
      }
    }
    }
  }
});

export const { addIngredient } = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
