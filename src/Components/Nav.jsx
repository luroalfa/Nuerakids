//Libs
import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
//Utils
import CONFIG from "./../config";
//Components
import { MenuOutlined } from "@ant-design/icons";
import Link from "./Link";
import Drawer from "./Drawer";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const NavStyled = styled.nav`
  width: 100%;
  height: ${`${CONFIG.NAV.height}px`};
  padding: 0 0 0 10px;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: ${(props) =>
    CONFIG.DEVICE_TYPE === "mobile" || props.nav?.mobile ? 0 : "0 0 0 60px"};
  display: flex;
  flex-direction: ${(props) =>
    CONFIG.DEVICE_TYPE === "mobile" || props.nav?.mobile ? "column" : "row"};
  justify-content: flex-end;
  list-style-type: none;
`;

export const Item = styled.li`
  margin: ${(props) =>
    CONFIG.DEVICE_TYPE === "mobile" || props.nav?.mobile
      ? "10px 0 0 10px"
      : "0px 10px"};
  display: inline;
  cursor: pointer;
  color: white;
`;

export default function Nav(props) {
  const { nav, onChangeNavMobileMenu, mutateDirectPropsInHome } = props;
  const theme = useTheme();

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth <= CONFIG.VIEWPORT_SIZES.s1065) {
        mutateDirectPropsInHome({
          nav: {
            ...nav,
            mobile: true,
          },
        });
      } else if (window.innerWidth > CONFIG.VIEWPORT_SIZES.s1065) {
        mutateDirectPropsInHome({
          nav: {
            ...nav,
            mobile: false,
          },
        });
      }
    };
  }, []);

  return (
    <NavStyled {...props}>
      <Drawer
        visible={nav.visible}
        placement="top"
        onClose={() => onChangeNavMobileMenu(false)}
        height="100%"
        bodyStyle={{
          padding: 0,
          backgroundColor: theme.header.backgroundColor,
          backgroundImage: theme.header.backgroundImage,
        }}
      >
        <MobileMenu onChangeNavMobileMenu={onChangeNavMobileMenu} nav={nav} />
      </Drawer>

      <Link to={CONFIG.ROUTES.PATHS.HOME}>
        <Logo />
      </Link>

      {CONFIG.DEVICE_TYPE === "mobile" || nav.mobile ? (
        <MenuOutlined
          style={{ margin: "0 10px 0 0", color: "white", fontSize: "18px" }}
          onClick={() => onChangeNavMobileMenu(true)}
        />
      ) : (
        <List>
          <Item>
            <Link fontSize="s18" to={CONFIG.ROUTES.PATHS.HOME}>
              Inicio
            </Link>
          </Item>
          <Item>
            <Link fontSize="s18" to={CONFIG.ROUTES.PATHS.COURSES}>
              Cursos
            </Link>
          </Item>
          <Item>
            <Link fontSize="s18" to={CONFIG.ROUTES.PATHS.CONTACT}>
              Contáctenos
            </Link>
          </Item>
        </List>
      )}
    </NavStyled>
  );
}
