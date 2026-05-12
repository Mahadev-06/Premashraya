import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Premashraya",
  description:
    "Get in touch with Premashraya. Ask questions or learn more about our compassionate palliative care services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
