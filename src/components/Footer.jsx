import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <div>
      <div className="job">Front end Developper</div>
      <div className="contact">
        <a
          href="mailto:nicolaspanis12@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          ↗ Email
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/nicolaspanis/"
          target="_blank"
          rel="noreferrer"
        >
          ↗ LinkedIn
        </a>
        <a
          className="link"
          href="https://github.com/NicolasPanis"
          target="_blank"
          rel="noreferrer"
        >
          ↗ Github
        </a>
      </div>
    </div>
  );
}

export default Footer;
