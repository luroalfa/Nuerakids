//Libs
import React from "react";
import styled from "styled-components";
//Utils
import CONFIG from "../config";
//Components
import HeaderImage from "../../src/assets/img/Imageheader.jpg";

const HeaderBackground = styled.div`
  width: ${(props) => props.theme.header.width};
  height: ${(props) => props.theme.header.height};
  display: ${(props) => props.theme.header.display};
  align-items: ${(props) => props.theme.header.alignItems};
  background-color: ${(props) => props.theme.header.backgroundColor};
  background-image: ${(props) => props.theme.header.backgroundImage};
`;

const HeaderContent = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const ImageMask = styled.div`
  border-radius: 50%;
  box-shadow: 0 0 15px #ddd inset;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
    width: 200px;
    min-height: 133px;
    margin-bottom: 50px;
  }
  @media (min-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
    width: 400px;
    min-height: 266px;
    margin-right: 50px;
  }
  animation: fadeIn;
  animation-duration: 3s;
`;

const Text = styled.span`
  font-size: 32px;
  color: white;
  text-align: center;
  @media (min-width: ${`${CONFIG.VIEWPORT_SIZES.s1065}px`}) {
    width: 40%;
  }
  animation: bounceInDown;
  animation-duration: 2s;
`;

export default function Header() {
  return (
    <HeaderBackground>
      <HeaderContent>
        <ImageMask className="wow">
          <Image src={HeaderImage} />
        </ImageMask>
        <Text className="wow">Aprende, diseña y desarrolla jugando</Text>
      </HeaderContent>
    </HeaderBackground>
  );
}
