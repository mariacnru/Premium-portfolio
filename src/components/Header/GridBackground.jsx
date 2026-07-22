import React from "react";

function GridBackground() {
  return (
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
  );
}

export default GridBackground;
