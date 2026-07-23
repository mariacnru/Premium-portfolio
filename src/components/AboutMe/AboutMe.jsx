import React from "react";

function AboutMe() {
  return (
    <section
      id="about"
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
    left-1/2
    top-1/2
    h-125
    w-125
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,rgba(168,85,247,0.08)_35%,transparent_70%)]
  "
      ></div>

      <div
        className="
          relative
          mx-auto
          max-w-6xl
        "
      >
        {/* Section Header */}
        <div className="mb-20">
          <span
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-purple-400
            "
          >
            About Me
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
            I build digital experiences
            <span className="text-white/30">
              {" "}
              that feel as good as they look.
            </span>
          </h2>
        </div>

        {/* Content */}
        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Description */}
          <div>
            <p
              className="
                max-w-xl
                text-lg
                leading-8
                text-white/50
              "
            >
              I'm Maria, a Front-end Developer passionate about creating modern,
              interactive and user-friendly digital experiences.
            </p>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-white/50
              "
            >
              I enjoy turning ideas into clean, responsive interfaces using
              modern technologies and thoughtful design.
            </p>

            <a
              href="#work"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-purple-500/30
                bg-purple-500/10
                px-6
                py-3
                text-sm
                text-purple-300
                transition-all
                duration-300
                hover:border-purple-400/60
                hover:bg-purple-500/20
                hover:text-white
                hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
              "
            >
              Explore My Work
              <span className="text-lg">↗</span>
            </a>
          </div>

          {/* Stats */}
          <div
            className="
              grid
              grid-cols-2
              gap-4
            "
          >
            {/* Stat */}
            <div
              className="
                group
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
                hover:bg-purple-500/[0.04]
                hover:shadow-[inset_0_0_30px_rgba(168,85,247,0.08),0_20px_50px_rgba(0,0,0,0.2)]
              "
            >
              <span
                className="
                  text-4xl
                  font-medium
                  text-white
                "
              >
                8+
              </span>

              <p className="mt-3 text-sm text-white/40">Projects Built</p>
            </div>

            {/* Stat */}
            <div
              className="
                group
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
                hover:bg-purple-500/[0.04]
                hover:shadow-[inset_0_0_30px_rgba(168,85,247,0.08),0_20px_50px_rgba(0,0,0,0.2)]
              "
            >
              <span
                className="
                  text-4xl
                  font-medium
                  text-white
                "
              >
                5+
              </span>

              <p className="mt-3 text-sm text-white/40">Technologies</p>
            </div>

            {/* Stat */}
            <div
              className="
                group
                col-span-2
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
                hover:bg-purple-500/[0.04]
                hover:shadow-[inset_0_0_30px_rgba(168,85,247,0.08),0_20px_50px_rgba(0,0,0,0.2)]
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-4xl text-white">∞</span>

                  <p className="mt-3 text-sm text-white/40">
                    Curiosity & Creativity
                  </p>
                </div>

                <div
                  className="
                    h-16
                    w-16
                    rounded-full
                    border
                    border-purple-500/20
                    bg-purple-500/10
                    shadow-[0_0_40px_rgba(168,85,247,0.2)]
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
