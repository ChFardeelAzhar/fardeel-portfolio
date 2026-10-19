import React from "react";

export function BottomBlurOverlay() {
  return (
    <div
      aria-hidden="true"
      className="progressive-blur-container pointer-events-none fixed bottom-0 left-0 right-0 z-30 h-16"
    >
      {/* 4-tier progressive blur diffusion */}
      <div className="progressive-blur-1 absolute inset-0" />
      <div className="progressive-blur-2 absolute inset-0" />
      <div className="progressive-blur-3 absolute inset-0" />
      <div className="progressive-blur-4 absolute inset-0" />

      {/* Subtle top edge highlight line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
    </div>
  );
}
