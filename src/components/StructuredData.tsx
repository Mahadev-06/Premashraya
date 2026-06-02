export default function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "NGO",
      name: "Premashraya Charitable Trust",
      alternateName: "Premashraya",
      url: "https://premashraya.org",
      logo: "https://premashraya.org/images/logo.png",
      description:
        "Premashraya provides free hygienic accommodation, nutritious meals, counselling, and emotional support for cancer patients undergoing treatment in Bhubaneswar & Cuttack, Odisha.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Kendriya Vihar, Near Dhananjay Residency, Gohiriya",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751028",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Bhubaneswar" },
        { "@type": "City", name: "Cuttack" },
      ],
      knowsAbout: [
        "Cancer Patient Support",
        "Free Accommodation",
        "Cancer Care",
        "Charitable Shelter",
      ],
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Premashraya",
      url: "https://premashraya.org",
      description:
        "Official website of Premashraya Charitable Trust - Free cancer patient shelter in Bhubaneswar & Cuttack",
      publisher: {
        "@type": "Organization",
        name: "Premashraya Charitable Trust",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
