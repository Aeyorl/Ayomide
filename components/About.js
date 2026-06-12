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
