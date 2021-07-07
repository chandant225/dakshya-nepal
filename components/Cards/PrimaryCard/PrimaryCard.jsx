import React from "react";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const PrimaryCard = ({ name, pricing, link, image }) => {
  return (
    <Link href={link}>
      <a>
        <div className="border-2 border-[#EAEAEA] rounded-md hover:shadow-2xl w-[352px]">
          <div className="flex flex-row gap-2 justify-between py-6 px-4">
            <div>
              <h1 className="text-[24px] font-medium">{name}</h1>
            </div>
            <span>
              <ArrowNarrowRightIcon className="w-6 h-6 text-gray-900" />
            </span>
          </div>
          <div className="bg-[#FEF6E0] p-4">
            <img
              src={image}
              alt={name}
              className="object-contain w-full h-[200px]"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PrimaryCard;
