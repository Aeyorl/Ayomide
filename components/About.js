"use client";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./About.module.css";

export default function About() {
  const ref = useIntersectionObserver();

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.aboutInner}>
        <div className={styles.aboutText}>
          <p className="section-label animate-on-scroll">GROUND TRUTH</p>
          <h2 className={`${styles.aboutTitle} animate-on-scroll`}>
            I build things that understand <span className={styles.keywordHighlight}>space, data, and the chain.</span>
          </h2>
          <p className={`${styles.aboutDescription} animate-on-scroll`}>
            Final-year Geology student at Federal University Lokoja. My work spans{" "}
            <strong>GIS/remote sensing, AI-powered workflows, drone cinematography, and blockchain development</strong>  each discipline feeds the others.
          </p>
          <p className={`${styles.aboutDescription} animate-on-scroll`}>
            I’ve shipped production payment infrastructure on USDC/ARC Network, automated geospatial digitizing with ONNX inference, and built Web3 tooling for the Solana ecosystem. I don’t just learn stacks, I ship with them.
          </p>

          <div className={`${styles.aboutTags} animate-on-scroll`}>
            <span className={styles.aboutTag}>ArcGIS · QGIS · </span>
            <span className={styles.aboutTag}>Node.js · TypeScript</span>
            <span className={styles.aboutTag}>Solana · Web3</span>
            <span className={styles.aboutTag}>AI Systems</span>
            <span className={styles.aboutTag}>Remote Sensing</span>
          </div>

          <div className="animate-on-scroll" style={{ marginTop: "24px", marginBottom: "32px" }}>
            <a
              href="/Ayomide_Apeh_CV.pdf"
              download="Ayomide_Apeh_CV.pdf"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              <span>Download Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          <div className={`${styles.aboutHighlights} animate-on-scroll`}>
            <div className={styles.highlight}>
              <span className={styles.highlightNumber}>2+</span>
              <span className={styles.highlightLabel}>EXPERIENCE</span>
            </div>
            <div className={styles.highlight}>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightNumber}>5+</span>
              <span className={styles.highlightLabel}>PROJECTS</span>
            </div>
          </div>
        </div>

        <div className={`${styles.aboutImageWrapper} animate-on-scroll`}>
          <Image
            src="/profile-placeholder.png"
            alt="Profile photo"
            width={420}
            height={560}
            className={styles.aboutImage}
            priority={false}
          />
          <div className={styles.imageAccent} />
        </div>
      </div>
    </section>
  );
}
