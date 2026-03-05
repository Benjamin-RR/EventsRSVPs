export default function StructuredData({ type = "website", pageData = {} }) {
  const baseUrl = "https://upliftchurch.com";

  const getStructuredData = () => {
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Uplift Church",
      "url": baseUrl,
      "logo": `${baseUrl}/Uplift%20church.png`,
      "description": "Dive deeper in faith, purpose & community.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "general",
        "url": baseUrl
      }
    };

    if (type === "website") {
      return {
        ...organizationData,
        "@type": "WebSite",
        "name": pageData.name ?? "Uplift Church",
        "description": pageData.description ?? "Dive deeper in faith, purpose & community.",
        "url": pageData.url ? `${baseUrl}${pageData.url.startsWith("/") ? pageData.url : `/${pageData.url}`}` : baseUrl,
        "publisher": {
          "@type": "Organization",
          "name": "Uplift Church",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/Uplift%20church.png`
          }
        }
      };
    }

    if (type === "webPage") {
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": pageData.name ?? pageData.title ?? "Uplift Church",
        "description": pageData.description ?? "Dive deeper in faith, purpose & community.",
        "url": pageData.url ? `${baseUrl}${pageData.url.startsWith("/") ? pageData.url : `/${pageData.url}`}` : baseUrl,
        "publisher": {
          "@type": "Organization",
          "name": "Uplift Church",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/Uplift%20church.png`
          }
        }
      };
    }

    return organizationData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
}
