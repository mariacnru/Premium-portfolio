import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiTelegram2Line } from "react-icons/ri";

function Contact() {
  return (
    <section
      id="contact"
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
      {/* Background Glow */}{" "}
      <div
        className="
       pointer-events-none
       absolute
       left-1/2
       top-1/2
       h-80
       w-80
       -translate-x-1/2
       -translate-y-1/2
       rounded-full
       bg-[radial-gradient(circle,rgba(168,85,247,0.16)_0%,rgba(168,85,247,0.08)_35%,transparent_70%)]
       sm:h-125
       sm:w-125
       sm:bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,rgba(168,85,247,0.08)_40%,transparent_70%)]
     "
      ></div>
      {/* Secondary Glow */}
      <div
        className="
      pointer-events-none
      absolute
      -right-32
      top-1/3
      h-64
      w-64
      rounded-full
      bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)]
      sm:h-96
      sm:w-96
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
            Contact
          </span>

          <h2
            className="
          mt-4
          max-w-4xl
          text-5xl
          font-medium
          leading-[1.1]
          tracking-tight
          sm:text-6xl
          md:text-7xl
        "
          >
            Let's build something
            <span className="text-white/30"> meaningful together.</span>
          </h2>
        </div>

        {/* Contact Content */}
        <div
          className="
        grid
        gap-12
        lg:grid-cols-2
        lg:gap-20
      "
        >
          {/* Left */}
          <div>
            <p
              className="
            max-w-lg
            text-lg
            leading-8
            text-white/40
          "
            >
              Have an idea, a project, or just want to say hello? Feel free to
              reach out. I'm always open to discussing new projects and creative
              opportunities.
            </p>

            {/* Contact Links */}
            <div className="mt-10 flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:mariacnru@gmail.com"
                className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              p-2
              text-lg
              text-white/70
              transition-all
              duration-300
              active:scale-[0.98]
              active:bg-purple-500/5
              md:hover:text-purple-300
            "
              >
                <span
                  className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-purple-500/20
                bg-purple-500/10
                text-purple-400
                shadow-[0_0_25px_rgba(168,85,247,0.08)]
                transition-all
                duration-300
                md:group-hover:border-purple-500/40
                md:group-hover:bg-purple-500/15
                md:group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
              "
                >
                  @
                </span>

                <span className="break-all">mariacnru@gmail.com</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/maryam_ahmadabadi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              p-2
              text-lg
              text-white/70
              transition-all
              duration-300
              active:scale-[0.98]
              active:bg-purple-500/5
              md:hover:text-purple-300
            "
              >
                <span
                  className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-purple-500/20
                bg-purple-500/10
                text-purple-400
                shadow-[0_0_25px_rgba(168,85,247,0.08)]
                transition-all
                duration-300
                md:group-hover:border-purple-500/40
                md:group-hover:bg-purple-500/15
                md:group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
              "
                >
                  <RiTelegram2Line />
                </span>
                Telegram
              </a>

              {/* Phone */}
              <a
                href="tel:+989336049409"
                className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              p-2
              text-lg
              text-white/70
              transition-all
              duration-300
              active:scale-[0.98]
              active:bg-purple-500/5
              md:hover:text-purple-300
            "
              >
                <span
                  className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-purple-500/20
                bg-purple-500/10
                text-purple-400
                shadow-[0_0_25px_rgba(168,85,247,0.08)]
                transition-all
                duration-300
                md:group-hover:border-purple-500/40
                md:group-hover:bg-purple-500/15
                md:group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
              "
                >
                  <IoPhonePortraitOutline />
                </span>
                +98 933 6049 409
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex flex-wrap gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/mariacnru"
                target="_blank"
                rel="noopener noreferrer"
                className="
              rounded-full
              border
              border-white/10
              px-5
              py-2.5
              text-sm
              text-white/40
              transition-all
              duration-300
              active:scale-95
              active:border-purple-500/40
              active:bg-purple-500/10
              active:text-purple-300
              md:hover:border-purple-500/30
              md:hover:bg-purple-500/10
              md:hover:text-purple-300
            "
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Contact CTA Card */}
          <div
            className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-purple-500/20
          bg-white/[0.02]
          p-8
          backdrop-blur-xl
          shadow-[0_20px_70px_rgba(0,0,0,0.2),inset_0_0_50px_rgba(168,85,247,0.03)]
          transition-all
          duration-500
          active:scale-[0.99]
          active:border-purple-500/40
          sm:p-10
          md:border-white/10
          md:hover:border-purple-500/30
          md:hover:shadow-[0_25px_80px_rgba(0,0,0,0.3),inset_0_0_50px_rgba(168,85,247,0.05)]
        "
          >
            {/* Card Glow */}
            <div
              className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,rgba(168,85,247,0.08)_40%,transparent_70%)]
            opacity-100
            transition-all
            duration-700
            sm:-right-28
            sm:-top-28
            sm:h-72
            sm:w-72
            md:opacity-60
            md:group-hover:scale-125
            md:group-hover:opacity-100
          "
            ></div>

            {/* Bottom Glow */}
            <div
              className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-64
            w-64
            rounded-full
            bg-[radial-gradient(circle,rgba(168,85,247,0.10)_0%,transparent_70%)]
            sm:h-80
            sm:w-80
          "
            ></div>

            <div className="relative">
              {/* Badge */}
              <span
                className="
              inline-flex
              rounded-full
              border
              border-purple-500/30
              bg-purple-500/10
              px-3
              py-1.5
              text-xs
              text-purple-300
              shadow-[0_0_20px_rgba(168,85,247,0.08)]
            "
              >
                Let's connect
              </span>

              {/* Title */}
              <h3
                className="
              mt-6
              text-3xl
              font-medium
              tracking-tight
              text-white
              sm:text-4xl
            "
              >
                Have a project
                <br />
                <span className="text-white/30">in mind?</span>
              </h3>

              {/* Description */}
              <p
                className="
              mt-5
              max-w-md
              text-base
              leading-7
              text-white/40
            "
              >
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              {/* Main Email CTA */}
              <a
                href="mailto:mariacnru@gmail.com"
                className="
              group/email
              mt-8
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-purple-500/30
              bg-purple-500/10
              px-5
              py-4
              text-sm
              text-purple-200
              shadow-[0_0_25px_rgba(168,85,247,0.05)]
              transition-all
              duration-300
              active:scale-[0.98]
              active:bg-purple-500/20
              active:shadow-[0_0_35px_rgba(168,85,247,0.12)]
              md:hover:border-purple-500/50
              md:hover:bg-purple-500/20
              md:hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]
            "
              >
                <span>Send me an email</span>

                <span
                  className="
                text-lg
                transition-transform
                duration-300
                group-active/email:translate-x-1
                md:group-hover/email:translate-x-1
              "
                >
                  ↗
                </span>
              </a>

              {/* Direct Contact */}
              <div className="mt-8">
                <p
                  className="
                mb-4
                text-xs
                uppercase
                tracking-[0.2em]
                text-white/20
              "
                >
                  Or reach me directly
                </p>

                <div className="flex flex-wrap gap-3">
                  {/* Telegram */}
                  <a
                    href="https://t.me/maryam_ahmadabadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  rounded-full
                  border
                  border-white/10
                  px-5
                  py-2.5
                  text-sm
                  text-white/50
                  transition-all
                  duration-300
                  active:scale-95
                  active:border-purple-500/40
                  active:bg-purple-500/10
                  active:text-purple-300
                  md:hover:border-purple-500/30
                  md:hover:bg-purple-500/10
                  md:hover:text-purple-300
                "
                  >
                    Telegram ↗
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/mariacnru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  rounded-full
                  border
                  border-white/10
                  px-5
                  py-2.5
                  text-sm
                  text-white/50
                  transition-all
                  duration-300
                  active:scale-95
                  active:border-purple-500/40
                  active:bg-purple-500/10
                  active:text-purple-300
                  md:hover:border-purple-500/30
                  md:hover:bg-purple-500/10
                  md:hover:text-purple-300
                "
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              {/* Bottom Note */}
              <div
                className="
              mt-10
              border-t
              border-white/10
              pt-6
            "
              >
                <p className="text-sm text-white/20">
                  Usually respond within 24–48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
        mt-32
        flex
        flex-col
        gap-4
        border-t
        border-white/10
        pt-8
        text-sm
        text-white/30
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
        >
          <span>© 2026 Maria. All rights reserved.</span>

          <span>Front-end Developer</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
