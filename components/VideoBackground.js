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
    const handleScroll = () => {
      const video = videoRef.current;
      if (!video || !video.duration) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      targetTimeRef.current = scrollFraction * video.duration * SENSITIVITY;
      if (!isSeeking.current) seekToTarget();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [seekToTarget]);

  return (
    <video
      ref={videoRef}
      className={styles.videoBackground}
      muted
      playsInline
      preload="auto"
      onSeeked={handleSeeked}
    >
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
