import React from "react";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Top Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-75
          w-150
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      ></div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Main Footer */}
        <div
          className="
            flex
            flex-col
            gap-12
            border-t
            border-white/10
            py-16
            md:flex-row
            md:items-start
            md:justify-between
          "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="
                font-['Zen_Dots']
                text-lg
                tracking-wider
                text-white
                transition-colors
                duration-300
                hover:text-purple-400
              "
            >
              MARIA
            </a>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-white/30
              "
            >
              Front-end Developer focused on creating modern, responsive and
              interactive digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Navigation
            </span>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#home"
                className="
                  w-fit
                  text-sm
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-purple-300
                "
              >
                Home
              </a>

              <a
                href="#about"
                className="
                  w-fit
                  text-sm
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-purple-300
                "
              >
                About
              </a>

              <a
                href="#work"
                className="
                  w-fit
                  text-sm
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-purple-300
                "
              >
                Work
              </a>

              <a
                href="#skills"
                className="
                  w-fit
                  text-sm
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-purple-300
                "
              >
                Skills
              </a>

              <a
                href="#contact"
                className="
                  w-fit
                  text-sm
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-purple-300
                "
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <span
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Connect
            </span>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:mariacnru@gmail.com"
                className="
                  text-sm
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-purple-300
                "
              >
                Email ↗
              </a>

              <a
                href="https://github.com/mariacnru"
                target="_blank"
                rel="noreferrer"
                className="
                  text-sm
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-purple-300
                "
              >
                GitHub ↗
              </a>

              <a
                href="https://t.me/your_username"
                target="_blank"
                rel="noreferrer"
                className="
                  text-sm
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-purple-300
                "
              >
                Telegram ↗
              </a>

              <a
                href="tel:+994XXXXXXXXX"
                className="
                  text-sm
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-purple-300
                "
              >
                Phone ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-6
            text-xs
            text-white/20
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>© 2026 Maria. All rights reserved.</span>

          <span>Designed & Built with React</span>

          <a
            href="#home"
            className="
              transition-colors
              duration-300
              hover:text-purple-400
            "
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
