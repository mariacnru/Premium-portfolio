import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiTelegram2Line, RiTelegramLine } from "react-icons/ri";

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

            {/* Email */}
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
      text-lg
      text-white/70
      transition-colors
      duration-300
      hover:text-purple-300
    "
              >
                <span
                  className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        text-purple-400
        transition-all
        duration-300
        group-hover:border-purple-500/30
        group-hover:bg-purple-500/10
      "
                >
                  @
                </span>
                mariacnru@gmail.com
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
      text-lg
      text-white/70
      transition-colors
      duration-300
      hover:text-purple-300
    "
              >
                <span
                  className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        text-purple-400
        transition-all
        duration-300
        group-hover:border-purple-500/30
        group-hover:bg-purple-500/10
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
      text-lg
      text-white/70
      transition-colors
      duration-300
      hover:text-purple-300
    "
              >
                <span
                  className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        text-purple-400
        transition-all
        duration-300
        group-hover:border-purple-500/30
        group-hover:bg-purple-500/10
      "
                >
                  <IoPhonePortraitOutline />
                </span>
                +98 933 6049 409
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-3">
              <a
                href="https://github.com/mariacnru"
                target="_blank"
                rel="noreferrer"
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
                  hover:border-purple-500/30
                  hover:bg-purple-500/10
                  hover:text-purple-300
                "
              >
                GitHub ↗
              </a>

              <a
                href="#"
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
                  hover:border-purple-500/30
                  hover:bg-purple-500/10
                  hover:text-purple-300
                "
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              p-6
              backdrop-blur-xl
              sm:p-8
            "
          >
            {/* Name */}
            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  text-white/40
                "
              >
                Your Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-all
                  duration-300
                  focus:border-purple-500/40
                  focus:bg-purple-500/[0.03]
                  focus:ring-1
                  focus:ring-purple-500/20
                "
              />
            </div>

            {/* Email */}
            <div className="mt-6">
              <label
                className="
                  mb-2
                  block
                  text-sm
                  text-white/40
                "
              >
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-all
                  duration-300
                  focus:border-purple-500/40
                  focus:bg-purple-500/[0.03]
                  focus:ring-1
                  focus:ring-purple-500/20
                "
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                className="
                  mb-2
                  block
                  text-sm
                  text-white/40
                "
              >
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-all
                  duration-300
                  focus:border-purple-500/40
                  focus:bg-purple-500/[0.03]
                  focus:ring-1
                  focus:ring-purple-500/20
                "
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                group
                mt-6
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-purple-500
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-purple-400
                hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
              "
            >
              Send Message
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </button>
          </form>
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
