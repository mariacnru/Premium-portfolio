import React from "react";

function Arcs() {
  return (
    <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Arc 1 */}
      <div
        className="
      absolute
      left-1/2
      top-1/2
      h-80
      w-150
      -translate-x-1/2
      -translate-y-1/2
      rounded-t-full
      border
      border-b-0
      border-violet-500/20
    "
      ></div>

      {/* Arc 2 */}
      <div
        className="
      absolute
      left-1/2
      top-1/2
      h-96
      w-175
      -translate-x-1/2
      -translate-y-1/2
      rounded-t-full
      border
      border-b-0
      border-violet-500/10
    "
      ></div>

      {/* Arc 3 */}
      <div
        className="
      absolute
      left-1/2
      top-1/2
      h-112
      w-200
      -translate-x-1/2
      -translate-y-1/2
      rounded-t-full
      border
      border-b-0
      border-violet-500/5
    "
      ></div>
    </div>
  );
}

export default Arcs;
