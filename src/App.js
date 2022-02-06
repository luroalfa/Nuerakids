//Libs
import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
// Utils
import CONFIG from "./config";
import * as homeActions from "./Views/Home/actions";
//Views
import { Home, Contact, Courses } from "./Views";
//Components
import { Nav, Footer } from "./Components";
//Actions
const actions = {
  //HOME
  onChangeNavMobileMenu: homeActions.onChangeNavMobileMenu,
  mutateDirectPropsInHome: homeActions.mutateDirectProps,
};

function App(props) {
  const { nav, onChangeNavMobileMenu, mutateDirectPropsInHome } = props;

  return (
    <>
      <Nav
        nav={nav}
        onChangeNavMobileMenu={onChangeNavMobileMenu}
        mutateDirectPropsInHome={mutateDirectPropsInHome}
      />
      <LogoutRoutes />
      <Footer />
    </>
  );
}

function LogoutRoutes() {
  return (
    <Switch>
      <Route path={CONFIG.ROUTES.PATHS.CONTACT} component={Contact}></Route>
      <Route path={CONFIG.ROUTES.PATHS.COURSES} component={Courses}></Route>
      <Route default path={CONFIG.ROUTES.PATHS.HOME} component={Home}></Route>
    </Switch>
  );
}

export default connect(
  (state) => ({
    nav: state.home.nav,
  }),
  actions
)(App);
