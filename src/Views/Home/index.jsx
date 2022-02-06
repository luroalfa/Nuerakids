//Libs
import React from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
//Utils
import CONFIG from "../../config";
//Components
import {
  Wrapper,
  WrapperView,
  Section,
  Divider,
  // Paragraph,
  // CarouselBootstrap,
  Img,
  // Span,
  Header,
} from "../../Components";
import ImgPitching from "../../assets/img/pitching.svg";
// import ImgRequirements from "../../assets/img/requirements.svg";
// import ImgAvailability from "../../assets/img/availability.svg";
// import ImgClassification from "../../assets/img/classification.svg";
// import ImgMotivation from "../../assets/img/motivation.svg";
import ImgLogic from "../../assets/img/logic.svg";
import ImgCreative from "../../assets/img/new_ideas.svg";
import ImgBusiness from "../../assets/img/businessman.svg";
import ImgTroubleshooting from "../../assets/img/troubleshooting.svg";
import ImgWhyStudyProgramming from "../../assets/img/why_study_programming.svg";
import ImgTeam from "../../assets/img/team.svg";

// const iFrameParams = [
//   "controls=0",
//   "&autoplay=1",
//   "&rel=0",
//   "&showinfo=1",
//   "&modestbranding=0",
//   "&disablekb=0",
//   "&iv_load_policy=3",
// ].reduce((acc, param) => {
//   return acc + param;
// }, "");

