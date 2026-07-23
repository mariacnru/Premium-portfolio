import React, { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [showBall, setShowBall] = useState(false);

  return (
    <div>
      <Navbar showBall={showBall} setShowBall={setShowBall} />

      <section id="home" className="scroll-mt-24 z-50">
        <Header showBall={showBall} setShowBall={setShowBall} />
      </section>

      <section id="about" className="scroll-mt-24 z-50">
        <AboutMe />
      </section>

      <section id="work" className="scroll-mt-24 z-50">
        <Work />
      </section>

      <section id="skills" className="scroll-mt-24 z-50">
        <Skills />
      </section>

      <section id="contact" className="scroll-mt-24 z-50">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
