//Libs
import styled, { css } from "styled-components";
//Utils
import CONFIG from "../config";

const Img = styled.img`
  width: ${(props) => (props.width ? props.width : props.theme.img.width)};
  min-width: ${(props) =>
    props.minWidth ? props.minWidth : props.theme.img.minWidth};
  max-width: ${(props) =>
    props.maxWidth ? props.maxWidth : props.theme.img.maxWidth};
  height: ${(props) => (props.height ? props.height : props.theme.img.height)};
  margin: ${(props) => (props.margin ? props.margin : props.theme.img.margin)};
  padding: ${(props) =>
    props.padding ? props.padding : props.theme.img.padding};
  background-position: ${(props) => props.theme.img.backgroundPosition};
  ${(props) =>
    props.mediaActive &&
    css`
      @media (min-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
        margin-right: 35px;
      }
      @media (max-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
        margin-bottom: 35px;
      }
    `}
  ${(props) =>
    props.animation &&
    css`
      animation: ${props.animation.id};
      animation-duration: ${props.animation.duration};
    `}
`;

export default Img;
