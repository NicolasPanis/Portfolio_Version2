import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Cv from "../assets/Cv.pdf";
import "./Info.scss";

function Info() {
  useEffect(() => {
    const mytext = new SplitType(".infoTitle");

    gsap.from(".char", {
      yPercent: 130,
      stagger: 0.05,
      delay: 0.2,
      duration: 1,
      ease: "back.out",
    });
  });
  return (
    <div className="contentInfo">
      <Header />
      <h2 className="infoTitle">Infos</h2>
      <div className="about">
        <Link smooth to="#about" />
        <p>
          Hello, my name is Nicolas Panis. I'm a junior front-end developer. I
          already had some experience in web design, so I decided to train web
          development in order to obtain a more technical profile. The financial
          markets, creative coding and the world of blockchain are subjects that
          i'm passionate about.
        </p>
      </div>
      <div className="resume">
        <a href={Cv} target="_blank" rel="noreferrer">
          ↗ Resume
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Info;
