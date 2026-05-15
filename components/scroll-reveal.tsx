"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Use "group" to stagger direct children */
  variant?: "single" | "group";
  /** Threshold 0–1 — how much of the element must be visible before triggering */
  threshold?: number;
};

export function ScrollReveal({
  children,
  className = "",
  variant = "single",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el); // fire once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${variant === "group" ? "reveal-group" : "reveal"} ${className}`}
    >
      {children}
    </div>
  );
}
