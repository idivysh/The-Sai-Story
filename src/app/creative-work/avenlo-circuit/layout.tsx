import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avenlo Circuit | AI & Technology Brand Identity",
  description:
    "Explore the Avenlo Circuit brand identity project by Divyamsh Sai, featuring creative direction, logo design, colour palette, typography, brand collateral and digital applications for an AI and technology brand.",
  alternates: {
    canonical: "/creative-work/avenlo-circuit",
  },
  openGraph: {
    title: "Avenlo Circuit | The Sai Story",
    description:
      "A complete AI and technology brand identity exploration, from logo design and visual systems to digital applications.",
    type: "article",
  },
};

export default function AvenloCircuitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}