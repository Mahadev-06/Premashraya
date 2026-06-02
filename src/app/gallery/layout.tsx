import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Premashraya Cancer Patient Shelter Photos',
  description: 'View photos of Premashraya\'s clean rooms, dining facilities, peaceful spaces, and daily life at the free cancer patient shelter in Bhubaneswar.',
  alternates: {
    canonical: 'https://premashraya.org/gallery',
  },
  openGraph: {
    title: 'Gallery | Premashraya Cancer Patient Shelter Photos',
    description: 'Explore images of our hygienic rooms, community spaces, and peaceful environment for cancer patients in Odisha.',
    url: 'https://premashraya.org/gallery',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Gallery of Premashraya cancer care shelter facilities' }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
