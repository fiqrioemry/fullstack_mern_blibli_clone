import { GET_PRODUCT, GET_PRODUCTS } from "../type/productsType";

const initialState = {
  products: [],
  total: 0,
  product: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
