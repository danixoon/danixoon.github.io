import React from "react";

import "./Icon.scss";

import heartIcon from "../../docs/heart.svg";

export const Heart: React.FC = () => {
  return <img src={heartIcon} alt="heart" className="icon" />;
};
