import React from "react";
import "./Styles/Home.css";
import dibujito from './img/img1.png';

const Home = () => {
  return (
    <section>
      <div className="name">
        <a>
          <p className="hello">👋🏼Hello All</p>
        </a>
        <a>
          <p className="my-name">
            I’m Arian Sophia, A Digital Designer Student and frontend developer
          </p>
          <div className="botones">
          <button className="work" type="button"><p className="view">View my work</p></button>
          <button className="contact" type="button"><p className="me">Contact me</p></button>
          </div>
        </a>
      </div>
      <div className="img">
      <img src={dibujito}></img>
      </div>
    </section>
  );
};

export default Home;

