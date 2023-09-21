import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="name">Nicolas Panis</div>
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
        </div>
      </div>
    </>
  );
}

export default Header;
