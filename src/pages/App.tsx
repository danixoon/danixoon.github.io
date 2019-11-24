import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";

import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Paragraph
          header="Обо мне"
          content="Добро пожаловать в моё портфолио!
Здесь ты можешь узнать, кто я и чем люблю заниматься, а главное - как я могу тебе пригодиться ;)"
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
