import React from "react";

function Work() {
  const projects = [
    {
      title: "E-Commerce",
      description:
        "A modern e-commerce experience with product filtering, wishlist and cart management.",
      tech: ["React", "Tailwind CSS", "Context API"],
      number: "01",
    },
    {
      title: "Admin Dashboard",
      description:
        "A clean and responsive dashboard interface for managing products, users and data.",
      tech: ["React", "Recharts", "Tailwind CSS"],
      number: "02",
    },
    {
      title: "News Magazine",
      description:
        "A responsive news magazine landing page with a modern editorial layout.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      number: "03",
    },
    {
      title: "Macfolio",
      description:
        "A creative portfolio website focused on clean visuals and interactive experiences.",
      tech: ["React", "React Router", "Tailwind CSS"],
      number: "04",
    },
  ];

  return (
    <section
      id="work"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-zinc-950
        px-6
        py-32
        text-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/3
          h-100
          w-100
          rounded-full
          bg-purple-600/10
          blur-[150px]
        "
      ></div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20">
          <span
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-purple-400
            "
          >
            Selected Work
          </span>

          <div
            className="
              mt-4
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >
            <h2
              className="
                max-w-3xl
                text-4xl
                font-medium
                leading-tight
                tracking-tight
                sm:text-5xl
                md:text-6xl
              "
            >
              A selection of
              <span className="text-white/30"> things I've built.</span>
            </h2>

            <span className="text-sm text-white/30">04 — Projects</span>
          </div>
        </div>

        {/* Projects */}
        <div
          className="
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {projects.map(function (project) {
            return (
              <article
                key={project.number}
                className="
                  group
                  relative
                  min-h-105
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-purple-500/30
                  hover:bg-purple-500/[0.03]
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.3),inset_0_0_40px_rgba(168,85,247,0.06)]
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-8
                    top-8
                    text-sm
                    text-white/20
                    transition-colors
                    duration-300
                    group-hover:text-purple-400/70
                  "
                >
                  {project.number}
                </span>

                {/* Project Visual */}
                <div
                  className="
                    relative
                    mb-8
                    flex
                    h-48
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/5
                    bg-zinc-900
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      h-32
                      w-32
                      rounded-full
                      bg-purple-600/20
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:scale-150
                      group-hover:bg-purple-500/30
                    "
                  ></div>

                  {/* Fake Project Preview */}
                  <div
                    className="
                      relative
                      h-24
                      w-40
                      rotate-[-5deg]
                      rounded-lg
                      border
                      border-purple-400/20
                      bg-zinc-800/80
                      shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                      transition-all
                      duration-500
                      group-hover:rotate-0
                      group-hover:scale-110
                    "
                  >
                    <div className="flex gap-1 p-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400/60"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
                    </div>

                    <div className="mx-3 mt-3 h-2 w-16 rounded-full bg-purple-500/30"></div>

                    <div className="mx-3 mt-2 grid grid-cols-3 gap-1">
                      <div className="h-8 rounded bg-white/5"></div>
                      <div className="h-8 rounded bg-white/5"></div>
                      <div className="h-8 rounded bg-white/5"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="
                    text-2xl
                    font-medium
                    transition-colors
                    duration-300
                    group-hover:text-purple-300
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    leading-6
                    text-white/40
                  "
                >
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map(function (item) {
                    return (
                      <span
                        key={item}
                        className="
                          rounded-full
                          border
                          border-white/10
                          px-3
                          py-1
                          text-xs
                          text-white/40
                          transition-colors
                          duration-300
                          group-hover:border-purple-500/20
                          group-hover:text-purple-300/70
                        "
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>

                {/* Arrow */}
                <div
                  className="
                    absolute
                    bottom-8
                    right-8
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/40
                    transition-all
                    duration-300
                    group-hover:border-purple-500/40
                    group-hover:bg-purple-500/10
                    group-hover:text-purple-300
                  "
                >
                  ↗
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-sm
              text-white/50
              transition-all
              duration-300
              hover:border-purple-500/40
              hover:bg-purple-500/10
              hover:text-white
            "
          >
            Have a project in mind?
            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              Let's talk ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
