//Libs
import React from "react";
import styled from "styled-components";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
//Utils
import CONFIG from "../../config";
//Components
import { Wrapper, WrapperView, Paragraph, Img } from "../../Components";
import ImgPitching from "../../assets/img/contact.svg";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: flex-start;
`;

export default function ContactSwitch(props) {
  return (
    <WrapperView animation>
      <Wrapper flexDirection="column" alignItems="center">
        <Paragraph
          fontSize="s18"
          color="black"
          margin="10px 0 20px 0"
          textAlign="center"
        >
          Si desea contactarnos, ponemos a su disposición los siguientes medios
        </Paragraph>
        <List>
          <Item>
            <WhatsAppOutlined style={{ margin: "0 5px 0 0" }} />
            <a
              style={{ color: "black" }}
              href="https://chat.whatsapp.com/EyyvOIlP5wh2u2CaKdGrno"
            >
              Whatsapp
            </a>
          </Item>
          <Item>
            <FacebookOutlined style={{ margin: "0 5px 0 0" }} />
            <a
              style={{ color: "black" }}
              href="https://www.facebook.com/NeuraKids-103049308172456"
            >
              Facebook
            </a>
          </Item>
          <Item>
            <InstagramOutlined style={{ margin: "0 5px 0 0" }} />
            <a style={{ color: "black" }} href="https://instagram.com">
              Instagram
            </a>
          </Item>
          <Item>
            <TwitterOutlined style={{ margin: "0 5px 0 0" }} />
            <a style={{ color: "black" }} href="https://twitter.com">
              Twitter
            </a>
          </Item>
          <Item>
            <YoutubeOutlined style={{ margin: "0 5px 0 0" }} />
            <a
              style={{ color: "black" }}
              href="https://www.youtube.com/channel/UCvOTpNtM37EjymHLuKnwQmA?view_as=subscriber"
            >
              YouTube
            </a>
          </Item>
        </List>
        <Img
          src={ImgPitching}
          margin="40px 0"
          width={CONFIG.DEVICE_TYPE === "mobile" ? "100%" : "400px"}
        />
      </Wrapper>
    </WrapperView>
  );
}
