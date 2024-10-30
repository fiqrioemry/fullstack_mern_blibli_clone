import { HANDLE_ACTIVE, HANDLE_DARK_MODE } from "../type/interfaceReducer";

const initialState = {
  darkMode: false,
  isActive: false,
};

export const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case HANDLE_ACTIVE:
      return {
        ...state,
        isActive: !state.isActive,
      };

    default:
      return state;
  }
};
