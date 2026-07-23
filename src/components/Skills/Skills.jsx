import React from "react";

function Skills() {
  const mainSkills = [
    {
      name: "JavaScript",
      category: "Language",
      level: "Advanced",
      symbol: "JS",
    },
    {
      name: "React",
      category: "Frontend",
      level: "Advanced",
      symbol: "R",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      level: "Advanced",
      symbol: "TW",
    },
    {
      name: "TypeScript",
      category: "Language",
      level: "Learning",
      symbol: "TS",
    },
    {
      name: "Context API",
      category: "State Management",
      level: "Advanced",
      symbol: "CA",
    },
    {
      name: "React Router",
      category: "Frontend",
      level: "Advanced",
      symbol: "RR",
    },
  ];

  const otherSkills = [
    "REST API",
    "Postman",
    "Firebase",
    "Zod",
    "RegEx",
    "Recharts",
    "ApexCharts",
    "Git & GitHub",
  ];

  return (
    <section
      id="skills"
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
          -left-40
          top-1/2
          h-125
          w-125
          -translate-y-1/2
          rounded-full
          bg-purple-600/20
          opacity-70
          blur-[100px]
          sm:bg-purple-600/15
          sm:blur-[120px]
          md:bg-purple-600/10
          md:blur-[150px]
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
            Skills & Tools
          </span>

          <h2
            className="
              mt-4
              max-w-3xl
              text-4xl
              font-medium
              leading-tight
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            The tools I use to
            <span className="text-white/30"> turn ideas into interfaces.</span>
          </h2>
        </div>

        {/* Main Skills */}
        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {mainSkills.map(function (skill, index) {
            return (
              <div
                key={skill.name}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  active:scale-[0.98]
                  active:border-purple-500/30
                  active:bg-purple-500/[0.04]
                  active:shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_0_40px_rgba(168,85,247,0.06)]

                  md:hover:-translate-y-2
                  md:hover:border-purple-500/30
                  md:hover:bg-purple-500/[0.04]
                  md:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_0_40px_rgba(168,85,247,0.06)]
                "
              >
                {/* Card Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-purple-600/20
                    opacity-70
                    blur-[60px]
                    transition-all
                    duration-500

                    active:scale-125
                    active:bg-purple-600/30
                    active:opacity-100

                    md:opacity-0
                    md:blur-3xl
                    md:group-hover:scale-125
                    md:group-hover:bg-purple-600/30
                    md:group-hover:opacity-100
                  "
                ></div>

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <span
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      text-sm
                      font-medium
                      text-purple-300
                      transition-all
                      duration-500

                      active:rotate-6
                      active:border-purple-400/30
                      active:bg-purple-500/10
                      active:shadow-[0_0_30px_rgba(168,85,247,0.2)]

                      md:group-hover:rotate-6
                      md:group-hover:border-purple-400/30
                      md:group-hover:bg-purple-500/10
                      md:group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
                    "
                  >
                    {skill.symbol}
                  </span>

                  <span
                    className="
                      text-xs
                      text-white/20
                      transition-colors
                      duration-300

                      active:text-purple-400/60

                      md:group-hover:text-purple-400/60
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="
                    relative
                    mt-8
                    text-xl
                    font-medium
                    text-white/90
                    transition-colors
                    duration-300

                    active:text-purple-300

                    md:group-hover:text-purple-300
                  "
                >
                  {skill.name}
                </h3>

                {/* Info */}
                <div className="relative mt-3 flex items-center justify-between">
                  <span className="text-sm text-white/30">
                    {skill.category}
                  </span>

                  <span
                    className="
                      text-xs
                      text-white/20
                      transition-colors
                      duration-300

                      active:text-white/50

                      md:group-hover:text-white/50
                    "
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Bottom Line */}
                <div
                  className="
                  hidden md:block
                    relative
                    mt-6
                    h-px
                    w-full
                    overflow-hidden
                    bg-white/10
                  "
                >
                  <div
                    className="
                      h-full
                      w-1/3
                      bg-purple-500/60
                      shadow-[0_0_15px_rgba(168,85,247,0.8)]
                      transition-all
                      duration-700

                      active:w-full

                      md:w-0
                      md:group-hover:w-full
                    "
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Skills */}
        <div className="mt-24">
          {/* Title */}
          <div className="mb-8 flex items-center gap-5">
            <span
              className="
                whitespace-nowrap
                text-sm
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Other Tools & Technologies
            </span>

            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          {/* Small Cards */}
          <div className="flex flex-wrap gap-3">
            {otherSkills.map(function (skill) {
              return (
                <div
                  key={skill}
                  className="
                    group
                    flex
                    cursor-default
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-5
                    py-3
                    backdrop-blur-xl
                    transition-all
                    duration-300

                    active:scale-[0.96]
                    active:border-purple-500/30
                    active:bg-purple-500/[0.06]
                    active:shadow-[0_10px_30px_rgba(168,85,247,0.1)]

                    md:hover:-translate-y-1
                    md:hover:border-purple-500/30
                    md:hover:bg-purple-500/[0.06]
                    md:hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]
                  "
                >
                  {/* Dot */}
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-purple-400/60
                      shadow-[0_0_8px_rgba(168,85,247,0.4)]
                      transition-all
                      duration-300

                      active:bg-purple-400
                      active:shadow-[0_0_10px_rgba(168,85,247,0.8)]

                      md:bg-white/20
                      md:shadow-none
                      md:group-hover:bg-purple-400
                      md:group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]
                    "
                  ></span>

                  {/* Name */}
                  <span
                    className="
                      text-sm
                      text-white/40
                      transition-colors
                      duration-300

                      active:text-purple-300

                      md:group-hover:text-purple-300
                    "
                  >
                    {skill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-20
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-sm text-white/30">
            Always learning. Always building.
          </p>

          <span className="text-sm text-purple-400/60">06 — Skills</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
