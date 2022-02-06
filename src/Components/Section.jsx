//Libs
import React from "react";
import styled, { css } from "styled-components";
//Utils
import CONFIG from "../config";

const SectionStyled = styled.section`
  margin: ${(props) =>
    props.margin ? props.margin : props.theme.section.margin};
  padding: ${(props) =>
    props.padding ? props.padding : props.theme.section.padding};
  display: ${(props) =>
    props.display ? props.display : props.theme.section.display};
  display: ${(props) =>
    props.display ? props.display : props.theme.section.display};
  justify-content: ${(props) =>
    props.justifyContent
      ? props.justifyContent
      : props.theme.section.justifyContent};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : props.theme.section.alignItems};
  flex-wrap: ${(props) =>
    props.flexWrap ? props.flexWrap : props.theme.section.flexWrap};
  ${(props) =>
    props.mediaActive &&
    css`
      @media (min-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
        flex-direction: row;
      }
      @media (max-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
        flex-direction: column;
        align-items: center;
      }
    `}
`;

export default function Section(props) {
  const { children } = props;
  return <SectionStyled {...props}>{children}</SectionStyled>;
}
