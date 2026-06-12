"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Skills.module.css";

const skillCategories = [
  { icon: "◈", title: "GIS & Remote Sensing", skills: ["ArcGIS Pro", "ArcMap", "QGIS", "Orthomosaics", "NDVI", "DEM/DTM", "Leaflet"] },
  { icon: "⬡", title: "AI & Geospatial ML", skills: ["SAM 2", "GroundingDINO", "YOLOv8-seg", "ONNX", "PyTorch", "OpenCV", "CUDA"] },
  { icon: "△", title: "Development & APIs", skills: ["TypeScript", "JavaScript", "Python", "Node.js", "Next.js 15", "FastAPI", "PostgreSQL", "MongoDB"] },
  { icon: "◇", title: "DevOps & Tools", skills: ["Git/GitHub", "Docker", "VPS Deployment", "Vercel", "Prompt Engineering"] },
];

export default function Skills() {
  const ref = useIntersectionObserver();

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className={styles.skillsInner}>
        <p className="section-label animate-on-scroll">Skills &amp; Expertise</p>
        <h2 className={`${styles.skillsTitle} animate-on-scroll`}>
          Technologies I work with
        </h2>
        <p className={`${styles.skillsSubtitle} animate-on-scroll`}>
          A curated toolkit built over years of crafting production applications,
          from pixel-perfect frontends to scalable backend architectures.
        </p>
        <div className={`${styles.skillsGrid} stagger-children`}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className={`${styles.skillCard} animate-on-scroll`}>
              <div className={styles.skillCardIcon}>{cat.icon}</div>
              <h3 className={styles.skillCardTitle}>{cat.title}</h3>
              <div className={styles.skillPills}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
