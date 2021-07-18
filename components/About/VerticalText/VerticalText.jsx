import React from "react";
import TextList from "./TextList";
import TextSlider from "./TextSlider";

const VerticalText = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 mt-1">
        <div className="relative h-[400px] about__text-slider">
          <TextSlider TextList={TextList} />
          <div
            className=" h-[10%] md:h-[10%] w-full absolute top-0"
            style={{
              background:
                "linear-gradient(180deg,#FFFFFF 13%,rgba(254,250,237,0) 87%)",
            }}
          ></div>
          <div
            className=" h-[60%] md:h-[100%] w-full absolute bottom-0"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(254, 250, 237, 0) 87.5%)",
              transform: "rotate(-180deg)",
            }}
          ></div>
        </div>
        <div>
          <img
            src="/images/aboutUs.svg"
            alt=""
            className=" h-auto md:h-full lg:h-[447px]  "
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalText;
