import * as api from "../api/products"
export const getProducts = async (category) => {
    try {
      const {data } = await api.getAllProducts(category);
      return data;
    } catch (error) {
      return error;
    }
  };