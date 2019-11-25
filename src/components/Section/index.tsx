import React from "react";
import Logo from "../Logo";

import "./Section.scss";

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  header: string;
  description?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = props => {
  const { header, children, description, ...rest } = props;
  return (
    <section {...rest}>
      <header className="paragraph">
        <h2 className="text-center">{header}</h2>
        {children && (
          <>
            <hr />
            <p className="text-center d-block">{description}</p>
          </>
        )}
      </header>
      {children}
    </section>
  );
};

export default Section;
