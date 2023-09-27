import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="name">
        <Link className="home" to="/">
          NICOLAS PANIS
        </Link>
      </div>
      <div className="nav">
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

export default Header;
