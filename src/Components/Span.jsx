import styled from "styled-components";

const SpanStyled = styled.span`
  padding: ${(props) =>
    props.padding ? props.padding : props.theme.span.padding};
  margin: ${(props) => (props.margin ? props.margin : props.theme.span.margin)};
  color: ${(props) => (props.color ? props.color : props.theme.span.color)};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fonts.size[props.fontSize]
      : props.theme.fonts.size.default};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : props.theme.span.fontWeight};
`;

export default SpanStyled;
