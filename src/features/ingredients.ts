import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils/api";
import { TIngredient } from "../utils/types";

type TIngrState = TIngredient[];

const initialState: TIngrState = [];

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  () => {
    return getData()
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }
);

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state, action) => {
        state = initialState;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state = initialState;
      });
  },
});

export default ingredientsSlice.reducer;
