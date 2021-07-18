import React, { useEffect } from "react";
import Benefit from "./Benefit";
import { data as benefits } from "./BenefitData";
import aos from "aos";

const BenefitSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div className="pt-[91px] container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
      {benefits.map((data, index) => (
        <div data-aos={data.animate} data-aos-duration="1000">
          <Benefit
            title={data.title}
            benefits={data.benefits}
            image={data.image}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};

export default BenefitSection;
