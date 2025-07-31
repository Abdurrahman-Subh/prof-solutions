export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IsoXpert",
    "url": "https://www.prof-solutions.nl",
    "logo": "https://www.prof-solutions.nl/NewLogo.png",
    "description": "IsoXpert biedt hoogwaardige isolatiediensten voor uw woning. Ontdek onze innovatieve oplossingen voor dak-, muur-, vloer- en glasisolatie.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Waterhoen 5",
      "addressLocality": "Muiderberg",
      "postalCode": "1399KG",
      "addressCountry": "NL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31 6 48444885",
      "contactType": "customer service",
      "email": "info@isoxpert.nl"
    },
    "sameAs": [],
    "founder": {
      "@type": "Person",
      "name": "IsoXpert Team"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Netherlands"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.2978,
        "longitude": 5.1206
      },
      "geoRadius": "50000"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IsoXpert",
    "image": "https://www.prof-solutions.nl/NewLogo.png",
    "telephone": "+31 6 48444885",
    "email": "info@isoxpert.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Waterhoen 5",
      "addressLocality": "Muiderberg",
      "postalCode": "1399KG",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.2978,
      "longitude": 5.1206
    },
    "url": "https://www.prof-solutions.nl",
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "€€"
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Isolatiediensten",
    "description": "Professionele isolatiediensten voor woningen inclusief dakisolatie, spouwisolatie, vloerisolatie en bodemisolatie",
    "provider": {
      "@type": "Organization",
      "name": "IsoXpert"
    },
    "serviceType": "Isolatie",
    "areaServed": {
      "@type": "Country",
      "name": "Netherlands"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Isolatie Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dakisolatie",
            "description": "Professionele dakisolatie voor optimale energiebesparing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spouwisolatie",
            "description": "Effectieve spouwisolatie voor betere energie-efficiëntie"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vloerisolatie",
            "description": "Vakkundige vloerisolatie voor meer comfort"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bodemisolatie",
            "description": "Professionele bodemisolatie voor kruipruimtes"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema)
        }}
      />
    </>
  );
}
