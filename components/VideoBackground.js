"use client";
import { useRef, useEffect, useCallback } from "react";
import styles from "./VideoBackground.module.css";

const SENSITIVITY = 0.8;

export default function VideoBackground() {
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const isSeeking = useRef(false);

  const seekToTarget = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    isSeeking.current = true;
    video.currentTime = targetTimeRef.current;
  }, []);

  const handleSeeked = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
      seekToTarget();
    } else {
      isSeeking.current = false;
    }
  }, [seekToTarget]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force load the video so metadata is fetched
    video.load();

    const forceLoadAndDecode = () => {
      // Play and pause immediately to force iOS/Safari to decode the video frame and make duration available
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.pause();
          })
          .catch((err) => {
            console.warn("Autoplay/decode interrupted: ", err);
          });
      }
    };

    // Attempt to decode on load
    forceLoadAndDecode();

    const handleScroll = () => {
      if (!video.duration) {
        // Try decoding again if duration is still missing on scroll
        forceLoadAndDecode();
        return;
      }
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      targetTimeRef.current = scrollFraction * video.duration * SENSITIVITY;
      if (!isSeeking.current) seekToTarget();
    };

    // Also trigger scroll handler on metadata load
    video.addEventListener("loadedmetadata", handleScroll);
    video.addEventListener("loadeddata", handleScroll);

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initially in case page loaded already scrolled
    handleScroll();

    return () => {
      video.removeEventListener("loadedmetadata", handleScroll);
      video.removeEventListener("loadeddata", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [seekToTarget]);

  return (
    <video
      ref={videoRef}
      className={styles.videoBackground}
      muted
      playsInline
      preload="auto"
      onSeeked={handleSeeked}
      autoPlay
      loop
    >
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
