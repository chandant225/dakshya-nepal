import React from "react";
import Image from "next/image";
import Link from "next/link";
import ss from "../../../public/images/ss.svg";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const PrimaryCard = ({ name, pricing, link, image }) => {
  return (
    <Link href={link}>
      <div className="rounded-md ml-0 md:ml-10">
        <div className="bg-white rounded-tl-md rounded-tr-md shadow-secondary">
          <div className="flex justify-between py-6 px-6">
            <p className="font-primary text-2xl font-medium text-gray-900 capitalize">
              {name}
            </p>
            <ArrowNarrowRightIcon className="w-6 h-6 text-gray-900" />
          </div>
          <div className="w-full h-full">
            <Image src={image} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PrimaryCard;
