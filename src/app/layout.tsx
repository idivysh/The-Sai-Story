
import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import SiteShell from "./site-shell";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesaistory.com"),

  title: {
    default: "The Sai Story | My Portfolio",
    template: "%s | The Sai Story",
  },

  description:
    "The Sai Story — the portfolio of Divyamsh Sai Vengala, showcasing people, ideas and creations through web development, design and creative work.",

  applicationName: "The Sai Story",

  openGraph: {
    siteName: "The Sai Story",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://thesaistory.com/#person",
      name: "Divyamsh Sai Vengala",
      url: "https://thesaistory.com",
      description:
        "Divyamsh Sai Vengala is a developer and creative professional working across web development, technology and visual design.",
      knowsAbout: [
        "Web Development",
        "Frontend Development",
        "React",
        "Next.js",
        "TypeScript",
        "Artificial Intelligence",
        "Machine Learning",
        "Graphic Design",
        "Brand Identity",
        "UI Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://thesaistory.com/#website",
      name: "The Sai Story",
      alternateName: "The Sai Story — People, Ideas, Creations",
      url: "https://thesaistory.com",
      description:
        "The portfolio of Divyamsh Sai Vengala, showcasing people, ideas and creations through web development, design and creative work.",
      inLanguage: "en-IN",
      publisher: {
        "@id": "https://thesaistory.com/#person",
      },
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <SiteShell>{children}</SiteShell>
        
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-8QPQ24DK08" />
        )}
      </body>
    </html>
  );
}
