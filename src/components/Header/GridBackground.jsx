import React from "react";

function GridBackground() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-10
        grid
        grid-cols-4
        gap-2
        p-2
        sm:grid-cols-6
        md:grid-cols-8
        lg:grid-cols-10
        xl:grid-cols-12
      "
    >
      {Array.from({ length: 48 }).map(function (_, index) {
        return (
          <div
            key={index}
            className="
              aspect-square
              rounded-xl
              bg-zinc-950/1
              backdrop-blur-md
            "
          ></div>
        );
      })}
    </div>
  );
}

export default GridBackground;
