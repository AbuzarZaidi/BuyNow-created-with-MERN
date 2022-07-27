import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import product from './products'
import cart from './cart';
const store = configureStore({
    reducer: {  authData:auth,productData:product,cartData:cart},
  });
  
  export default store;