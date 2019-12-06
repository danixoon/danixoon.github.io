import React from "react";
import * as _ from "lodash";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

import Section from "../components/Section";
import Container from "../components/Container";
import SkillTree from "../components/SkillTree";
import Gallery from "../components/Gallery";
import { Note } from "../components/Card";
import Project, { ProjectLink } from "../layout/Project";
import SocialLink from "../components/SocialLink";

import Links from "../layout/Links";

import "./App.scss";

import githubLogoWhitePng from "../docs/logo/github-white.png";
import itchLogoWhitePng from "../docs/logo/itch-white.png";

// Logotypes
import vkLogoPng from "../docs/logo/vk.png";
import gmailLogoPng from "../docs/logo/gmail.png";
import githubLogoPng from "../docs/logo/github.png";
import itchLogoPng from "../docs/logo/itch.png";

import dragonCatch1 from "../docs/media/dragon-catch-1.png";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="responsive">
        <Section
          id="about-me"
          header="Обо мне"
          description="Добро пожаловать в моё портфолио! Здесь ты можешь узнать, кто я и чем люблю заниматься, а главное - как я могу тебе пригодиться ;)"
        >
          <Container>
            <section>
              <Note style={{ flex: 1 }}>Ты читаешь о девятнадцатилетнем студенте-погромисте, который обожает код и всё, что с этим связано</Note>
              <SkillTree style={{ flex: 1 }} header="Что я умею">
                <a href="#" className="color-text">
                  <strong className="color-primary">Frontend</strong> на HTML | CSS | JS
                </a>
                <a href="#" className="color-text">
                  <strong className="color-primary">Backend</strong> на Node JS
                </a>
                <a href="#" className="color-text">
                  <strong className="color-primary">Игры</strong> на C# и Unity
                </a>
              </SkillTree>
            </section>
          </Container>
        </Section>
        <Section id="my-projects" header="Мои проекты" description="Здесь ты можешь видеть проекты, в которых я принимал участие, либо же разрабатывал в одиночку">
          <Project
            header="Dragon Catch"
            links={
              <>
                <ProjectLink href="https://github.com/danixoon" src={githubLogoWhitePng} />
                <ProjectLink href="https://danixoon.itch.io/dragon-catch" src={itchLogoWhitePng} />
              </>
            }
            media={[]}
          >
            <>
              Игра написанная на <strong>Unity</strong> специально для игрового джема Weekly Game Jam
              <button className="btn d-block" style={{ width: "100%", marginTop: "4rem"}}>
                Играть
              </button>
            </>
            <>
              <h3 className="text-thin mt-0"> Технологии создания </h3>
              <ul>
                <li> UnityEngine </li>
                <li> C# </li>
              </ul>
            </>
          </Project>
          <Gallery sources={_.range(20).map(v => dragonCatch1)} />
        </Section>
        <Links
          data={[
            {
              label: "Соцсети",
              links: [
                <SocialLink href="https://vk.com/danux" socialImg={vkLogoPng}>
                  vk.com/danux
                </SocialLink>,
                <SocialLink href="mailto:danixoon@gmail.com" socialImg={gmailLogoPng}>
                  danixoon@gmail.com
                </SocialLink>
              ]
            },
            {
              label: "Ссылки",
              links: [
                <SocialLink href="https://github.com/danixoon" socialImg={githubLogoPng}>
                  github.com/danixoon
                </SocialLink>,
                <SocialLink href="https://danixoon.itch.io" socialImg={itchLogoPng}>
                  danixoon.itch.io
                </SocialLink>
              ]
            }
          ]}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
