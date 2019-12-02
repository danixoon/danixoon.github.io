import React, { useState } from "react";
import "./Project.scss";

interface Props {
  header: string;
  media: string[];

  links: React.ReactChild[];
}

const Project: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { media, header, links, children } = props;
  const [imgId, setImgId] = useState(0);

  const handleMediaSelect = (id: number) => {
    setImgId(id);
  }

  if (React.Children.count(children) !== 2) throw new Error("required two children components");
  const [description, info] = children as React.ReactNode[];

  return (
    <section className="project">
      <header className="project-header">
        <img className="project-cover" src={media[imgId]} />
        <div className="project-media">{media.map((m, i) => i === imgId && <img onClick={() => handleMediaSelect(i)} src={m} key={m} />).filter(m => m)}</div>

        <h2>{header}</h2>
      </header>
      <section className="project-content">
        <div className="project-description">
          {description}
        </div>
        <aside className="project-info">
          {info}
        </aside>
      </section>
    </section>
  );
}

export default Project;