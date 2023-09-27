import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import SplitType from "split-type";
import "./title2.scss";

function Title2() {
  useEffect(() => {
    const mytext = new SplitType(".mainTitle");

    gsap.from(".char", {
      yPercent: 130,
      stagger: 0.05,
      delay: 0.2,
      duration: 1,
      ease: "back.out",
    });
  });
  return (
    <div className="titleContent">
      <div className="mainTitle">Portfolio</div>
      <div className="navTitle">
        <Link className="home" to="/projects">
          Projects
        </Link>
        <Link className="home" to="/info">
          Info
        </Link>
      </div>
    </div>
  );
}

export default Title2;
