"use client";

/**
 * WaterdropPhoto
 * ─────────────
 * Drop-shaped portrait with frosted glass reveal on hover.
 * Terrain Coder brand — dark forest green palette, monospace labels.
 *
 * USAGE:
 *   import WaterdropPhoto from "@/components/WaterdropPhoto";
 *
 *   <WaterdropPhoto
 *     src="/profile.jpg"
 *     alt="Ayomide Apeh"
 *     coordinates="9.0765°N · 7.3986°E"
 *   />
 *
 * PROPS:
 *   src          — image path (default: /profile.jpg)
 *   alt          — alt text
 *   initials     — text shown through frost (default: "A.A")
 *   coordinates  — label below the drop (pass null to hide)
 *   width        — number in px (default: 260)
 *   className    — extra classes for the outer wrapper
 */

const DROP_PATH =
  "M120,4 C120,4 12,95 12,188 C12,248 62,292 120,292 C178,292 228,248 228,188 C228,95 120,4 120,4 Z";

const DROP_RING_PATH =
  "M120,4 C120,4 8,97 8,188 C8,251 60,296 120,296 C180,296 232,251 232,188 C232,97 120,4 120,4 Z";

export default function WaterdropPhoto({
  src = "/profile.jpg",
  alt = "Profile photo",
  initials = "A.A",
  coordinates = "9.0765°N · 7.3986°E",
  width = 4,
  className = "",
}) {
  const height = Math.round(width * 1.25);
  const scale = width / 240;

  return (
    <div
      className={`waterdrop-root ${className}`}
      style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
    >
      {/* Drop container */}
      <div
        className="waterdrop-outer"
        style={{ position: "relative", width, height }}
      >
        {/* Dashed outline ring — fades out on hover */}
        <svg
          className="waterdrop-ring"
          viewBox="0 0 240 300"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <path
            d={DROP_RING_PATH}
            fill="none"
            stroke="rgba(248, 232, 117, 0.35)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
        </svg>

        {/* Portrait photo — waterdrop clip */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="waterdrop-img"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            clipPath: `path('${DROP_PATH}')`,
            zIndex: 2,
            display: "block",
          }}
        />

        {/* Frosted glass overlay — same clip path */}
        <div
          className="waterdrop-frost"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            clipPath: `path('${DROP_PATH}')`,
            pointerEvents: "none",
          }}
        />

      </div>

      {/* Coordinate label */}
      {coordinates && (
        <p className="waterdrop-coords">{coordinates}</p>
      )}

      <style>{`
        /* ── Hover transitions ── */
        .waterdrop-outer {
          cursor: default;
        }

        .waterdrop-ring {
          transition: opacity 0.5s ease;
        }
        .waterdrop-outer:hover .waterdrop-ring {
          opacity: 0;
        }

        .waterdrop-img {
          transition: filter 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0.9);
        }
        .waterdrop-outer:hover .waterdrop-img {
          filter: brightness(1.06) saturate(1.05);
        }

        /* Frosted glass */
        .waterdrop-frost {
          background: rgba(148, 148, 148, 0.22);
          backdrop-filter: blur(px) saturate(1) brightness(1);
          -webkit-backdrop-filter: blur(3px) saturate(1) brightness(1);
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .waterdrop-outer:hover .waterdrop-frost {
          opacity: 0;
        }


        /* Coordinate label */
        .waterdrop-coords {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: rgba(74, 222, 128, 0.45);
          letter-spacing: 2px;
          margin: 0;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .waterdrop-ring,
          .waterdrop-img,
          .waterdrop-frost,
          .waterdrop-initials {
            transition: none;
          }
          .waterdrop-outer:hover .waterdrop-frost {
            opacity: 0;
          }
        }

        /* Touch devices — show photo directly, skip frost */
        @media (hover: none) and (pointer: coarse) {
          .waterdrop-frost,
          .waterdrop-initials,
          .waterdrop-ring {
            display: none;
          }
          .waterdrop-img {
            filter: brightness(1);
          }
        }
      `}</style>
    </div>
  );
}
