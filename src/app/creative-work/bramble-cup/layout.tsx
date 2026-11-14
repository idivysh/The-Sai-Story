import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bramble Cup | Coffee Brand Identity & Packaging",
  description:
    "Explore the Bramble Cup branding project by Divyamsh Sai Vengala, featuring logo design, visual identity, colour palette, typography, coffee packaging, branded merchandise and cafe applications.",
  alternates: {
    canonical: "/creative-work/bramble-cup",
  },
  openGraph: {
    title: "Bramble Cup | The Sai Story",
    description:
      "A coffee brand identity project exploring visual direction, packaging, typography and distinctive brand applications.",
    type: "article",
  },
};

export default function BrambleCupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}