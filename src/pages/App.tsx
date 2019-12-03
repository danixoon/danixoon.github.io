import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SkillTree from "../components/SkillTree";
import Project, { ProjectLink } from "../components/Project";

import "./App.scss";
import { Note } from "../components/Card";

import githubLogo, { ReactComponent as Github } from "../docs/logo/github.svg";
import itchLogo, { ReactComponent as Itch } from "../docs/logo/itch.svg";

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
          </Container>
        </Section>
        <Section id="my-projects" header="Мои проекты" description="Здесь ты можешь видеть проекты, в которых я принимал участие, либо же разрабатывал в одиночку">
          <Project
            header="Dragon Catch"
            links={
              <>
                <ProjectLink src={githubLogo} />
                {/* <Github /> */}
                {/* </ProjectLink> */}
                <ProjectLink src={itchLogo} />
                {/* <Itch /> */}
                {/* </ProjectLink> */}
              </>
            }
            media={[]}
          >
            <>
              Игра написанная на <strong>Unity</strong> специально для игрового джема Weekly Game Jam
              <button className="btn" style={{ marginTop: "4rem" }}>
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
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default App;
