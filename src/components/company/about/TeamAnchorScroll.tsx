"use client";

import { useEffect } from "react";

export function TeamAnchorScroll() {
  useEffect(() => {
    if (window.location.hash !== "#team") return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById("team")?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
