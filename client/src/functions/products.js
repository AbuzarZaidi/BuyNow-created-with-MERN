import * as api from "../api/products"
export const getProducts = async (category="all",sortType,sortVal) => {
    try {
      const {data } = await api.getAllProducts(category,sortType,sortVal);
      return data;
    } catch (error) {
      return error;
    }
  };