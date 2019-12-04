import React from "react";
import * as _ from "lodash";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SkillTree from "../components/SkillTree";
import Gallery from "../components/Gallery";
import { Note } from "../components/Card";
import Project, { ProjectLink } from "../components/Project";

import "./App.scss";

import githubLogo, { ReactComponent as Github } from "../docs/logo/github.svg";
import itchLogo, { ReactComponent as Itch } from "../docs/logo/itch.svg";

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
                <ProjectLink src={githubLogo} />
                <ProjectLink src={itchLogo} />
              </>
            }
            media={[]}
          >
            <>
              Игра написанная на <strong>Unity</strong> специально для игрового джема Weekly Game Jam
              <button className="btn d-block" style={{ marginTop: "4rem" }}>
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
      </main>
      <Footer />
    </>
  );
};

export default App;
