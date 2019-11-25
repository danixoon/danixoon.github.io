import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SkillTree from "../components/SkillTree";

import "./App.scss";
import { Note } from "../components/Card";

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
          прив
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default App;
