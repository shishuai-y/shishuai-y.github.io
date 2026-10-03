"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main .section-heading, main .publication, main .repository, main .service-grid > article, main .award-item",
      ),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" },
    );

    const showAll = () => {
      observer.disconnect();
      for (const element of elements) {
        element.classList.remove("reveal-pending");
      }
    };

    if (!preference.matches) {
      for (const element of elements) {
        // Only animate offscreen content so hydration never hides visible text.
        if (element.getBoundingClientRect().top < window.innerHeight) continue;
        element.classList.add("reveal-target", "reveal-pending");
        observer.observe(element);
      }
    }

    const handlePreference = () => {
      if (preference.matches) showAll();
    };
    const handleFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest(".reveal-pending");
      if (!element) return;
      element.classList.remove("reveal-pending");
      observer.unobserve(element);
    };

    preference.addEventListener("change", handlePreference);
    document.addEventListener("focusin", handleFocus);
    return () => {
      showAll();
      for (const element of elements) element.classList.remove("reveal-target");
      preference.removeEventListener("change", handlePreference);
      document.removeEventListener("focusin", handleFocus);
    };
  }, []);

  return null;
}
