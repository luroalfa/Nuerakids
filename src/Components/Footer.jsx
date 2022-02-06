//Libs
import React from "react";
import styled, { useTheme } from "styled-components";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
//Components
import { Wrapper, Paragraph, Span, Img, Divider, Link } from "../Components";

const List = styled.ul`
  list-style-type: none;
`;

const Item = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

export default function Footer(props) {
  const theme = useTheme(); //Esto nos da acceso al Theme

  return (
    <Wrapper
      backgroundColor={theme.header.backgroundColor}
      backgroundImage={theme.header.backgroundImage}
    >
      <Wrapper
        width="100%"
        padding="0 10px"
        flexDirection="column"
        backgroundColor="rgba(0,0,0,.5)"
      >
        <Wrapper
          justifyContent="space-evenly"
          alignItems="flex-star"
          padding="10px"
        >
          <Wrapper
            flexDirection="column"
            alignItems="center"
            width="300px"
            margin="10px"
          >
            <Span margin="0 0 20px 0" fontSize="s22">
              Dedicación
            </Span>
            <Paragraph textAlign="center" color="white" fontSize="s16">
              NeuraKids es un proyecto de la compañía <b>Neurabits SA</b>.
              Dedicado a los niños dentro y fuera de Costa Rica
            </Paragraph>
          </Wrapper>
          <Wrapper
            flexDirection="column"
            alignItems="center"
            width="300px"
            margin="10px"
          >
            <Span margin="0 0 20px 0" fontSize="s22">
              Cursos
            </Span>
            <List>
              <Item>
                <DoubleRightOutlined
                  style={{
                    color: "white",
                    fontSize: "30px",
                    margin: "5px 5px 5px 5px",
                  }}
                />
                <Link style={{ color: "white" }} to="/cursos" fontSize="s16">
                  Programación
                </Link>
              </Item>
              <Item>
                <DoubleRightOutlined
                  style={{
                    color: "white",
                    fontSize: "30px",
                    margin: "5px 5px 5px 5px",
                  }}
                />
                <Link style={{ color: "white" }} to="/cursos" fontSize="s16">
                  Robotica
                </Link>
              </Item>
              <Item>
                <DoubleRightOutlined
                  style={{
                    color: "white",
                    fontSize: "30px",
                    margin: "5px 5px 5px 5px",
                  }}
                />
                <Link style={{ color: "white" }} to="/cursos" fontSize="s16">
                  Drones
                </Link>
              </Item>
            </List>
          </Wrapper>

          <Wrapper
            flexDirection="column"
            alignItems="center"
            width="300px"
            margin="10px"
          >
            <Span margin="0 0 5px 0" fontSize="s22">
              Contáctenos
            </Span>
            <PhoneOutlined
              style={{
                color: "white",
                fontSize: "30px",
                margin: "10px 5px 0 5px",
              }}
            />
            <Paragraph fontSize="s16" color="white">
              Telefonos:
            </Paragraph>
            <Paragraph color="white" fontSize="s6">
              +(506) 8495 9211
            </Paragraph>
            <Paragraph color="white" fontSize="s6">
              +(506) 7052 9997
            </Paragraph>
            <MailOutlined
              style={{
                color: "white",
                fontSize: "30px",
                margin: "10px 5px 0 5px",
              }}
            />
            <Paragraph fontSize="s16" color="white">
              E-mail:
            </Paragraph>
            <Paragraph color="white" fontSize="s6">
              neurakids@gmail.com
            </Paragraph>
            <EnvironmentOutlined
              style={{
                color: "white",
                fontSize: "30px",
                margin: "10px 5px 0 5px",
              }}
            />
            <Paragraph color="white" fontSize="s6">
              GAM, Costa Rica.
            </Paragraph>
          </Wrapper>
        </Wrapper>

        <Divider backgroundColor="white" />
        <Wrapper justifyContent="center" alignItems="center">
          <a
            style={{ color: "white" }}
            href="https://chat.whatsapp.com/EyyvOIlP5wh2u2CaKdGrno"
          >
            <WhatsAppOutlined
              style={{ margin: "5px 5px 5px 5px", fontSize: "30px" }}
            />
          </a>

          <a
            style={{ color: "white" }}
            href="https://www.facebook.com/NeuraKids-103049308172456"
          >
            <FacebookOutlined
              style={{ margin: "5px 5px 5px 5px", fontSize: "30px" }}
            />
          </a>

          <a style={{ color: "white" }} href="https://instagram.com">
            <InstagramOutlined
              style={{ margin: "5px 5px 5px 5px", fontSize: "30px" }}
            />
          </a>

          <a style={{ color: "white" }} href="https://twitter.com">
            <TwitterOutlined
              style={{ margin: "5px 5px 5px 5px", fontSize: "30px" }}
            />
          </a>

          <a
            style={{ color: "white" }}
            href="https://www.youtube.com/channel/UCvOTpNtM37EjymHLuKnwQmA?view_as=subscriber"
          >
            <YoutubeOutlined
              style={{ margin: "5px 5px 5px 5px", fontSize: "30px" }}
            />
          </a>
        </Wrapper>
        <Wrapper justifyContent="center" alignItems="center">
          <Span>© 2020 NeuraKids. Todos los derechos reservados</Span>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}
