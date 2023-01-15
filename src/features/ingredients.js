import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils/api";
const initialState = []

export const fetchIngredients = createAsyncThunk('ingredients/fetchIngredients', () => {
  return getData()
  .then((res) => res.data)
  .catch((err) => {
    console.log(err);
  })
});

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchIngredients.fulfilled, (state, action) => {
        return action.payload
      })
    },
  })

export default ingredientsSlice.reducer
