import styled from "styled-components";
import { Carousel } from "react-bootstrap";

// const {Caption, Item} = Carousel;

const CarouselStyled = styled(Carousel)`
  max-width: ${(props) =>
    props.maxWidth ? props.maxWidth : props.theme.carousel.maxWidth};
`;

export default CarouselStyled;
