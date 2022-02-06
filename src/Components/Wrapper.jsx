//Libs
import styled, { css } from "styled-components";
//Utils
import CONFIG from "../config";

const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : props.theme.wrapper.width)};
  max-width: ${(props) =>
    props.maxWidth ? props.maxWidth : props.theme.wrapper.maxWidth};
  min-width: ${(props) =>
    props.minWidth ? props.minWidth : props.theme.wrapper.minWidth};
  height: ${(props) =>
    props.height ? props.height : props.theme.wrapper.height};
  padding: ${(props) =>
    props.padding ? props.padding : props.theme.wrapper.padding};
  margin: ${(props) =>
    props.margin ? props.margin : props.theme.wrapper.margin};
  display: ${(props) =>
    props.display ? props.display : props.theme.wrapper.display};
  flex-direction: ${(props) =>
    props.flexDirection
      ? props.flexDirection
      : props.theme.wrapper.flexDirection};
  justify-content: ${(props) =>
    props.justifyContent
      ? props.justifyContent
      : props.theme.wrapper.justifyContent};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : props.theme.wrapper.alignItems};
  flex-wrap: ${(props) =>
    props.flexWrap ? props.flexWrap : props.theme.wrapper.flexWrap};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.wrapper.backgroundColor};
      border-radius: ${(props) =>
        props.borderRadius
          ? props.borderRadius
          : props.theme.wrapper.borderRadius};
  box-shadow: ${(props) =>
    props.boxShadow ? props.boxShadow : props.theme.wrapper.boxShadow};
    ${(props) =>
      props.backgroundImage &&
      css`
        background-image: ${props.backgroundImage};
      `}
    ${(props) =>
      props.animation &&
      css`
        animation: ${props.animation.id};
        animation-duration: ${props.animation.duration};
      `}
  ${(props) =>
    props.mediaActive &&
    css`
      @media (max-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
        max-width: 100%;
        flex-direction: column;
        align-items: center;
      }
      @media (min-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
        max-width: 70%;
      }
    `}
    overflow:${(props) =>
      props.overflow ? props.overflow : props.theme.wrapper.overflow}
`;

export default Wrapper;
