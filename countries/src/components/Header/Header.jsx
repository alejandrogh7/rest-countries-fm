import React from "react";
import "./Header.css";

const Header = ({ theme, themeChange, moon }) => {
  return (
    <header className={`header-${theme}-theme`}>
      <nav className="header-container">
        <h2 className="logo">Where in the world?</h2>
        <div className="toggle-theme" onClick={() => themeChange()}>
          {moon()}
          <h3>{theme} mode</h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;
