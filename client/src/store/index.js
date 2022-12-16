import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import product from './products'
import cart from './cart';
import category from './category';
const store = configureStore({
    reducer: {  authData:auth,productData:product,cartData:cart,categoryData:category},
  });
  
  export default store;