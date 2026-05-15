"use client";

import { useEffect, useState } from "react";

export function MobileEmailChip() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 200);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="mailto:david@havs.dk"
      data-print-hide
      aria-label="Email David Hav"
      className={`
        md:hidden fixed bottom-6 right-4 z-40
        flex items-center gap-2 px-4 py-2.5
        bg-ink text-paper text-xs font-medium tracking-wide
        shadow-lg transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      {/* Envelope icon */}
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true">
        <rect x="0.5" y="0.5" width="13" height="10" stroke="currentColor" strokeWidth="1"/>
        <path d="M0.5 0.5L7 6L13.5 0.5" stroke="currentColor" strokeWidth="1"/>
      </svg>
      david@havs.dk
    </a>
  );
}
