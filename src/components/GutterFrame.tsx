import React from "react";

export function GutterFrame() {
  return (
    <>
      {/* Background analog grain noise */}
      <div className="noise-overlay fixed inset-0 z-0 pointer-events-none" />

      {/* Vertical container grid lines matching reference layout */}
      <div className="custom:mx-auto pointer-events-none absolute inset-0 z-0 mx-3.5 max-w-6xl border-x border-slate-200/80 md:mx-5 lg:mx-8" />
    </>
  );
}
