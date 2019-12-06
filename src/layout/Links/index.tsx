import React from "react";
import SocialLink from "../../components/SocialLink";
import Container from "../../components/Container";

import "./Links.scss";

interface LinkGroup {
  label: string;
  links: React.ReactElement[];
}
interface Props {
  data: LinkGroup[];
}
const Links: React.FC<Props> = props => {
  const { data, ...rest } = props;
  const LinkGroupComponent: React.FC<LinkGroup> = props => (
    <div className="link-group">
      <h5>{props.label}</h5>
      {props.links}
      {/*  */}
    </div>
  );

  return (
    <Container {...rest}>
      <section className="links">
        {data.map(v => (
          <LinkGroupComponent {...v} />
        ))}
        {/* 
        <div style={{ flex: 1 }}>
          <h5>Ссылки</h5>
        
        </div>
        */}
      </section>
    </Container>
  );
};

export default Links;
