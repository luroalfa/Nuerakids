//Utils
import CARTA_PREPARATIVA_PROGRA_NINOS from "../../assets/doc/carta_preparativa_programacion_para_ninos.pdf";
import CRONOGRAMA_PROGRA_NINOS from "../../assets/doc/cronograma_programacion_para_ninos_.pdf";
import CONFIG from "../../config";
const { COURSES } = CONFIG.STORE.ACTIONS;

const initialState = {
  courses: [
    {
      id: 1,
      cost: "Gratuito",
      image_url:
        "https://i0.wp.com/www.web-robotica.com/wp-content/uploads/2019/03/mblock.png?resize=298%2C270&ssl=1",
      name: "Programación para niños",
      image_style: { backgroundSize: "contain" },
      content_description:
        "Aprende lógica computacional y comprende los conceptos básicos de programación y videojuegos",
      transmission_medium: "zoom",
      start_at: "Sábado 05 Septiembre 2020",
      button_title: "",
      ribbon_text: "",
      course_url: "programacion",
      groups: [
        {
          id: 1,
          name: "Scratch Junior",
          image_url:
            "https://www.scratch.school/wp-content/uploads/2019/06/scratch-junior-1280x720.jpg",
          image_style: { backgroundSize: "contain" },
          schedule: ["Sábados 9am - 10am", "Domingos 3pm-4pm"],
          requirements: [
            { concept: "No tener comprensión de lectura" },
            {
              concept: "Descargar",
              label: "Scratch Junior",
              link:
                "https://play.google.com/store/apps/details?id=org.scratchjr.android",
            },
          ],
          teachers: [
            { name: "Luis Alfonso Rodríguez" },
            { name: "Juan Carlos Rodríguez" },
          ],
          attachments: [
            {
              concept: "Descargar",
              label: "Carta preparativa",
              link: CARTA_PREPARATIVA_PROGRA_NINOS,
            },
            {
              concept: "Descargar",
              label: "Cronograma",
              link: CRONOGRAMA_PROGRA_NINOS,
            },
          ],
        },
        {
          id: 2,
          name: "MBlock",
          image_url:
            "https://i0.wp.com/www.web-robotica.com/wp-content/uploads/2019/03/mblock.png?resize=298%2C270&ssl=1",
          image_style: { backgroundSize: "contain" },
          schedule: ["Sábados 8am - 9am", "Domingos 4pm-5pm"],
          requirements: [
            { concept: "Tener comprensión de lectura" },
            {
              concept: "Descargar",
              label: "mBlock",
              link:
                "https://play.google.com/store/apps/details?id=com.makeblock.mblock",
            },
          ],
          teachers: [
            { concept: "Luis Alfonso Rodríguez" },
            { concept: "Juan Carlos Rodríguez" },
          ],
          attachments: [
            {
              concept: "Descargar",
              label: "Carta preparativa",
              link: CARTA_PREPARATIVA_PROGRA_NINOS,
            },
            {
              concept: "Descargar",
              label: "Cronograma",
              link: CRONOGRAMA_PROGRA_NINOS,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      cost: "",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/511g7f8w5iL._AC_SL1000_.jpg",
      name: "Curso de Robótica con Microbit",
      image_style: {},
      content_description:
        "En este curso enfocado a los niños aprenderán todo lo necesario para introducirse en el mundo de la robótica",
      transmission_medium: "zoom",
      start_at: "",
      button_title: "",
      ribbon_text: "Proximamente",
      course_url: "robotica",
    },
    {
      id: 3,
      cost: "",
      image_url:
        "https://i.pinimg.com/originals/e1/7e/25/e17e254367553119aa64edf8eff41724.png",
      name: "Curso de creación de Drones con Arduino",
      image_style: {},
      content_description:
        "En este curso aprenderán todo lo necesario para crear su primer aeronave no tripulada (Dron)",
      transmission_medium: "zoom",
      start_at: "",
      button_title: "",
      ribbon_text: "Proximamente",
      course_url: "drones",
    },
  ],
};

export default function courseReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COURSES.MUTATE_DIRECT_PROPS: {
      const keyValuePairs = payload;
      return {
        ...state,
        ...keyValuePairs,
      };
    }
    default:
      return state;
  }
}
