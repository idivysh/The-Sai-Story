
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const moreLinks = [
  {
    label: "Skills",
    description: "Technologies, tools & expertise",
    href: "/skills",
    visual: "skills",
    number: "01",
  },
  {
    label: "Experience",
    description: "Work, leadership & impact",
    href: "/experience",
    visual: "experience",
    number: "02",
  },
  {
    label: "Education",
    description: "Academic journey & certifications",
    href: "/education",
    visual: "education",
    number: "03",
  },
  {
    label: "Creative Work",
    description: "Design, visuals & imagination",
    href: "/creative-work",
    visual: "creative",
    number: "04",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const isMoreActive = moreLinks.some(
    (item) =>
      pathname === item.href || pathname.startsWith(`${item.href}/`)
  );

  function closeMenus() {
    setMobileOpen(false);
    setMoreOpen(false);
  }

  function linkClass(href: string) {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);

    return `navbar-link${active ? " is-active" : ""}`;
  }

  return (
    <header className="site-navbar">
      <Link
        href="/"
        className="navbar-brand"
        aria-label="The Sai Story — Home"
        onClick={closeMenus}
      >
        <img
          src="/assets/the-sai-story-horizontal-logo-transparent.png"
          alt="The Sai Story — People, Ideas, Creations"
          className="navbar-horizontal-logo"
        />
      </Link>

      <button
        className={`navbar-menu-toggle${mobileOpen ? " is-open" : ""}`}
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        aria-controls="main-navigation"
        onClick={() => {
          setMobileOpen(!mobileOpen);
          setMoreOpen(false);
        }}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={`navbar-links${mobileOpen ? " is-open" : ""}`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={linkClass("/")}
          aria-current={pathname === "/" ? "page" : undefined}
          onClick={closeMenus}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={linkClass("/about")}
          aria-current={pathname === "/about" ? "page" : undefined}
          onClick={closeMenus}
        >
          About
        </Link>

        <Link
          href="/projects"
          className={linkClass("/projects")}
          aria-current={
            pathname.startsWith("/projects") ? "page" : undefined
          }
          onClick={closeMenus}
        >
          Projects
        </Link>

        <div
          className={`navbar-more${moreOpen ? " is-open" : ""}`}
          onMouseEnter={() => {
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
              setMoreOpen(true);
            }
          }}
          onMouseLeave={() => {
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
              setMoreOpen(false);
            }
          }}
        >
          <button
            type="button"
            className={`navbar-link navbar-more-trigger${
              isMoreActive ? " is-active" : ""
            }`}
            aria-expanded={moreOpen}
            aria-haspopup="true"
            onClick={() => setMoreOpen(!moreOpen)}
          >
            More
          </button>

          {moreOpen && (
            <div className="navbar-mega-menu">
              <div className="navbar-card-grid">
                {moreLinks.map((item) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`navbar-mega-card navbar-card-${item.visual}${
                        active ? " is-active" : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenus}
                    >
                      <div
                        className={`navbar-card-art navbar-art-${item.visual}`}
                        aria-hidden="true"
                      >
                        <iframe
                          src={item.href}
                          title={`${item.label} page preview`}
                          className="navbar-page-preview"
                          loading="lazy"
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="navbar-card-copy">
                        <span className="navbar-card-name">
                          {item.label}
                        </span>
                        <span className="navbar-card-description">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <Link
          href="/contact"
          className={`navbar-contact${
            pathname === "/contact" ? " is-active" : ""
          }`}
          aria-current={pathname === "/contact" ? "page" : undefined}
          onClick={closeMenus}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
