import React from "react";
import PropTypes from 'prop-types';

const Curso = ({title, image, price, teacher}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img
        src={image}
        alt={title}
      />
    </div>
    <div className="card_data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">{title}</h3>
      <div className="s-mb-2 s-main-center">
        <div classname="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img
                src="https://edteam-media.s3.amazonaws.com/users/thumbnail/952327c3-2bd9-41d1-819e-9b5d7eb84c13.jpg"
                alt={teacher}
              />
            </div>
          </div>
        </div>
        <span className="small">{ `Prof.: ${teacher}` }</span>
      </div>
      <div className="s-main-center">
        <a
          className="button--ghost-alert button--tiny"
          href="http://www.google.com"
        >
          { `$ ${price} USD` }
        </a>
      </div>
    </div>
  </article>
);

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  teacher: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontro título",
  image: "https://hsh3-cdn.hosiho.net/images/3/5/2/5/3/35253-400.jpg",
  price: "--",
  teacher: ""
};

export default Curso;
