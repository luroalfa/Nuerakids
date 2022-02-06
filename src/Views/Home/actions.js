import CONFIG from "../../config";

const { HOME } = CONFIG.STORE.ACTIONS;

export function onChangeNavMobileMenu(visible) {
  return {
    type: HOME.NAV_MOBILE_MENU_CHANGE,
    payload: visible,
  };
}

export function mutateDirectProps(keyValuePairs) {
  return {
    type: HOME.MUTATE_DIRECT_PROPS,
    payload: keyValuePairs,
  };
}

export function doReset() {
  return {
    type: HOME.RESET,
  };
}
