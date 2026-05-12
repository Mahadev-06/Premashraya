import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Premashraya",
  description:
    "Explore visual moments of peace at Premashraya — our rooms, healing gardens, wellness facilities, and resident stories in photos.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
