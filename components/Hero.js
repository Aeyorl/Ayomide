"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>

      <div className={styles.heroContent}>
        <p className={styles.greeting}>Hello, I&rsquo;m</p>
        <h1 className={styles.name}>Ayomide Apeh</h1>
        <p className={styles.role}>
          Geospatial Analyst, AI Systems Builder, and Full-Stack Developer
          bridging geology, spatial data, and decentralized systems.
        </p>
        <div className={styles.heroCta}>
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            View My Work
          </a>
          <a href="#contact" className="btn-ghost" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            Get in Touch
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}