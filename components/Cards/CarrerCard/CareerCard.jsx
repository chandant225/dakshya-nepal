import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../../Buttons";

const CareerCard = ({ description, links, image }) => {
  return (
    <div className="flex space-x-5 bg-white rounded-md shadow-lg hover:shadow-primary transition-all ease-in-out duration-300">
      <div className="bg-[#FEF6E0] w-[300px]">
        <Image src={image} alt="" className="w-full" />
      </div>
      <div>
        <div className="flex space-x-2 py-[26px]">
          <p className="font-primary text-2xl font-medium text-gray-900">
            Join Our
          </p>
          <p className="font-primary text-2xl font-medium text-primary">
            Mission
          </p>
        </div>
        <p className="font-primary text-base text-gray-600">{description}</p>
        <div className="flex space-x-3 my-[26px]">
          {links.map((link) => (
            <>
              {link.active ? (
                <PrimaryButton text={link.name} link={link.url} />
              ) : (
                <SecondaryButton text={link.name} link={link.url} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
