import React, { ReactPortal, PropsWithChildren } from "react";
import "./Container.scss";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction?: "column" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse";
}

const Container: React.FC<PropsWithChildren<Props>> = props => {
  const { children, direction, ...rest } = props;

  const child = React.Children.only(children) as React.ReactElement;
  return React.cloneElement(child, { ...rest, className: "container " + (child.props.className || "") });
  // return (

  //   <div {...rest} className="container" style={{ flexDirection: direction }}>
  //     {children}
  //   </div>
  // );
};

export default Container;
