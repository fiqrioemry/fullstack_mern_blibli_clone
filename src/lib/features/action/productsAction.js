import { GET_PRODUCT, GET_PRODUCTS } from "../type/productsType";
import Api from "@/api/Api";

export const getProducts = (limit) => async (dispatch) => {
  const { data } = await Api.get(`/products?limit=${limit}`);

  dispatch({ type: GET_PRODUCTS, payload: data.products });
};

export const getProduct = (id) => async (dispatch) => {
  const data = await Api.get(`/products/${id}`);

  dispatch({ type: GET_PRODUCT, action: data.products });
};
