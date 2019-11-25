import React from "react";
import Logo from "../Logo";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="page-header container">
      {/* <a className="nav-item" href="#about-me">
        Обо мне
      </a>
      <a className="nav-item" href="#">
        Мои проекты
      </a>
      <a className="nav-item" href="#">
        Контакты
      </a> */}
      <Logo className="nav-logo" />
    </header>
  );
};

export default Header;
