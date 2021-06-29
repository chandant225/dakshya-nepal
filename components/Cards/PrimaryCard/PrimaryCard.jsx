import React from "react";
import Image from "next/image";
import Link from "next/link";
import ss from "../../../public/images/ss.svg";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const PrimaryCard = ({ name, pricing, link, image }) => {
  return (
    <Link href={link}>
      <div className="rounded-md">
        <div className="py-6 px-6 bg-white">
          <div className="flex justify-between">
            <p className="font-primary text-2xl font-medium text-gray-900 capitalize">
              {name}
            </p>
            <ArrowNarrowRightIcon className="w-6 h-6 text-gray-900" />
          </div>
        </div>
        <Image src={image} alt="" className="w-full" />
      </div>
    </Link>
  );
};

export default PrimaryCard;
