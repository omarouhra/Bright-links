import Image from "next/future/image";

import type { TResource } from "@/types/resource";

const ResourceCard = ({ name, link, image }: TResource) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="md:w-full"
    >
      <div className="space-y-[0.937rem] rounded-lg px-[1.875rem] py-2.5 hover:shadow-md md:flex md:flex-row-reverse md:items-center md:justify-between md:py-5">
        <div className="relative h-[166px] w-[295px]">
          <Image src={image || "/image 3.png"} alt={name} sizes="100vw" fill />
        </div>

        <div className="text-left md:space-y-1">
          <h3 className="text-xl font-semibold md:text-2xl">{name}</h3>

          <p className="text-xs text-[#8A8A8A] md:text-base">+5M subsciber</p>
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;
