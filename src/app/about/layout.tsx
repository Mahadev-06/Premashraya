import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Premashraya | Cancer Care Shelter Mission & Facilities',
  description: 'Learn about Premashraya\'s mission to provide free shelter, clean rooms, nutritious meals, and emotional support for cancer patients in Bhubaneswar & Cuttack, Odisha.',
  alternates: {
    canonical: 'https://premashraya.org/about',
  },
  openGraph: {
    title: 'About Premashraya | Cancer Care Shelter Mission & Facilities',
    description: 'Discover our facilities, team, and commitment to supporting cancer patients with dignity and care in Odisha.',
    url: 'https://premashraya.org/about',
    images: [{ url: '/images/mission.webp', width: 1200, height: 630, alt: 'Premashraya shelter signboard - free cancer patient accommodation' }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
