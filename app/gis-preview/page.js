"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function GisPreview() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const iframeRef = useRef(null);

  // Expanded toggles for QGIS OpenLayers layer filters
  const [layers, setLayers] = useState({
    bikeRoutes: true,
    squirrels: true,
    playAreas: true,
    trees: true,
    buildings: false,
    parks: true,
    buffers: false,
  });

  const handleLayerToggle = (layer) => {
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  // Synchronize OpenLayers layer visibilities inside the iframe
  const syncLayers = () => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;
    const w = iframe.contentWindow;

    const setVis = (layerName, state) => {
      if (w[layerName] && typeof w[layerName].setVisible === "function") {
        w[layerName].setVisible(state);
      }
    };

    setVis("lyr_New_York_City_Bike_Routes_20260607_5", layers.bikeRoutes);
    setVis("lyr_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3", layers.squirrels);
    setVis("lyr_DPR_PlayAreas_001_20260607_7", layers.playAreas);
    setVis("lyr_2015trees_8", layers.trees);
    setVis("lyr_Buildings_1", layers.buildings);
    setVis("lyr_Parks_Properties_20260607_9", layers.parks);
    setVis("lyr_Buffered_4", layers.buffers);
  };

  useEffect(() => {
    syncLayers();
    // Re-check after a brief timeout to accommodate QGIS script init
    const timer = setTimeout(syncLayers, 800);
    return () => clearTimeout(timer);
  }, [layers]);

  return (
    <div className={styles.previewContainer}>
      <Link href="/" className="btn-ghost" style={{ marginBottom: "28px", display: "inline-flex" }}>
        ← Back to Portfolio
      </Link>

      <h1 className={styles.title}>NYC Spatial Analytics & 3D Terrain Dashboard</h1>
      <p className={styles.subtitle}>
        An interactive geospatial mapping application and detailed spatial analysis of New York City's
        urban infrastructure, elevation intelligence, and wildlife ecology.
      </p>

      {/* Tabs */}
      <div className={styles.tabHeader}>
        <button
          className={`${styles.tabBtn} ${activeTab === "dashboard" ? styles.tabBtnActive : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          Interactive GIS Dashboard
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "casestudy" ? styles.tabBtnActive : ""}`}
          onClick={() => setActiveTab("casestudy")}
        >
          Editorial Case Study
        </button>
      </div>

      {/* Tab Content */}

      {activeTab === "dashboard" && (
        <div className="animate-on-scroll visible">
          <h2 className={styles.sectionTitle}>Interactive GIS Dashboard</h2>
          <p style={{ marginBottom: "20px", color: "whitesmoke" }}>
            A map visualization integrated with custom statistics and filter toggles.
            Toggle the layer filters below to interact with the map overlay datasets in real time.
          </p>
          <div className={styles.dashboardGrid}>
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Spatial Analytics</h3>

              <div className={styles.statGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>3,018</div>
                  <div className={styles.statLabel}>Squirrels Cataloged</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>1,204 mi</div>
                  <div className={styles.statLabel}>NYC Bike Network</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>683k+</div>
                  <div className={styles.statLabel}>Street Trees (Canopy)</div>
                </div>
              </div>

              <div className={styles.filterGroup}>
                <span className={styles.filterLabel}>Active Layers</span>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={layers.bikeRoutes}
                    onChange={() => handleLayerToggle("bikeRoutes")}
                  />
                  NYC Bike Routes (GeoJSON)
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={layers.squirrels}
                    onChange={() => handleLayerToggle("squirrels")}
                  />
                  Central Park Squirrels (Points)
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={layers.playAreas}
                    onChange={() => handleLayerToggle("playAreas")}
                  />
                  DPR Play Areas (Polygons)
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={layers.trees}
                    onChange={() => handleLayerToggle("trees")}
                  />
                  Street Trees (Canopy Clustered)
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={layers.buildings}
                    onChange={() => handleLayerToggle("buildings")}
                  />
                  Buildings (3D Footprints)
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={layers.parks}
                    onChange={() => handleLayerToggle("parks")}
                  />
                  Parks Properties (Boundaries)
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={layers.buffers}
                    onChange={() => handleLayerToggle("buffers")}
                  />
                  Play Area buffers (150ft)
                </label>
              </div>

              <div style={{ marginTop: "auto" }}>
                <span className={styles.filterLabel}>Target Coordinate System</span>
                <p style={{ fontSize: "12px", color: "var(--color-ink-light)", marginTop: "4px" }}>
                  EPSG:2263 - NAD83 / New York Long Island (ftUS)
                </p>
              </div>
            </div>

            <div className={styles.iframeWrapper} style={{ height: "100%" }}>
              <iframe
                ref={iframeRef}
                src="/nyc-map/index.html"
                className={styles.iframeElement}
                title="QGIS Web Map Dashboard View"
                onLoad={syncLayers}
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "casestudy" && (
        <div className={styles.caseStudy}>
          <div className={styles.csSection}>
            <h2 className={styles.csTitle}>Editorial Case Study</h2>
            <p className="section-label" style={{ marginTop: "-8px", marginBottom: "24px" }}>
              NYC Urban Infrastructure & Wildlife Ecology
            </p>
            <p className={styles.csBody}>
              This analysis explores the spatial distribution of green play spaces and bike networks
              in relation to wildlife observations (specifically the 2018 Central Park Squirrel Census)
              utilizing sub-meter elevation intelligence.
            </p>
          </div>

          <div className={styles.csSection}>
            <h3 className={styles.csTitle} style={{ fontSize: "21px" }}>Data Preparation & Reprojection</h3>
            <p className={styles.csBody}>
              Using a 3.4GB LiDAR DEM tile of New York City, we generated terrain indicators to analyze ruggedness
              and its correlation with public park infrastructure. To perform accurate distance-based buffer and
              density calculations, all raw vector files (originally in EPSG:4326 WGS 84) were reprojected using QGIS
              to **EPSG:2263** (NAD83 / New York Long Island).
            </p>
            <div className={styles.codeBlock}>
              {`# Reprojecting and clipping GeoJSON vectors via Python
import geopandas as gpd

bike_routes = gpd.read_file("New_York_City_Bike_Routes_20260607.geojson")
bike_routes_reprojected = bike_routes.to_crs("EPSG:2263")
print(f"Total bike lane segments: {len(bike_routes_reprojected)}")`}
            </div>
          </div>

          <div className={styles.csSection}>
            <h3 className={styles.csTitle} style={{ fontSize: "21px" }}>GIS Spatial Analyses Performed</h3>
            <p className={styles.csBody}>
              Several spatial overlay and geoprocessing operations were executed in QGIS to evaluate connectivity:
            </p>
            <ul style={{ paddingLeft: "20px", color: "var(--color-ink-light)", lineHeight: "1.7", marginBottom: "16px" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong>Buffer Analysis:</strong> Created a 150ft multi-ring buffer zone (<code>Buffered_4</code> layer)
                around all play areas to calculate accessible entry routes from adjacent streets.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Point Pattern Analysis:</strong> Plotted and clustered street tree observations (<code>2015trees_8</code> layer)
                to quantify green canopy density along major pedestrian walkpaths.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Zonal Counts:</strong> Calculated the frequency of tree records per park parcel boundaries (<code>Count_6</code> layer).
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Wildlife Distribution:</strong> Map integrated 2018 Squirrel Census records categorized by fur color
                (Gray, Cinnamon, Black) to analyze wildlife nesting corridors in relation to public walking paths.
              </li>
            </ul>
          </div>

          <div className={styles.csSection}>
            <h3 className={styles.csTitle} style={{ fontSize: "21px" }}>Interactive Mapping Results</h3>
            <p className={styles.csBody}>
              Our final map integrates multi-ring buffer zones around play areas with active cycling paths.
              You can interact with the fully processed vector web map in the "Interactive GIS Dashboard" tab above.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
