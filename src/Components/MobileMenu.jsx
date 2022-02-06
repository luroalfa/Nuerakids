//Libs
import React from "react";
//Utils
import CONFIG from "./../config";
//Components
import Link from "./Link";
import { CloseOutlined } from "@ant-design/icons";
import Wrapper from "./Wrapper";
import Logo from "./Logo";
import Img from "./Img";
import { List, Item } from "./Nav";
import MobileMenuBackgroundIMG from "../assets/img/mobile_menu_background.svg";

export default function MobileMenu({ onChangeNavMobileMenu, nav }) {
  return (
    <>
      <Wrapper
        height={`${CONFIG.NAV.height}px`}
        padding="0 10px"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#000000"
      >
        <Logo>NeuraKids</Logo>
        <CloseOutlined
          style={{ color: "white", fontSize: "18px" }}
          onClick={() => onChangeNavMobileMenu(false)}
        />
      </Wrapper>
      <List nav={nav}>
        <Item
          nav={nav}
          as={Link}
          fontSize="s18"
          to={CONFIG.ROUTES.PATHS.HOME}
          onClick={() => onChangeNavMobileMenu(false)}
        >
          Inicio
        </Item>
        <Item
          nav={nav}
          as={Link}
          fontSize="s18"
          to={CONFIG.ROUTES.PATHS.COURSES}
          onClick={() => onChangeNavMobileMenu(false)}
        >
          Cursos
        </Item>
        <Item
          nav={nav}
          as={Link}
          fontSize="s18"
          to={CONFIG.ROUTES.PATHS.CONTACT}
          onClick={() => onChangeNavMobileMenu(false)}
        >
          Contáctenos
        </Item>
      </List>
      <Wrapper justifyContent="flex-end" height="100%">
        <Img src={MobileMenuBackgroundIMG} width="200px" />
      </Wrapper>
    </>
  );
}