function Home(props) {
  return (
    <WrapperView>
      <Header />
      <Wrapper width="100" justifyContent="center">
        <Wrapper maxWidth={`${CONFIG.VIEWPORT_SIZES.s1065}px`}>
          <Section padding="40px" mediaActive>
            <Img
              mediaActive
              className="wow"
              animation={{
                id: "fadeInDown",
                duration: "2s",
              }}
              height="145px"
              minWidth="185px"
              maxWidth="185px"
              src={ImgPitching}
            />
            <Wrapper
              mediaActive
              className="wow"
              animation={{
                id: "fadeIn",
                duration: "2s",
              }}
            >
              <h2>¿Qué es NeuraKids?</h2>
              <span>
                Los niños cuentan con una maravillosa facilidad para dominar la
                tecnología, la cual se creé que hará desaparecer más de 75
                millones de empleos en los próximos años. Por esta razón ponemos
                a disposición el proyecto <b>NeuraKids</b> donde sus niños y
                niñas serán introducidos en éste apasionante mundo binario
              </span>
            </Wrapper>
          </Section>
          <Divider />
          <Section padding="40px" mediaActive>
            <Img
              className="wow"
              animation={{
                id: "fadeInDown",
                duration: "2s",
              }}
              mediaActive
              height="145px"
              minWidth="185px"
              maxWidth="185px"
              src={ImgWhyStudyProgramming}
            />
            <Wrapper
              mediaActive
              className="wow"
              animation={{
                id: "fadeIn",
                duration: "2s",
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                ¿Porqué aprender programación?
              </h2>
              <span>
                Hay muchas razones por las que recomendamos e impulsamos a los
                niños que aprendan a programar. Algunas de ellas son
              </span>
            </Wrapper>

            <Wrapper justifyContent="center" margin="50px 0 0 0">
              <Wrapper
                mediaActive
                width="46%"
                minWidth="250px"
                margin="0 30px 30px 0"
                alignItems="center"
              >
                <Img
                  className="wow"
                  animation={{
                    id: "fadeInDown",
                    duration: "2s",
                  }}
                  margin="0 10px 0 0"
                  height="90px"
                  minWidth="90px"
                  maxWidth="90px"
                  src={ImgLogic}
                />
                <Wrapper
                  width="70%"
                  minWidth="250px"
                  className="wow"
                  animation={{
                    id: "fadeIn",
                    duration: "2s",
                  }}
                >
                  <h3>Lógica</h3>
                  <span>
                    Desarrollar el pensamiento lógico a edades tempranas le
                    permitirá enfrentarse a todo tipo de problemas en casi
                    cualquier disciplina
                  </span>
                </Wrapper>
              </Wrapper>
              <Wrapper
                mediaActive
                width="46%"
                minWidth="250px"
                margin="0 30px 30px 0"
                alignItems="center"
              >
                <Img
                  className="wow"
                  animation={{
                    id: "fadeInDown",
                    duration: "2s",
                  }}
                  margin="0 10px 0 0"
                  height="90px"
                  minWidth="90px"
                  maxWidth="90px"
                  src={ImgTroubleshooting}
                />
                <Wrapper
                  width="70%"
                  minWidth="250px"
                  className="wow"
                  animation={{
                    id: "fadeIn",
                    duration: "2s",
                  }}
                >
                  <h3>Resolución de problemas</h3>
                  <span>
                    Capacidad de dividir y estructurar un problema grande en
                    pequeñas piezas, permitiendo más fácilmente su correcta
                    resolución de forma crítica y ordenada
                  </span>
                </Wrapper>
              </Wrapper>
              <Wrapper
                mediaActive
                width="46%"
                minWidth="250px"
                margin="0 30px 30px 0"
                alignItems="center"
              >
                <Img
                  className="wow"
                  animation={{
                    id: "fadeInDown",
                    duration: "2s",
                  }}
                  margin="0 10px 0 0"
                  height="90px"
                  minWidth="90px"
                  maxWidth="90px"
                  src={ImgCreative}
                />
                <Wrapper
                  width="70%"
                  minWidth="250px"
                  className="wow"
                  animation={{
                    id: "fadeIn",
                    duration: "2s",
                  }}
                >
                  <h3>Creatividad</h3>
                  <span>
                    Imaginar el producto final, diseñarlo y desarrollarlo,
                    resolviendo cada uno de sus desafíos, estimula
                    exponencialmente su creatividad
                  </span>
                </Wrapper>
              </Wrapper>
              <Wrapper
                mediaActive
                width="46%"
                minWidth="250px"
                margin="0 30px 30px 0"
                alignItems="center"
              >
                <Img
                  className="wow"
                  animation={{
                    id: "fadeInDown",
                    duration: "2s",
                  }}
                  margin="0 10px 0 0"
                  height="90px"
                  minWidth="90px"
                  maxWidth="90px"
                  src={ImgBusiness}
                />
                <Wrapper
                  width="70%"
                  minWidth="250px"
                  className="wow"
                  animation={{
                    id: "fadeIn",
                    duration: "2s",
                  }}
                >
                  <h3>Profesión</h3>
                  <span>
                    Entender, razonar y experimentar cómo funciona la
                    tecnología, le permitirá construir sus propios desarrollos y
                    soluciones informáticas para el futuro
                  </span>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Section>
          <Divider />
          <Section padding="40px" mediaActive>
            <Img
              className="wow"
              animation={{
                id: "fadeInDown",
                duration: "2s",
              }}
              mediaActive
              height="145px"
              minWidth="185px"
              maxWidth="185px"
              src={ImgTeam}
            />
            <Wrapper
              mediaActive
              className="wow"
              animation={{
                id: "fadeIn",
                duration: "2s",
              }}
            >
              <h2>¡Únete!</h2>
              <span>
                ¡Entonces! ¿Qué esperas? Únete y se parte de esta grandiosa
                comunidad, la comunidad de todos aquellos que creamos tecnología
                y no nos conformamos sólo con usarla. Aún estamos a tiempo de
                presentarle a nuestros niños una sana y muy prometedora opción
                de desarrollo laboral para su futuro
              </span>
            </Wrapper>
          </Section>
        </Wrapper>
      </Wrapper>

      {/* <iframe
          title="myFrame"
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/o_1BR38Ssy0?${iFrameParams}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe> */}

      {/* <Wrapper
        alignItems="center"
        flexDirection="column"
        maxWidth="1065px"
        backgroundColor="green"
      >
        <CarouselBootstrap />
        <Wrapper
          flexDirection="column"
          padding="10px"
          boxShadow="5px 5px 22px #222 inset"
          margin="0 0 10px 0"
          borderRadius="25px"
        >
          <Span fontSize="s22" fontWeight="bold">
            Bienvenido!
          </Span>
          <Img src={ImgPitching} margin="10px 0" width="100%" />
          <Paragraph color="white" fontSize="s16">
            Nos complace informarles acerca de los preparativos necesarios que
            se deben realizar para que sus niños mayores de 6 años puedan llevar
            con éxito los cursos que próximamente estaremos brindando
          </Paragraph>
        </Wrapper>
        <Paragraph fontSize="s16">
          En las futuras clases que estaremos impartiendo, sus niños serán
          introducidos en el mundo de la programación, donde los capacitaremos
          con las herramientas y conocimientos necesarios para poder continuar
          desenvolviéndose en éste apasionante ecosistema.
        </Paragraph>
        <Paragraph fontSize="s16">
          Solicitamos a los padres y/o tutores legales que puedan ayudar a sus
          niños a cumplir con la lista de requisitos que a continuación se
          detalla.
        </Paragraph>
        <Img src={ImgRequirements} margin="10px 0" width="100%" />
        <h3>PASO 1. INSTALACIÓN DE HERRAMIENTAS</h3>
        <Paragraph fontSize="s16">
          Necesitamos que le ayude a su hijo a preparar el terreno donde
          aprenderá a programar. Para esto, se debe instalar las siguientes
          aplicaciones, las cuales están disponible para las plataformas:
          Android, iOS, Windows, MacOS.
        </Paragraph>
        <Paragraph>
          Nota: Usted puede utilizar la plataforma que desee, sin embargo, cabe
          resaltar que en los cursos nosotros estaremos utilizando Android,
          Windows y MacOS.
        </Paragraph>
        <h5>MBLOCK (Android)</h5>
        <ol>
          <li>
            Ingrese a la aplicación Google Play Store y en la barra de búsqueda
            que se encuentra en la parte superior de la pantalla, escriba:
            mBlock
          </li>
          <li>
            Le aparecerá la siguiente opción, pulsa en el botón Instalar y
            espere a que se termine la instalación
          </li>
          <li>Una vez terminada la instalación, pulsa el botón Abrir.</li>
        </ol>
        <Paragraph>
          Nota: A partir de ahora la aplicación deberá aparecer en la lista
          principal de aplicaciones instaladas en su celular
        </Paragraph>
        <br></br>
        <h5>MBLOCK (Windows)</h5>
        <ol>
          <li>
            Ingrese a la página oficial de descargas de mBlock dando click en el
            siguiente enlace:
            <a href="https://www.mblock.cc/en-us/download">
              <u>Enlace de descarga</u>
            </a>
            <ul>
              <li>
                En ella encontrará varias opciones: La primera es la versión
                web, utilice esta opción si desea abrir mBlock online desde el
                navegador, dando click en la opción Code with blocks
              </li>
              <li>
                La segunda es la versión de escritorio, utilice esta opción si
                desea instalar mBlock directamente en su computadora y poderlo
                usar de forma offline.
              </li>
            </ul>
          </li>
        </ol>
        <Paragraph fontSize="s16">
          Si se decidió por la opción offline de instalación en su computadora,
          una vez descargado el instalador, siga las instrucciones del siguiente
          vídeo para completar la instalación
        </Paragraph>
        <iframe
          title="Install mBlock (Windows)"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/P75S5cztGjg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <br></br>
        <Paragraph fontSize="s16">
          También necesitaremos tener instalado el programa Zoom en nuestro
          dispositivo, el cual será utilizado para realizar los cursos en vivo y
          lograr una comunicación más efectiva con los estudiantes. Podemos
          instalarlo en nuestro dispositivo móvil o bien en nuestra computadora.
          Selecciona la opción que desee y sigue las instrucciones que abajo se
          enumeran:
        </Paragraph>
        <h5>ZOOM (Android)</h5>
        <ol>
          <li>
            Ingrese a la aplicación Google Play Store y en la barra de búsqueda
            que se encuentra en la parte superior de la pantalla, escriba: Zoom
          </li>
          <li>
            Le aparecerá la siguiente opción, pulsa en el botón Instalar y
            espere a que se termine la instalación
          </li>
          <li>Una vez terminada la instalación, pulsa el botón Abrir.</li>
        </ol>
        <Paragraph>
          Nota: A partir de ahora la aplicación deberá aparecer en la lista
          principal de aplicaciones instaladas en su celular
        </Paragraph>
        <br></br>
        <h5>ZOOM (Windows)</h5>
        <ol>
          <li>
            Utilice el siguiente enlace para descargar zoom:
            <a href="https://zoom.us/client/latest/ZoomInstaller.exe">
              <u>Enlace de descarga</u>
            </a>
            <ul>
              <li>
                Una vez descargado el archivo, sigue las instrucciones que se
                muestran en el siguiente vídeo
              </li>
            </ul>
          </li>
        </ol>
        <iframe
          title="Install Zoom (Windows)"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/Ey_3UCvgdU0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <br></br>
        <h3>PASO 2. DISPONIBILIDAD Y COMPROMISO</h3>
        <Img src={ImgAvailability} margin="10px 0" width="100%" />
        <Paragraph fontSize="s16">
          Aunque los cursos impartidos serán dirigidos a los niños, solicitamos
          que el niño siempre esté acompañado por un adulto, así como disponer
          del dispositivo con el cual practicará lo aprendido a lo largo de las
          lecciones
        </Paragraph>
        <Paragraph fontSize="s16">
          Además, solicitamos que los niños estén conectados 5 minutos antes de
          iniciar la lección
        </Paragraph>
        <br></br>
        <h3>PASO 3. CLASIFICACIÓN DE NIÑOS.</h3>
        <Img src={ImgClassification} margin="10px 0" width="100%" />
        <Paragraph fontSize="s16">
          Los niños fueron clasificados por edades para las clases:
        </Paragraph>
        <ol>
          <li>
            Clase A, están los niños de 6 a 8 años de edad, recomendable el
            acompañamiento de un adulto para la vigilancia y ayuda si es
            necesario.
          </li>
          <li>
            Clase B, estarán los niños de 9 a 12 años de edad, con una manera
            distinta de dar las clases igualmente no se deja a un lado el
            acompañamiento de un adulto.
          </li>
        </ol>

        <h3>
          PASO 4. ANIME A SU HIJO O HIJA, MUÉSTRELE EL INTERÉS SOBRE LO QUE VA A
          CURSAR.
        </h3>
        <Img src={ImgMotivation} margin="10px 0" width="100%" />
        <Paragraph fontSize="s16">
          En las futuras clases que estaremos impartiendo, sus niños serán
          introducidos en el mundo de la programación, donde los capacitaremos
          con las herramientas y conocimientos necesarios para poder continuar
          desenvolviéndose en éste apasionante ecosistema. Solicitamos a los
          padres y/o tutores legales que puedan ayudar a sus niños a cumplir con
          la lista de requisitos que a continuación se detalla.
        </Paragraph>
        <br></br>
        <h3>PASO 5. VENTAJAS DE LA PROGRAMACIÓN</h3>
      </Wrapper> */}
    </WrapperView>
  );
}

export default connect(
  (state) => ({
    ...state.home,
  }),
  actions
)(Home);
