
import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "Quick links",
    links: [
      { label: "Home", href: "/" },
      { label: "About me", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "My journey",
    links: [
      { label: "Skills", href: "/skills" },
      { label: "Experience", href: "/experience" },
      { label: "Education", href: "/education" },
      { label: "Creative work", href: "/creative-work" },
    ],
  },
  {
    title: "What I do",
    links: [
      { label: "Web development", href: "/projects" },
      { label: "UI/UX design", href: "/creative-work" },
      { label: "Graphic design", href: "/creative-work" },
      { label: "My projects", href: "/projects" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/idivysh" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/darling.diaries7/",
      },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Get in touch", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link href="/" className="footer-logo-link" aria-label="Home">
            <Image
              src="/assets/the-sai-story-logo-transparent.png"
              alt="The Sai Story logo"
              width={280}
              height={100}
              className="footer-logo"
            />
          </Link>

          <p className="footer-description">
            A personal portfolio showcasing my journey through technology,
            development, design, and creative ideas.
          </p>
        </div>

        <div className="footer-groups">
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h2>{group.title}</h2>

              {group.links.map((link) => {
                const isExternal = link.href.startsWith("https://");

                return isExternal ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-credits">
        <p>This is Vengala Divyamsh Sai&apos;s portfolio.</p>
        <p>
          Crafted by <span>Sai</span>
        </p>
      </div>

      <Link
        href="/"
        className="footer-wordmark-link"
        aria-label="The Sai Story home"
      >
        <Image
          src="/assets/the-sai-story-vds-wordmark-transparent.png"
          alt="Vengala Divyamsh Sai — People, Ideas, Creations"
          width={1800}
          height={400}
          sizes="100vw"
          className="footer-wordmark"
          priority={false}
        />
      </Link>
    </footer>
  );
}
