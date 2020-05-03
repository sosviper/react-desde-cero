import React from "react";

const Curso = () => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img
        src="https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png"
        alt="Programación orientada a objetos en Go"
      />
    </div>
    <div className="card_data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        Programación orientada a objetos en Go
      </h3>
      <div className="s-mb-2 s-main-center">
        <div classname="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img
                src="https://edteam-media.s3.amazonaws.com/users/thumbnail/952327c3-2bd9-41d1-819e-9b5d7eb84c13.jpg"
                alt="Programación orientada a objetos en Go"
              />
            </div>
          </div>
        </div>
        <span className="small">Alexys Lozada</span>
      </div>
      <div className="s-main-center">
        <a
          className="button--ghost-alert button--tiny"
          href="http://www.google.com"
        >
          $ 20 USD
        </a>
      </div>
    </div>
  </article>
);

export default Curso;
