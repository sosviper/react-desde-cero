import React from "react";
import "./styles/styles.scss";
import Curso from "./Curso";

const cursos = [
  {
    title: "React desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    price: 30,
    teacher: "Beto Quiroga",
  },
  {
    "title": "HTML desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/blogs/smaller/03928ceb-64e7-4336-b18c-6f65a751de6e.jpg",
    "price": 0,
    "teacher": "Alvaro Felipe"
  }
];

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner_img"
            src="https://wallpaperaccess.com/full/1782498.jpg"
            alt="Inicio"
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteam</p>
            <p>Tu futuro te espera</p>
            <a href="http://www.google.com" className="button">
              Suscribirse
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      {
        cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} teacher={c.teacher} /> )
      }
    </div>
  </>
);

export default App;

// Reglas JSX
// 1. Toda etiqueta debe cerrarse
// 2. Los componentes deben devolver un sólo elemento padre
// 3. Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4. Fragment => <> Hijos </>
// 5. img siempre se cierra
// 6. className => classNameName
// 7. for => htmlFor
// 8. No If else while
