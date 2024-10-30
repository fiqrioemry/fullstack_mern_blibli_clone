import { DECREMENT, INCREMENT } from "../type/counterType";

export const increase = () => async (dispatch) => {
  dispatch({ type: INCREMENT });
};

export const decrease = () => async (dispatch) => {
  dispatch({ type: DECREMENT });
};
