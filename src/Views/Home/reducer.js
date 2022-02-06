//Libs
import CONFIG from "../../config";

const { HOME } = CONFIG.STORE.ACTIONS;

const initialState = {
  nav: {
    visible: false,
    mobile: CONFIG.DEVICE_TYPE === "mobile",
  },
};

function homeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case HOME.NAV_MOBILE_MENU_CHANGE:
      return {
        ...state,
        nav: {
          ...state.nav,
          visible: payload,
        },
      };
    case HOME.MUTATE_DIRECT_PROPS: {
      const keyValuePairs = action.payload;
      return {
        ...state,
        ...keyValuePairs,
      };
    }
    case HOME.RESET: {
      return initialState;
    }
    default:
      return state;
  }
}

export default homeReducer;
