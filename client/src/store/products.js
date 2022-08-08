import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = {  product:{},category:"all"};
const productSlice = createSlice({
    name: "product",
    initialState: initialCounterState,
    reducers: {
        setProductHandler(state, action) {
            state.product=action.payload;
          },
          setCategoryHandler(state, action) {
            state.category=action.payload;
          },
    }
})
export const {
    setProductHandler,setCategoryHandler
  } = productSlice.actions;
export default productSlice.reducer;