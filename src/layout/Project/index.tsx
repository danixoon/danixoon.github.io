import React, { useState } from "react";

import "./Project.scss";
import { Mark } from "../../components/Icon";
import Container from "../../components/Container";
import Gallery from "../../components/Gallery";

const { useSpring, animated, interpolate } = require("react-spring");

interface Props {
  header: string;
  media: string[];

  links: React.ReactChild;
}

interface ProjectLinkProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
  href: string;
}
export const ProjectLink: React.FC<React.PropsWithChildren<ProjectLinkProps>> = props => {
  const [{ opacity, y, scale }, setLink] = useSpring(() => ({ opacity: 0, y: 20, scale: 1, config: { mass: 1, tension: 500, friction: 20 } }));
  const handleMouseEnter = () => {
    setLink({ opacity: 1, y: 0, scale: 1.2 });
  };
  const handleMouseLeave = () => {
    setLink({ opacity: 0, y: 20, scale: 1 });
  };

  const markTransform = interpolate([y.interpolate((v: any) => v) as any], (y: any) => `translateY(${y}px)`) as any;
  const iconTransform = interpolate([scale.interpolate((v: any) => v) as any], (s: any) => `scale(${s})`) as any;
  const fillOpacity = opacity.interpolate((v: any) => v) as any;

  // console.log(ty);

  // console.log(props.children);

  // const Icon = animated((pr: any) => React.cloneElement(React.Children.only(props.children as any), pr));
  const Icon = animated((pr: any) => <img {...pr} src={props.src} />);
  const MarkIcon = animated((pr: any) => <Mark {...pr} />);

  return (
    <a href={props.href} className="project-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Icon style={{ transform: iconTransform }} />
      <MarkIcon style={{ fillOpacity, transform: markTransform }} />
    </a>
  );
};

interface ProjectFooterProps {}
const ProjectFooter: React.FC<React.PropsWithChildren<ProjectFooterProps>> = props => {
  const { children } = props;
  return <footer className="project-footer">{children}</footer>;
};

const Project: React.FC<React.PropsWithChildren<Props>> = props => {
  const { media, header, links, children } = props;
  const [imgId, setImgId] = useState(0);

  const handleMediaSelect = (id: number) => {
    setImgId(id);
  };

  if (React.Children.count(children) !== 2) throw new Error("required two children components");
  const [description, info] = children as React.ReactNode[];

  console.log(links);

  return (
    <section className="project">
      <header className="project-header">
        <img className="project-cover" src={media[imgId]} />
        <div className="project-media">{media.map((m, i) => i === imgId && <img onClick={() => handleMediaSelect(i)} src={m} key={m} />).filter(m => m)}</div>

        <h2>{header}</h2>
      </header>
      <Container>
        <div className="project-content">
          <div className="project-description">{description}</div>
          <aside className="project-info">{info}</aside>
        </div>
      </Container>
      <ProjectFooter>{React.Children.map(links, c => c)}</ProjectFooter>

      {/* <footer className="project-footer">{links}</footer> */}
    </section>
  );
};

export default Project;
