export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GymMAZDev",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Software de gestión para gimnasios. Gestioná socios, pagos, turnos, stock, clases y reportes desde una única plataforma.",
    url: "https://www.gymmazdev.online",
    offers: {
      "@type": "Offer",
      price: "40000",
      priceCurrency: "ARS",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://www.gymmazdev.online/form",
    },
    provider: {
      "@type": "Organization",
      name: "GymMAZDev",
      url: "https://www.gymmazdev.online",
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
