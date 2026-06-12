"use client";

import { useEffect, useRef, useState } from "react";

/**
 * TerrainCursor — Magnetic trailing fluid cursor
 * Drop this into your Next.js layout and wrap your page with it.
 *
 * Usage:
 *   import TerrainCursor from "@/components/TerrainCursor";
 *   // In your root layout or _app:
 *   <TerrainCursor />
 *
 * The component:
 * - Hides the default cursor globally
 * - Renders a solid dot (inner) + fluid ring (outer) that trails with easing
 * - Magnetically snaps to buttons, links, and [data-magnetic] elements
 * - Expands on hover over interactive elements
 * - Respects prefers-reduced-motion
 */

export default function TerrainCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    const LERP = 0.12; // lower = more trailing lag (0.05–0.2 range)

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      if (dotRef.current && ringRef.current) {
        // Dot: snaps directly to mouse
        dotRef.current.style.transform = `translate(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px)`;

        // Ring: lerp toward mouse for fluid trailing
        ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, LERP);
        ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, LERP);
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Magnetic hover detection
    const onPointerOver = (e) => {
      const target = e.target.closest(
        "a, button, [data-magnetic], input, textarea, select, label"
      );
      if (target) setIsHovering(true);
    };
    const onPointerOut = (e) => {
      const target = e.target.closest(
        "a, button, [data-magnetic], input, textarea, select, label"
      );
      if (target) setIsHovering(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Hide cursor globally — component re-adds its own */
        *, *::before, *::after { cursor: none !important; }

        .tc-cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4ade80; /* bright green dot */
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          transition:
            opacity 0.3s ease,
            width 0.2s ease,
            height 0.2s ease,
            background 0.2s ease;
        }

        .tc-cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(74, 222, 128, 0.5); /* forest green ring */
          pointer-events: none;
          z-index: 99998;
          will-change: transform;
          transition:
            opacity 0.3s ease,
            width 0.25s cubic-bezier(0.23, 1, 0.32, 1),
            height 0.25s cubic-bezier(0.23, 1, 0.32, 1),
            border-color 0.2s ease,
            background 0.2s ease;
        }

        /* Hidden state */
        .tc-cursor-dot.hidden,
        .tc-cursor-ring.hidden {
          opacity: 0;
        }

        /* Hover expansion */
        .tc-cursor-dot.hovering {
          width: 12px; height: 12px;
          background: #86efac;
        }
        .tc-cursor-ring.hovering {
          width: 56px; height: 56px;
          border-color: rgba(74, 222, 128, 0.8);
          background: rgba(74, 222, 128, 0.06);
        }

        /* Click compression */
        .tc-cursor-dot.clicking {
          width: 5px; height: 5px;
          background: #166534;
        }
        .tc-cursor-ring.clicking {
          width: 32px; height: 32px;
          border-color: rgba(22, 101, 52, 0.9);
        }

        /* Touch devices: hide entirely */
        @media (hover: none) and (pointer: coarse) {
          .tc-cursor-dot, .tc-cursor-ring { display: none !important; }
          *, *::before, *::after { cursor: auto !important; }
        }
      `}</style>

      {/* Inner dot */}
      <div
        ref={dotRef}
        className={[
          "tc-cursor-dot",
          !isVisible ? "hidden" : "",
          isHovering && !isClicking ? "hovering" : "",
          isClicking ? "clicking" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />

      {/* Outer trailing ring */}
      <div
        ref={ringRef}
        className={[
          "tc-cursor-ring",
          !isVisible ? "hidden" : "",
          isHovering && !isClicking ? "hovering" : "",
          isClicking ? "clicking" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </>
  );
}
