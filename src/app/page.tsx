"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useI18n } from "@/components/LanguageProvider";
import LeadForm from "@/components/LeadForm";
import FeaturedListings from "@/components/FeaturedListings";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";

export default function Home() {
  const { t, lang } = useI18n();

  // Video control
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setIsPaused(false);
    const onPause = () => setIsPaused(true);
    const onEnded = () => setIsPaused(true);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);

    const tryPlay = async () => {
      try {
        await v.play();
        setIsPaused(v.paused);
      } catch {
        setIsPaused(true);
      }
    };
    tryPlay();

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      try {
        await v.play();
        setIsPaused(false);
      } catch {}
    } else {
      v.pause();
      setIsPaused(true);
    }
  };

  return (
    <>
      {/* HERO (kept static so the reveal tests are obvious when you scroll) */}
      <section className={styles.hero} aria-label="City drone video">
        <div className={styles.videoWrap}>
          <video
            ref={videoRef}
            className={styles.video}
            src="/hero.mp4"
            poster="/hero-poster.jpg"
            muted
            playsInline
            autoPlay
            loop
          />
          <div className={styles.scrim} />
        </div>

        <div className={styles.centerContent}>
          <h1 className={styles.heroTitle}>{t("home_title")}</h1>
          <p className={styles.heroSubtitle}>{t("home_subtitle")}</p>

          <div className={styles.ctas}>
            <a href={`/#certificate?lang=${lang}`} className={`${styles.button} ${styles.primary}`}>
              {t("cta_certificate")}
            </a>
            <a href={`/contact?lang=${lang}`} className={`${styles.button} ${styles.secondary}`}>
              {t("cta_contact")}
            </a>
          </div>

          {/* Round play/pause control */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPaused ? "Play video" : "Pause video"}
            title={isPaused ? "Play" : "Pause"}
            style={{
              position: "absolute",
              left: 16,
              bottom: 16,
              zIndex: 5,
              width: 44,
              height: 44,
              borderRadius: 9999,
              display: "grid",
              placeItems: "center",
              background: "rgba(0,0,0,.55)",
              backdropFilter: "saturate(140%) blur(6px)",
              boxShadow: "0 8px 24px rgba(0,0,0,.35)",
              border: "1px solid rgba(255,255,255,.12)",
              color: "#fff",
              transition: "transform .15s ease, background .15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
          >
            {isPaused ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l12-7-12-7z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <rect x="6" y="5" width="4" height="14" rx="1.2" />
                <rect x="14" y="5" width="4" height="14" rx="1.2" />
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* BELOW THE FOLD — reveal as you scroll */}

      {/* Intro/Bio card */}
      <Reveal y={60} delay={0.10} respectReducedMotion={false}>
        <section className="section card">
          <div className="split2">
            <div className="photoCol">
              <Image
                src="/joel.jpg"
                alt="Joel Magalhães"
                width={900}
                height={1200}
                className="photoFrame"
                priority
              />
            </div>
            <div>
              <h2>{t("home_meet_joel")}</h2>
              <p>{t("home_meet_copy")}</p>
              <div className="ctas">
                <a href={`/about?lang=${lang}`} className="button secondary">
                  {t("home_read_bio")}
                </a>
                <a href={`/contact?lang=${lang}`} className="button primary">
                  {t("home_work_with_me")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Background band + Certificate form */}
      <Reveal y={60} delay={0.15} respectReducedMotion={false}>
        <section id="certificate" style={{ position: "relative", marginTop: "-12px" }}>
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }} aria-hidden>
            <video
              src="/videos/home-secondary.mp4"
              poster="/images/home-secondary-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.7)",
              }}
            />
          </div>
          <div style={{ position: "relative", padding: "28px 0" }}>
            <section className="section card" style={{ backdropFilter: "saturate(120%) blur(3px)" }}>
              <h2 style={{ marginTop: 0 }}>{t("lead_title")}</h2>
              <p>{t("lead_intro")}</p>
              <LeadForm />
            </section>
          </div>
        </section>
      </Reveal>

      {/* Listings slider */}
      <Reveal y={60} delay={0.20} respectReducedMotion={false}>
        <FeaturedListings />
      </Reveal>

      {/* Testimonials */}
      <Reveal y={60} delay={0.25} respectReducedMotion={false}>
        <section className="section card">
          <h2 style={{ marginTop: 0 }}>{t("home_testimonials_title")}</h2>
          <Testimonials />
        </section>
      </Reveal>

      {/* Guides row */}
      <Reveal y={60} delay={0.30} respectReducedMotion={false}>
        <section className="section card">
          <div className="ctas" style={{ justifyContent: "center" }}>
            <a href={`/guides/buy?lang=${lang}`} className="button secondary">
              {t("home_buyers_guide")}
            </a>
            <a href={`/guides/sell?lang=${lang}`} className="button primary">
              {t("home_sellers_guide")}
            </a>
          </div>
        </section>
      </Reveal>
    </>
  );
}
