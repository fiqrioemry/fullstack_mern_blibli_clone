import { HANDLE_ACTIVE, HANDLE_DARK_MODE } from "../type/interfaceReducer";

export const handleDarkMode = () => async (dispatch) => {
  dispatch({ type: HANDLE_DARK_MODE });
};

export const handleActive = () => async (dispatch) => {
  dispatch({ type: HANDLE_ACTIVE });
};
