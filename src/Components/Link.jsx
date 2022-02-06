import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  color: ${(props) => (props.color ? props.color : props.theme.link.color)};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fonts.size[props.fontSize]
      : props.theme.fonts.size.default};
  &:hover {
    color: ${(props) =>
      props.colorHover ? props.colorHover : props.theme.link.hover.color};
  }
`;

export default LinkStyled;
