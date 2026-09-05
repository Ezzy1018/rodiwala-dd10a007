import { pageUrl, siteName, siteUrl } from "@/lib/seo";

export function StructuredData({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function SiteStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: siteName,
            alternateName: "Rodi Wala",
            url: siteUrl,
            logo: `${siteUrl}/favicon.png`,
            description:
              "Construction material sourcing and delivery coordination for sites across India.",
            telephone: "+91-9416165465",
            areaServed: { "@type": "Country", name: "India" },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9416165465",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["en", "hi"],
            },
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: siteName,
            alternateName: "Rodi Wala",
            url: siteUrl,
            publisher: { "@id": `${siteUrl}/#organization` },
          },
        ],
      }}
    />
  );
}

export function MaterialStructuredData({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl(path)}#service`,
        name,
        description,
        serviceType: "Construction material supply",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "India" },
        url: pageUrl(path),
      }}
    />
  );
}
