import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Academic Journey",
  description:
    "Explore the academic journey of Divyamsh Sai, including a B.Tech in Artificial Intelligence and Machine Learning from St. Martin's Engineering College, intermediate education and secondary schooling.",
  alternates: {
    canonical: "/education",
  },
};

export default function EducationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}