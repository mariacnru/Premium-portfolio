import React, { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [showBall, setShowBall] = useState(false);


  return (
    <div>
      <Navbar showBall={showBall} setShowBall={setShowBall} />
      <Header showBall={showBall} setShowBall={setShowBall} />

      <section id="about" className="scroll-mt-24">
        ...
      </section>

      <section id="work" className="scroll-mt-24">
        ...
      </section>

      <section id="skills" className="scroll-mt-24">
        ...
      </section>

      <section id="contact" className="scroll-mt-24">
        ...
      </section>
    </div>
  );
}

export default App;
