import styled, { css } from "styled-components";

const WrapperViewStyled = styled.div`
  width: ${(props) =>
    props.width ? props.width : props.theme.wrapperView.width};
  height: ${(props) =>
    props.height ? props.height : props.theme.wrapperView.height};
  padding: ${(props) =>
    props.padding ? props.padding : props.theme.wrapperView.padding};
  display: ${(props) =>
    props.display ? props.display : props.theme.wrapperView.display};
  flex-direction: ${(props) =>
    props.flexDirection
      ? props.flexDirection
      : props.theme.wrapperView.flexDirection};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : props.theme.wrapperView.alignItems};
  background: ${(props) =>
    props.background ? props.background : props.theme.wrapperView.background};
  ${(props) =>
    props.animation &&
    css`
      animation: zoomIn;
      animation-duration: 2s;
    `}
`;

export default WrapperViewStyled;
