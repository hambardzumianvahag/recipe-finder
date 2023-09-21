import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  loading: false,
  recipeId: null,
  eachPizza: [],
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
export const getEachPizzaAsync = createAsyncThunk(
  "recipes/getEachPizzaAsync",
  async (recipeId) => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
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
    },
    [getRecipesAsync.rejected]: (state, action) => {
      state.loading = false;
    },
    [getEachPizzaAsync.pending]: (state, action) => {
      state.loading = true;
    },
    [getEachPizzaAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.eachPizza = action.payload;
    },
  },
});

export default RecipesStore.reducer;
