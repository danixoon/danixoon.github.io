import React from "react";
import { Heart } from "../../components/Icon";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer">
      <p className="text-thin">
        от дане4ки с <Heart />
      </p>
    </footer>
  );
};

export default Footer;
