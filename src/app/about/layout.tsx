import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Premashraya",
  description:
    "Learn about our mission, team, and the philosophy behind Premashraya — a place of dignity and compassionate palliative care.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
