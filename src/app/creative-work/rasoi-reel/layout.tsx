import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rasoi Reel | YouTube Creative & Channel Design",
  description:
    "Explore the Rasoi Reel creative project by Divyamsh Sai, featuring custom YouTube thumbnails and channel banner design for a food and cooking content channel.",
  alternates: {
    canonical: "/creative-work/rasoi-reel",
  },
  openGraph: {
    title: "Rasoi Reel | The Sai Story",
    description:
      "A food and cooking content design project featuring engaging YouTube thumbnails and channel branding.",
    type: "article",
  },
};

export default function RasoiReelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}