import data from "./data";
import StructuredData from "../components/StructuredData";
import EventsClient from "./Client";

export async function generateMetadata() {
  return {
    title: "Uplift Church | Events",
    description: data.hero?.subtitle ?? "Dive deeper in faith, purpose & community.",
    metadataBase: new URL("https://upliftchurch.com"),
    alternates: {
      canonical: "/events",
      languages: {
        "en-US": "/events",
        en: "/events",
        "en-CA": "/events",
        "en-GB": "/events",
      },
    },
    openGraph: {
      title: "Uplift Church | Events",
      description: data.hero?.subtitle ?? "Dive deeper in faith, purpose & community.",
      locale: "en_US",
      url: "https://upliftchurch.com/events",
      siteName: "Uplift Church",
      images: [
        {
          url: data.hero?.img?.src ?? "/Uplift church.png",
          alt: data.hero?.img?.alt ?? "Uplift Church",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Uplift Church | Events",
      description: data.hero?.subtitle ?? "Dive deeper in faith, purpose & community.",
      images: [data.hero?.img?.src ?? "/Uplift church.png"],
    },
  };
}

export default function EventsPage() {
  return (
    <>
      <StructuredData
        type="webPage"
        pageData={{
          name: "Uplift Church | Events",
          url: "/events",
          description: data.hero?.subtitle ?? "Dive deeper in faith, purpose & community.",
        }}
      />
      <EventsClient />
    </>
  );
}
