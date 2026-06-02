import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Premashraya | Cancer Patient Shelter Inquiry',
  description: 'Contact Premashraya for accommodation inquiries, availability, and support for cancer patients undergoing treatment in Bhubaneswar & Cuttack, Odisha.',
  alternates: {
    canonical: 'https://premashraya.org/contact',
  },
  openGraph: {
    title: 'Contact Premashraya | Cancer Patient Shelter Inquiry',
    description: 'Reach out for stay inquiries and support at our free cancer patient shelter in Bhubaneswar, Odisha.',
    url: 'https://premashraya.org/contact',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Contact Premashraya cancer care shelter' }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
