
"use client";

import Image from "next/image";
import Link from "next/link";
import "./contact-section.css";

const contacts = [
  {
    name: "EMAIL",
    icon: "/assets/contact/gmail.svg",
    href: "mailto:idivysh@gmail.com",
    label: "DROP ME AN EMAIL",
    external: false,
  },
  {
    name: "PHONE",
    icon: "/assets/contact/google-contacts.svg",
    href: "tel:+917842296067",
    label: "GIVE ME A CALL",
    external: false,
  },
  {
    name: "INSTAGRAM",
    icon: "/assets/contact/instagram.svg",
    href: "https://www.instagram.com/darling.diaries7/",
    label: "FOLLOW MY JOURNEY",
    external: true,
  },
  {
    name: "LINKEDIN",
    icon: "/assets/contact/linkedin.svg",
    href: "https://www.linkedin.com/in/idivysh/",
    label: "LET'S CONNECT",
    external: true,
  },
  {
    name: "GITHUB",
    icon: "/assets/contact/github.svg",
    href: "https://github.com/idivysh/",
    label: "EXPLORE MY CODE",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      {/* Vertical Side Label */}
      <div
        className="contact-side-label"
        aria-label="The Sai Story — Get in Touch"
      >
        <span>THE SAI STORY</span>
        <span className="contact-side-line" />
        <span>GET IN TOUCH</span>
      </div>

      <div className="contact-container">
        {/* Top Line */}
        <div className="contact-topline">
          <span>
            07 / <span>LET'S CONNECT</span>
          </span>
        </div>

        {/* Main Content */}
        <div className="contact-main">
          <div className="contact-content">
            <p className="contact-eyebrow">
              HAVE AN IDEA? LET'S TALK
            </p>

            <h2 className="contact-heading">
              LET'S CREATE
              <br />
              <span>SOMETHING MEANINGFUL</span>
              <span className="contact-dot">.</span>
            </h2>

            <p className="contact-description">
              Whether you're looking to collaborate on a project, discuss an opportunity, or explore a creative idea, I'd love to connect. I'm always open to meaningful conversations and opportunities to create something impactful.
            </p>

            {/* Contact Icons */}
            <div className="contact-grid">
            {contacts.map((contact) => (
                <Link
                key={contact.name}
                href={contact.href}
                className={`contact-item contact-item-${contact.name.toLowerCase()}`}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                aria-label={contact.name}
                >
                <Image
                    src={contact.icon}
                    alt={contact.name}
                    width={48}
                    height={48}
                    className="contact-icon"
                />

                <span className="contact-item-name">{contact.name}</span>
                </Link>
            ))}
            </div>
          </div>

          {/* Resume Panel */}
          <div className="contact-resume">
            <div className="contact-resume-top">
              <span>BEHIND THE PROFILE</span>

              <Image
                src="/assets/contact/resume.svg"
                alt=""
                width={34}
                height={34}
                className="contact-resume-icon"
              />
            </div>

            <div className="contact-resume-content">
              <p className="contact-resume-eyebrow">
                A QUICK INTRODUCTION
              </p>

              <h3>
                GET TO KNOW
                <br />
                MY JOURNEY
                <span>.</span>
              </h3>

              <p className="contact-resume-description">
                Explore my professional background, technical skills, projects, and experience. Download my resume to learn more about my journey and the value I can bring to your team.
              </p>
            </div>

            <div className="contact-resume-bottom">
              <div className="contact-resume-meta">
                <span>MY RESUME</span>
                <p>EXPERIENCE · SKILLS · EDUCATION</p>
              </div>

              <Link
                href="/assets/idivysh-resume.pdf"
                className="contact-resume-button"
                download
              >
                <span>DOWNLOAD RESUME</span>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
