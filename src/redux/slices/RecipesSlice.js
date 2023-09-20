import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  loading: false,
  recipeIds: [],
};

export const getRecipesAsync = createAsyncThunk(
  "recipes/getRecipesAsync",
  async () => {
    const response = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=pizza"
    );
    const result = await response.json();
    console.log(result);
    return result;
  }
);

export const RecipesStore = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: {
    [getRecipesAsync.pending]: (state, action) => {
      state.loading = true;
    },
    [getRecipesAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.pizzas = action.payload;
      // state.recipeIds = action.payload.pizzas.map(
      //   (pizza) => pizza.recipe_id
      // );
    },
    [getRecipesAsync.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default RecipesStore.reducer;
