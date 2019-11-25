import React from "react";
import "./SkillTree.scss";

import markIcon from "../../docs/mark.svg";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  header: React.ReactChild;
}

const SkillTree: React.FC<React.PropsWithChildren<Props>> = props => {
  const { header, children, ...rest } = props;
  return (
    <ul className="skilltree" {...rest}>
      <h2 className="text-bold">{header}</h2>
      {React.Children.map(children, c => (
        <li style={{ listStyle: `url(${markIcon})` }}>{c}</li>
      ))}
    </ul>
  );
};

export default SkillTree;
