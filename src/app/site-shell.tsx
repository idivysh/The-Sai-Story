"use client";

import { useCallback, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import SplashScreen from "./splash-screen";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const [splashFinished, setSplashFinished] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashFinished(true);
  }, []);

  return (
    <div className="site-shell">
      {!splashFinished && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      <div
        className="site-content"
        style={{ visibility: splashFinished ? "visible" : "hidden" }}
      >
        <div className="main-website">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}