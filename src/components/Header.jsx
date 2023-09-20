import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h3>Nicolas Panis</h3>
      <div className="nav">
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="home" to="/">
          About
        </Link>
        <div className="lineHeader" />
      </div>
    </>
  );
}

export default Header;
