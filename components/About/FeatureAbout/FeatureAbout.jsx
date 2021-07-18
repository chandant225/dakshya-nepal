import React, { useEffect } from "react";
import FeatureBlock from "./FeatureBlock";
import { features } from "./aboutFeature";
import aos from "aos";

const FeatureAbout = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div className="  container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-24 md:gap-y-24">
        {features.map((data, index) => {
          return (
            <div
              data-aos={data.animate}
              data-aos-offset="10"
              data-aos-duration="1000"
            >
              <FeatureBlock
                title={data.title}
                description={data.description}
                icon={data.icon}
                key={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureAbout;
