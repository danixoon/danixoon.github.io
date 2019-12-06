import React from "react";
import { Heart } from "../Icon";
import "./SocialLink.scss";

interface Props extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  socialImg: string;
}
const SocialLink: React.FC<React.PropsWithChildren<Props>> = props => {
  const { style, socialImg, children, ...rest } = props;
  return (
    <div className="social-link">
      <img className="icon social-icon" src={socialImg} alt="" />
      <a {...rest} className={"color-secondary " + (props.className || "")} style={{ ...style }}>
        {children}
      </a>
    </div>
  );
};

export default SocialLink;
