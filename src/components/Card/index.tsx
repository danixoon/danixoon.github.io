import React, { ReactPortal, PropsWithChildren } from "react";
import "./Card.scss";

import noteCorner from "../../docs/note-corner.svg";

interface NoteProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Note: React.FC<PropsWithChildren<NoteProps>> = props => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="card-note">
      {children}
      <img style={{ position: "absolute", right: -61, bottom: -61 }} src={noteCorner} />
    </div>
  );
};
