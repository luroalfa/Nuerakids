export default Object.freeze({
  DEVICE_TYPE: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "mobile"
    : "desktop",
  STORE: {
    ACTIONS: {
      HOME: {
        NAV_MOBILE_MENU_CHANGE: "HOME_NAV_MOBILE_MENU_CHANGE",
        MUTATE_DIRECT_PROPS: "HOME_MUTATE_DIRECT_PROPS",
        RESET: "HOME_RESET",
      },
      COURSES: {
        MUTATE_DIRECT_PROPS: "COURSES_MUTATE_DIRECT_PROPS",
      },
    },
  },
  ROUTES: {
    PATHS: {
      HOME: "/",
      CONTACT: "/contacto",
      COURSES: "/cursos",
      // LOGIN: "/login",
      // SIGNUP: "/signup",
    },
  },
  NAV: {
    height: 70,
  },
  VIEWPORT_SIZES: {
    s1065: 1065,
  },
});
