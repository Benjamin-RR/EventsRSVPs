import data from "./data";
import Image from "next/image";
import StructuredData from "../components/StructuredData";

export async function generateMetadata() {
  return {
    title: "Uplift Church",
    description: data.hero.subtitle,
    metadataBase: new URL("https://upliftchurch.com"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/",
        en: "/",
        "en-CA": "/",
        "en-GB": "/",
      },
    },
    openGraph: {
      title: "Uplift Church",
      description: data.hero.subtitle,
      locale: "en_US",
      url: "https://upliftchurch.com",
      siteName: "Uplift Church",
      images: [
        {
          url: data.hero.img.src,
          alt: data.hero.img.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Uplift Church",
      description: data.hero.subtitle,
      images: [data.hero.img.src],
    },
  };
}

const HomePage = () => {
  return (
    <>
      <StructuredData type="website" />
      <div>
        <div className="pb-[30px]">
          <h1>{data.title}</h1>
          <p>{data.hero.subtitle}</p>
          <div className="relative w-full min-h-[400px]">
            <Image
              src={data.hero.img.src}
              alt={data.hero.img.alt}
              sizes="(min-width: 1536px) 1700px, (min-width: 1024px) 1280px, (min-width: 768px) 1280px, (min-width: 468px) 768px, (min-width: 256px) 468px"
              priority
              fill
              className="object-cover"
            />
            <p className="absolute bottom-[10px] left-[20px] text-white text-sm text-[grey]">
              {data.hero.img.credit}
            </p>
          </div>
        </div>
        <h2>{data.whatIsUpliftChurch.title}</h2>
        <p>{data.whatIsUpliftChurch.subtitle}</p>
        <ul className="gap-y-[20px] list-none mt-[30px]">
          {data.whatIsUpliftChurch.list.map((item, index) => (
            <li key={index}>
              <div className="flex items-center pt-[20px]">
                {item.icon}
                <h3 className="font-bold ml-[10px]">{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
