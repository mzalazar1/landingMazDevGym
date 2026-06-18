export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GymFlowPro",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Software de gestión para gimnasios. Gestioná socios, pagos, turnos, stock, clases y reportes desde una única plataforma.",
    url: "https://www.gymflowpro.online",
    offers: {
      "@type": "Offer",
      price: "40000",
      priceCurrency: "ARS",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://www.gymflowpro.online/form",
    },
    provider: {
      "@type": "Organization",
      name: "GymFlowPro",
      url: "https://www.gymflowpro.online",
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
