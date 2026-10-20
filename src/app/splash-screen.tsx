
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type SplashScreenProps = {
  onComplete: () => void;
};

export default function SplashScreen({
  onComplete,
}: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const wordmarkRef = useRef<HTMLImageElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderTrackRef = useRef<HTMLDivElement>(null);

  const [finished, setFinished] = useState(false);

  const checkedSessionRef = useRef(false);
  const skipSplashRef = useRef(false);

  useEffect(() => {
    if (skipSplashRef.current) return;

    if (!checkedSessionRef.current) {
      checkedSessionRef.current = true;

      if (
        sessionStorage.getItem("the-sai-story-splash-seen") === "true"
      ) {
        skipSplashRef.current = true;
        setFinished(true);
        onComplete();
        return;
      }

      sessionStorage.setItem("the-sai-story-splash-seen", "true");
    }

    const container = containerRef.current;
    const logo = logoRef.current;
    const wordmark = wordmarkRef.current;
    const loader = loaderRef.current;
    const loaderTrack = loaderTrackRef.current;

    if (
      !container ||
      !logo ||
      !wordmark ||
      !loader ||
      !loaderTrack
    ) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setFinished(true);
      onComplete();
      return;
    }

    const progress = loaderTrack.querySelector<HTMLElement>(
      ".splash-loader-progress"
    );

    if (!progress) return;

    const timeline = gsap.timeline({
      onComplete: () => {
        setFinished(true);
        onComplete();
      },
    });

    gsap.set(logo, { autoAlpha: 0, scale: 0.35, y: 0 });
    gsap.set(wordmark, { autoAlpha: 0, y: 24 });
    gsap.set(loader, { autoAlpha: 0, y: 10 });
    gsap.set(progress, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    timeline
      .to(logo, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.85,
        ease: "back.out(1.8)",
      })
      .to(logo, {
        y: -28,
        duration: 0.55,
        ease: "power3.inOut",
      })
      .to(
        wordmark,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.15"
      )
      .to(loader, {
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      })
      .to(progress, {
        scaleX: 1,
        duration: 2,
        ease: "power1.inOut",
      })
      .to(container, {
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.inOut",
      });

    return () => {
      timeline.kill();
    };
  }, [onComplete]);

  if (finished) return null;

  return (
    <div ref={containerRef} className="splash-screen">
      <div className="splash-screen__content">
        <img
          ref={logoRef}
          className="splash-screen__logo"
          src="/assets/the-sai-story-icon.png"
          alt="The Sai Story emblem"
        />

        <img
          ref={wordmarkRef}
          className="splash-screen__wordmark"
          src="/assets/the-sai-story-wordmark-transparent.png"
          alt="The Sai Story"
        />

        <div ref={loaderRef} className="splash-loader">
          <div
            ref={loaderTrackRef}
            className="splash-loader-track"
          >
            <div className="splash-loader-progress" />
          </div>

          <span className="splash-loader-label">
            LOADING THE STORY
          </span>
        </div>
      </div>
    </div>
  );
}
