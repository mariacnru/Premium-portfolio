import React from "react";

function Footer() {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const connectLinks = [
    {
      name: "Email ↗",
      href: "mailto:mariacnru@gmail.com",
    },
    {
      name: "GitHub ↗",
      href: "https://github.com/mariacnru",
      external: true,
    },
    {
      name: "Telegram ↗",
      href: "https://t.me/maryam_ahmadabadi",
      external: true,
    },
    {
      name: "Phone ↗",
      href: "tel:+989336049409",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Top Glow */}{" "}
      <div
        className="
       pointer-events-none
       absolute
       left-1/2
       top-0
       h-64
       w-80
       -translate-x-1/2
       -translate-y-1/2
       rounded-full
       bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,rgba(168,85,247,0.08)_40%,transparent_70%)]
       sm:h-150
       sm:w-150
     "
      ></div>
      {/* Left Glow */}
      <div
        className="
      pointer-events-none
      absolute
      -bottom-32
      -left-32
      h-64
      w-64
      rounded-full
      bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)]
      sm:h-96
      sm:w-96
    "
      ></div>
      {/* Right Glow */}
      <div
        className="
      pointer-events-none
      absolute
      -bottom-32
      -right-32
      h-64
      w-64
      rounded-full
      bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_70%)]
      sm:h-96
      sm:w-96
    "
      ></div>
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Main Footer */}
        <div
          className="
        grid
        gap-12
        border-t
        border-white/10
        py-16
        sm:grid-cols-2
        lg:grid-cols-[1.5fr_1fr_1fr]
        lg:gap-20
      "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="
            group
            inline-flex
            items-center
            font-['Zen_Dots']
            text-lg
            tracking-wider
            text-white
            transition-all
            duration-300
            active:scale-95
            active:text-purple-400
            md:hover:text-purple-400
          "
            >
              <span
                className="
              transition-all
              duration-300
              md:group-hover:[text-shadow:0_0_25px_rgba(168,85,247,0.5)]
            "
              >
                MARIA
              </span>
            </a>

            <p
              className="
            mt-5
            max-w-sm
            text-sm
            leading-7
            text-white/30
          "
            >
              Front-end Developer focused on creating modern, responsive and
              interactive digital experiences.
            </p>

            {/* Small Status */}
            <div
              className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.02]
            px-3
            py-2
            text-xs
            text-white/30
            backdrop-blur-xl
          "
            >
              <span
                className="
              h-1.5
              w-1.5
              rounded-full
              bg-purple-400
              shadow-[0_0_10px_rgba(168,85,247,0.8)]
            "
              ></span>
              Available for new opportunities
            </div>
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

            <nav className="mt-5 flex flex-col gap-3">
              {navigationLinks.map(function (link) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-2
                  text-sm
                  text-white/50
                  transition-all
                  duration-300
                  active:translate-x-1
                  active:text-purple-300
                  md:hover:translate-x-1
                  md:hover:text-purple-300
                "
                  >
                    <span>{link.name}</span>

                    <span
                      className="
                    text-purple-400
                    opacity-0
                    transition-all
                    duration-300
                    group-active:opacity-100
                    md:group-hover:opacity-100
                  "
                    >
                      ↗
                    </span>
                  </a>
                );
              })}
            </nav>
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
              {connectLinks.map(function (link) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-2
                  text-sm
                  text-white/50
                  transition-all
                  duration-300
                  active:translate-x-1
                  active:text-purple-300
                  md:hover:translate-x-1
                  md:hover:text-purple-300
                "
                  >
                    <span>{link.name}</span>

                    <span
                      className="
                    text-purple-400
                    opacity-0
                    transition-opacity
                    duration-300
                    group-active:opacity-100
                    md:group-hover:opacity-100
                  "
                    >
                      •
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
        flex
        flex-col
        gap-5
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
          group
          flex
          w-fit
          items-center
          gap-2
          text-white/30
          transition-all
          duration-300
          active:scale-95
          active:text-purple-400
          md:hover:text-purple-400
        "
          >
            <span>Back to top</span>

            <span
              className="
            transition-transform
            duration-300
            group-active:-translate-y-1
            md:group-hover:-translate-y-1
          "
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
