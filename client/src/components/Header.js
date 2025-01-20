import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <h1>Company Bot</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/bot">Chat Bot</Link>
            </li>
            <li>
              <Link to="/">About Bot</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
