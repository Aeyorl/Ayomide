"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Contact.module.css";

export default function Contact() {
  const ref = useIntersectionObserver();

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.contactDots}>
        <span className={styles.contactDot} />
        <span className={styles.contactDot} />
        <span className={styles.contactDot} />
      </div>

      <div className={styles.contactInner}>
        <p className="section-label animate-on-scroll" style={{ color: "rgba(247,246,227,0.5)" }}>
          Get in Touch
        </p>
        <h2 className={`${styles.contactTitle} animate-on-scroll`}>
          Let&rsquo;s work together
        </h2>
        <p className={`${styles.contactSubtitle} animate-on-scroll`}>
          Have a project in mind or just want to chat? I&rsquo;d love to hear from you.
          Drop me a line and let&rsquo;s create something great.
        </p>

        <div className="animate-on-scroll">
          <a href="mailto:aeyod7@gmail.com" className={styles.contactEmail}>
            aeyod7@gmail.com
          </a>
        </div>

        <div className={`${styles.socialLinks} animate-on-scroll`}>
          <a href="https://github.com/Aeyod7" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/ayomideapeh" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            LinkedIn
          </a>
          <a href="https://x.com/bbssppllvv" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Twitter / X
          </a>
        </div>

        <div className="animate-on-scroll">
          <a href="mailto:aeyod7@gmail.com" className={`btn-primary ${styles.contactCta}`}>
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
