import * as api from "../api/products"
export const getProducts = async () => {
    try {
      const {data } = await api.getAllProducts();
      console.log(data)
      return data;
    } catch (error) {
      return error;
    }
  };