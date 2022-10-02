import Image from "next/future/image";

import type { TResource } from "@/types/resource";
import BluryImage from "./BluryImage";

const ResourceCard = ({ name, link, image }: TResource) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg md:w-full"
    >
      <div className="group flex flex-col items-center justify-center space-y-[0.937rem] rounded-lg border px-[1.875rem] py-2.5 transition duration-500  md:flex md:flex-row-reverse md:items-center md:justify-between md:py-5 lg:hover:shadow-xl">
        <div className="relative h-[166px] w-[295px] ">
          <BluryImage
            alt={name}
            imgSrc={image}
            className="rounded-md object-cover shadow-md md:shadow-none"
          />
        </div>

        <div className="text-left md:space-y-1">
          <h3 className="text-base font-light transition duration-500 group-hover:text-[#DF6F1F] md:text-xl">
            {name}
          </h3>
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;
