import * as api from "../api/products"
export const getProducts = async () => {
    try {
      const {data } = await api.getAllProducts();
      return data;
    } catch (error) {
      return error;
    }
  };