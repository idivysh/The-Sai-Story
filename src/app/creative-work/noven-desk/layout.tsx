import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noven Desk | Brand Identity & UI Design",
  description:
    "Explore the Noven Desk digital product design project by Divyamsh Sai, featuring brand identity, five desktop UI screens and five mobile UI screens for a modern productivity and workspace experience.",
  alternates: {
    canonical: "/creative-work/noven-desk",
  },
  openGraph: {
    title: "Noven Desk | The Sai Story",
    description:
      "A digital product design project combining brand identity with desktop and mobile UI design for a modern productivity workspace.",
    type: "article",
  },
};

export default function NovenDeskLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}