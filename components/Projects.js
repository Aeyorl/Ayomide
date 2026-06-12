"use client";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "GISS — Geospatial Intelligence Support System",
    description: "An offline-capable GIS desktop application for auto-digitizing features from GeoTIFF orthomosaics using a local NVIDIA GPU. Integrates SAM 2, GroundingDINO, and YOLOv8-seg inference with PySide6.",
    image: "/project-2.png",
    tags: ["PySide6", "Python", "ONNX/PyTorch", "GeoJSON", "CUDA"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Arc Pay — Stablecoin Payment Infrastructure",
    description: "An end-to-end USDC payment platform on Arc Network with public checkout, invoice/receipt generation, Clerk auth, Svix webhooks, a custom @arcpay/sdk, and a viem-based transfer watcher.",
    image: "/project-1.png",
    tags: ["Next.js 15", "TypeScript", "viem", "Clerk", "Svix", "Arc Network"],
    liveUrl: "https://arcpaye.com",
    codeUrl: "#",
  },
  {
    title: "NYC Spatial Analytics & 3D Terrain Dashboard",
    description: "An interactive GIS dashboard mapping NYC's 1ft resolution LiDAR DEM elevation data, bike networks, and park properties alongside the Central Park Squirrel Census. Includes a 3D terrain mesh rendering.",
    image: "/nyc.png",
    tags: ["QGIS", "LiDAR DEM", "Leaflet", "Python (GeoPandas)", "EPSG:2263"],
    liveUrl: "/gis-preview",
    codeUrl: "#",
  },
];

export default function Projects() {
  const ref = useIntersectionObserver();

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <div className={styles.projectsInner}>
        <p className="section-label animate-on-scroll">Selected Work</p>
        <h2 className={`${styles.projectsTitle} animate-on-scroll`}>
          Projects I&rsquo;ve built
        </h2>
        <p className={`${styles.projectsSubtitle} animate-on-scroll`}>
          A selection of recent work spanning web applications, mobile platforms,
          and design systems.
        </p>
        <div className={`${styles.projectsGrid} stagger-children`}>
          {projects.map((project, index) => (
            <article key={project.title} className={`${styles.projectCard} animate-on-scroll`}>
              <div className={styles.projectImageWrapper}>
                <span className={styles.projectNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectName}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill">{tag}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.liveUrl} className="btn-ghost" target="_blank" rel="noopener noreferrer">
                    Live Demo ↗
                  </a>
                  <a href={project.codeUrl} className="btn-ghost" target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
