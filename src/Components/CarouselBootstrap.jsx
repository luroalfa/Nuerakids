import React from "react";
import Carousel from "./Carousel";
import Img from "./Img";
import Span from "./Span";

export default function CarouselBootstrap(props) {
  return (
    <Carousel>
      <Carousel.Item className="animate__animated animate__rubberBand">
        <Img src="https://image.freepik.com/vector-gratis/concepto-lecciones-linea-ninos_23-2148520727.jpg" />
        <Carousel.Caption
          style={{
            backgroundColor: "rgba(0,0,0,.65)",
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          <Span fontSize="s15" fontWeight="bold">
            Programa tus primeros videojuegos
          </Span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="animate__animated animate__rubberBand">
        <Img src="https://img.freepik.com/vector-gratis/joven-ingeniero-haciendo-robot-galardonado_179970-1189.jpg?size=626&ext=jpg&ga=GA1.2.1828848620.1591937734" />

        <Carousel.Caption
          style={{
            backgroundColor: "rgba(0,0,0,.65)",
            borderRadius: "50%",
            padding: "15px",
          }}
        >
          <Span fontSize="s15" fontWeight="bold">
            Aprende robótica de una forma divertida
          </Span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
