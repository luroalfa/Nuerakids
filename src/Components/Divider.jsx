import styled from "styled-components";
import { Divider } from "antd";

const DividerStyled = styled(Divider)`
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.divider.backgroundColor};
`;

export default DividerStyled;

// camelCase
// UpperCamelCase
// snake_case
