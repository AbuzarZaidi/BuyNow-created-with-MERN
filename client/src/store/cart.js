import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = {  product:[],subTotal:0,shipping:50,total:0};
const productSlice = createSlice({
    name: "cart",
    initialState: initialCounterState,
    reducers: {
        setProductHandler(state, action) {
            state.product.push(action.payload);
           
          },
          setSubTotalHandler(state, action) {
            state.subTotal=action.payload;
          },
          setShippingHandler(state, action) {
            state.shipping=action.payload;
          },
          setTotalHandler(state) {
            state.total=state.subTotal+state.shipping;
          },
          setIncreaseQuantity(state,action){
            state.product[action.payload].productQuantity+=1;
          },
          setDecreaseQuantity(state,action){
            state.product[action.payload].productQuantity-=1;
          }
    }
})
export const {
    setProductHandler,setIncreaseQuantity,setTotalHandler, setShippingHandler,setSubTotalHandler,setDecreaseQuantity
  } = productSlice.actions;
export default productSlice.reducer;