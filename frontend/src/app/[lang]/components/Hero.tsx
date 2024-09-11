import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section className="dark:bg-black dark:text-blue-600">
      <div className="container flex flex-col justify-center mx-auto lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center lg:text-left">
          <HighlightedText
            text={data.title}
            tag="h1"
            className=""
            color=""
          />

          <HighlightedText
            text={data.description}
            tag="h2"
            className=""
          />
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-full h-full sm:h-full lg:h-full xl:h-full 2xl:h-full">
          <Image
            src={imgUrl || ""}
            alt={
              data.picture.data.attributes.alternativeText || "none provided"
            }
            className="object-contain h-full sm:h-full lg:h-full xl:h-full 2xl:h-full "
            width={600}
            height={600}
          />
        </div>

      </div>
    </section>
  );
}
