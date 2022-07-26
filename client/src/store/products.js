import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = {  product:{}};
const productSlice = createSlice({
    name: "product",
    initialState: initialCounterState,
    reducers: {
        setProductHandler(state, action) {
            state.product=action.payload;
          },
    }
})
export const {
    setProductHandler
  } = productSlice.actions;
export default productSlice.reducer;