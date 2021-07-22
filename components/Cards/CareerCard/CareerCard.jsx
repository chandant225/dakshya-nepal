import React, { useState } from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../../Buttons";
import ApplyConsultant from "../../Careers/JoinUs/ApplyConsultant";

const CareerCard = ({ description, links, image }) => {
  const [apply, setApply] = useState(false);

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row space-x-5 bg-white rounded-md shadow-lg hover:shadow-primary transition-all ease-in-out duration-300">
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
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 space-x-0 md:space-x-3 md:space-y-0 my-[26px]">
          {links.map((link, index) => (
            <>
              {link.active ? (
                <PrimaryButton text={link.name} link={link.link} key={index} />
              ) : (
                <SecondaryButton
                  text={link.name}
                  // link={link.link}
                  key={index}
                  onClick={() => setApply(true)}
                />
              )}
            </>
          ))}
        </div>
        {apply && <ApplyConsultant setApply={setApply} />}
      </div>
    </div>
  );
};

export default CareerCard;
