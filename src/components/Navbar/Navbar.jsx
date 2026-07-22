import React from "react";

function Navbar({ showBall, setShowBall }) {
  return (
    <nav
      onMouseEnter={function () {
        setShowBall(true);
      }}
      className="
        fixed
        left-1/2
        top-5
        z-50
        flex
        w-[calc(100%-2rem)]
        max-w-5xl
        -translate-x-1/2
        items-center
        justify-between
        rounded-full
        border
        border-white/10
        bg-zinc-950/60
        px-5
        py-3
        shadow-[0_10px_40px_rgba(0,0,0,0.3)]
        backdrop-blur-xl
      "
    >
      {/* Logo */}
      <a
        href="#home"
        className="
          font-['Zen_Dots']
          text-sm
          tracking-wider
          text-white
          transition
          duration-300
          hover:text-purple-400
        "
      >
        MARIA
      </a>

      {/* Navigation */}
      <div
        className="
          hidden
          items-center
          gap-1
          sm:flex
        "
      >
        <a
          href="#home"
          className="
            rounded-full
            px-4
            py-2
            text-sm
            text-white/50
            transition-all
            duration-300
            hover:bg-white/5
            hover:text-white
          "
        >
          Home
        </a>

        <a
          href="#about"
          className="
            rounded-full
            px-4
            py-2
            text-sm
            text-white/50
            transition-all
            duration-300
            hover:bg-white/5
            hover:text-white
          "
        >
          About
        </a>

        <a
          href="#work"
          className="
            rounded-full
            px-4
            py-2
            text-sm
            text-white/50
            transition-all
            duration-300
            hover:bg-white/5
            hover:text-white
          "
        >
          Work
        </a>

        <a
          href="#skills"
          className="
            rounded-full
            px-4
            py-2
            text-sm
            text-white/50
            transition-all
            duration-300
            hover:bg-white/5
            hover:text-white
          "
        >
          Skills
        </a>

        <a
          href="#contact"
          className="
            rounded-full
            px-4
            py-2
            text-sm
            text-white/50
            transition-all
            duration-300
            hover:bg-white/5
            hover:text-white
          "
        >
          Contact
        </a>
      </div>

      {/* Contact Button */}
      <a
        href="#contact"
        className="
          rounded-full
          border
          border-purple-400/30
          bg-purple-500/10
          px-4
          py-2
          text-xs
          font-medium
          text-purple-300
          transition-all
          duration-300
          hover:border-purple-400/60
          hover:bg-purple-500/20
          hover:text-white
          hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
        "
      >
        Let's Talk
      </a>
    </nav>
  );
}

export default Navbar;
