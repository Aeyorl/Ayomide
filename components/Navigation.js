"use client";
import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import styles from "./Navigation.module.css";

const sections = ["about", "skills", "projects", "contact"];
const labels = { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" };

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sections);

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav} id="nav">
      <div className={styles.navInner}>
        <a href="#hero" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          Ayomide Apeh
        </a>

        <div className={styles.navLinks}>
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.navLink} ${activeId === id ? styles.navLinkActive : ""}`}
              onClick={(e) => { e.preventDefault(); handleClick(id); }}
            >
              {labels[id]}
            </a>
          ))}
          <a
            href="/Ayomide_Apeh_CV.pdf"
            download="Ayomide_Apeh_CV.pdf"
            className={styles.resumeButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            href="#contact"
            className={styles.ctaButton}
            onClick={(e) => { e.preventDefault(); handleClick("contact"); }}
          >
            Get in Touch
          </a>
        </div>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </div>

      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.mobileDrawerOpen : ""}`}>
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={styles.mobileLink}
            onClick={(e) => { e.preventDefault(); handleClick(id); }}
          >
            {labels[id]}
          </a>
        ))}
        <a
          href="/Ayomide_Apeh_CV.pdf"
          download="Ayomide_Apeh_CV.pdf"
          className={styles.resumeButton}
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "10px 0" }}
        >
          Resume
        </a>
        <a
          href="#contact"
          className="btn-primary"
          onClick={(e) => { e.preventDefault(); handleClick("contact"); }}
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
