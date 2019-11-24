import React from "react";
import Logo from "../Logo";

import "./Paragraph.scss";

export interface Props {
  header: string;
  content?: string;
}

const Paragraph: React.FC<Props> = props => {
  const { header, content } = props;
  return (
    <p>
      <h2 className="text-center">{header}</h2>
      {content && (
        <>
          <hr />
          <span className="text-center d-block">{content}</span>
        </>
      )}
    </p>
  );
};

export default Paragraph;
