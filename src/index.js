//Libs
import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
// import Raven from "raven-js";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

//Theme
import { lightTheme, GlobalStyle } from "./Themes";

//Store
import store from "./store/configureStore";

//Style
import WOW from "wow.js";
import "normalize.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./Badges.css";
import "react-virtualized/styles.css";
import "./index.css";

//temp
import App from "./App";
//Utils
dotenv.config();
new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
}).init();

//Install Raven
// if (process.env.NODE_ENV !== "development") {
//   Raven.config(process.env.REACT_APP_SENTRY_DSN, {
//     autoBreadcrumbs: true, // Enable autoBreadcrumbs
//     ignoreErrors: [
//       // onsen-ui
//       "Another splitter-side action is already running",
//       //Play music
//       "NotAllowedError: play() failed because the user didn't interact with the document first",
//       //Abort music
//       "AbortError: The play() request was interrupted by a call to pause()",
//     ],
//   }).install();
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
