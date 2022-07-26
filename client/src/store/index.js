import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import product from './products'
const store = configureStore({
    reducer: {  authData:auth,productData:product},
  });
  
  export default store;