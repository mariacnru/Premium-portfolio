import React, { useEffect, useRef, useState } from "react";
import Arcs from "./Header/Arcs";

function Header() {
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

    function animate() {
      current.current.x += (target.current.x - current.current.x) * 0.08;

      current.current.y += (target.current.y - current.current.y) * 0.08;

      setMouse({
        x: current.current.x,
        y: current.current.y,
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
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
        className="ball"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      ></div>

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          z-10
          grid
          grid-cols-4
          sm:grid-cols-6
          md:grid-cols-8
          lg:grid-cols-10
          xl:grid-cols-12
          gap-2
          p-2
        "
      >
        {Array.from({ length: 200 }).map(function (_, index) {
          return (
            <div
              key={index}
              className="
                aspect-square
                rounded-xl
                bg-transparent
                backdrop-blur-md
              "
            ></div>
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center">
        {/* Arcs */}
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
