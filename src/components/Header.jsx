import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="name">
          <h3>Nicolas Panis</h3>
        </div>
        <div className="nav">
          <Link className="home" to="/">
            Home
          </Link>
          <Link className="home" to="/projects">
            Projects
          </Link>
          <Link className="home" to="/info">
            Info
          </Link>
          <Link className="home" to="/contact">
            Contact
          </Link>
          <div className="lineHeader" />
        </div>
      </div>
    </>
  );
}

export default Header;
