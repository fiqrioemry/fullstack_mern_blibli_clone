import { DECREMENT, INCREMENT } from "../type/counterType";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      const newCount = state.count - 1;
      return { ...state, count: state.count < 0 ? 0 : newCount };

    default:
      return state;
  }
};
