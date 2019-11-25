import React from "react";
import "./Logo.scss";
import logo from "../../docs/logo.svg";

const Logo: React.FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = (
  props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
) => {
  return <img {...props} className={"logo " + props.className || ""} src={logo} />;
};

export default Logo;
