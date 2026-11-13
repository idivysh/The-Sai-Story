
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import "./contact.css";

const contacts = [
  {
    name: "EMAIL",
    value: "idivysh@gmail.com",
    icon: "/assets/contact/gmail.svg",
    href: "mailto:idivysh@gmail.com",
    external: false,
  },
  {
    name: "PHONE",
    value: "+91 78422 96067",
    icon: "/assets/contact/google-contacts.svg",
    href: "tel:+917842296067",
    external: false,
  },
  {
    name: "WHATSAPP",
    value: "LET'S CHAT",
    icon: "/assets/contact/whatsapp.svg",
    href: "https://wa.me/917842296067",
    external: true,
  },
  {
    name: "INSTAGRAM",
    value: "@darling.diaries7",
    icon: "/assets/contact/instagram.svg",
    href: "https://www.instagram.com/darling.diaries7/",
    external: true,
  },
  {
    name: "LINKEDIN",
    value: "LET'S CONNECT",
    icon: "/assets/contact/linkedin.svg",
    href: "https://www.linkedin.com/in/idivysh/",
    external: true,
  },
  {
    name: "GITHUB",
    value: "EXPLORE MY CODE",
    icon: "/assets/contact/github.svg",
    href: "https://github.com/idivysh/",
    external: true,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="contact-page">

      {/* PAGE HEADING */}

      <header className="contact-heading">
        <h1>
          CONTACT ME<span>.</span>
        </h1>

        <p>
          I'd love to hear from you. Let's start a conversation.
        </p>
      </header>

      {/* CONTACT SECTION */}

      <section className="contact-content">

        {/* LEFT — CONTACT FORM */}

        <div className="contact-form">

          <h2>GET IN TOUCH</h2>

          <p className="form-description">
            Have a project in mind or an opportunity to discuss?
            Drop me a message. I'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-field">
              <label htmlFor="contact-name">Name</label>

              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                maxLength={100}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email</label>

              <input
                id="contact-email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                maxLength={254}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>

              <input
                id="contact-subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  })
                }
                maxLength={150}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>

              <textarea
                id="contact-message"
                placeholder="Write your message here..."
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                maxLength={5000}
                required
              />
            </div>

            <button type="submit" disabled={isSending}>
              <span>
                {isSending ? "SENDING..." : "SEND MESSAGE"}
              </span>

            </button>

            {status === "success" && (
              <p className="form-status success">
                Your message has been sent successfully!
              </p>
            )}

            {status && status !== "success" && (
              <p className="form-status error">
                {status}
              </p>
            )}

          </form>
        </div>

        {/* RIGHT — CONTACT INFORMATION */}

        <div className="contact-information">

          <p className="contact-intro">
            Whether you're looking to collaborate on a project,
            discuss an opportunity, or simply say hello, I'd love
            to connect. I'm always open to meaningful conversations
            and opportunities to create something impactful.
          </p>

          {/* SIX CONTACT LOGOS — 3 COLUMNS */}

          <div className="contact-details">

            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                className="contact-detail"
                target={
                  contact.external ? "_blank" : undefined
                }
                rel={
                  contact.external
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={`${contact.name}: ${contact.value}`}
              >

                <Image
                  src={contact.icon}
                  alt={contact.name}
                  width={48}
                  height={48}
                  className="detail-logo"
                />

                <span className="detail-title">
                  {contact.name}
                </span>

                <span className="detail-value">
                  {contact.value}
                </span>

              </a>
            ))}

          </div>

          {/* BENGALURU MAP */}

          <div className="contact-map">
            <iframe
              title="Bengaluru, Karnataka, India"
              src="https://maps.google.com/maps?q=Bengaluru%2C%20Karnataka%2C%20India&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className="map-location">
            <span>Location:</span> Bengaluru, India
          </p>

        </div>
      </section>

      {/* RESUME SECTION */}

      <section className="resume-section">

        <div className="resume-content">

          <div className="resume-text">

            <p className="resume-eyebrow">
              A CLOSER LOOK
            </p>

            <h2>
              GET TO KNOW MY JOURNEY<span>.</span>
            </h2>

            <p>
              Explore my professional background, technical skills,
              projects and experience. Download my resume to learn
              more about my journey and the value I can bring to
              your team.
            </p>

          </div>

          <a
            href="/assets/idivysh-resume.pdf"
            className="resume-button"
            download
          >
            <span>DOWNLOAD RESUME</span>
          </a>

        </div>

      </section>

    </main>
  );
}
