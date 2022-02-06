//Libs
import React from "react";
import styled from "styled-components";

const LogoStyled = styled.span`
  font-size: 33px;
  font-weight: bold;
`;

const LogoNeuraText = styled.span`
  color: ${(props) => props.theme.logo.color.neura};
`;
const LogoKidsText = styled.span`
  color: ${(props) => props.theme.logo.color.kids};
`;

export default function Logo() {
  return (
    <LogoStyled>
      <LogoNeuraText>Neura</LogoNeuraText>
      <LogoKidsText>Kids</LogoKidsText>
    </LogoStyled>
  );
}
