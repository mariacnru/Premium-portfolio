import React, { useEffect, useRef, useState } from "react";
import Arcs from "./Arcs";
import GridBackground from "./GridBackground";

function Header({ showBall, setShowBall }) {
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(e) {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    let animationId;

    function animate() {
      current.current.x += (target.current.x - current.current.x) * 0.08;

      current.current.y += (target.current.y - current.current.y) * 0.08;

      setMouse({
        x: current.current.x,
        y: current.current.y,
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <header
      onMouseEnter={function () {
        setShowBall(true);
      }}
      onMouseLeave={function () {
        setShowBall(false);
      }}
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-zinc-950
      "
    >
      {/* Ball */}
      <div
        className={`
          ball
          transition-opacity
          duration-500
          ${showBall ? "opacity-100" : "opacity-0"}
        `}
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      ></div>

      {/* Grid */}
      <GridBackground />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center">
        <Arcs />

        <span className="hero-label">Hello, I'm Maria</span>

        <h1 className="hero-title">Front-end Developer</h1>

        <p className="hero-description">
          Crafting digital experiences with code & creativity.
        </p>
      </div>
    </header>
  );
}

export default Header;
