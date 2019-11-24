import React from "react";
import Logo from "../Logo";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="container">
      <a className="nav-item" href="#">
        Обо мне
      </a>
      <a className="nav-item" href="#">
        Мои проекты
      </a>
      <a className="nav-item" href="#">
        Контакты
      </a>
      <Logo className="nav-item" />
    </header>
  );
};

export default Header;
