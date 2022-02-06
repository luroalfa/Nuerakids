import styled from "styled-components";

const Paragraph = styled.p`
  margin: ${(props) =>
    props.margin ? props.margin : props.theme.paragraph.margin};

  padding: ${(props) =>
    props.padding ? props.padding : props.theme.paragraph.padding};
  color: ${(props) =>
    props.color ? props.color : props.theme.paragraph.color};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fonts.size[props.fontSize]
      : props.theme.fonts.size.default};
  text-align: ${(props) =>
    props.textAlign ? props.textAlign : props.theme.paragraph.textAlign};
`;

export default Paragraph;
