import React from "react";
import TextList from "./TextList";
import TextSlider from "./TextSlider";
import Image from "next/image";
import about from "../../../images/about/about us.svg";

const VerticalText = () => {
  return (
    <div className="container md:mx-auto">
      <div className="pt-[49px] px-[0px] md:pt-[31px] md:px-[20px]">
        <div className="py-[10px] md:py-[24px] grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-6">
          <div className="relative py-2 h-[400px]">
            <TextSlider TextList={TextList} className=' py-0 md:py-6' />
                  <div className=" h-[10%] md:h-[10%] w-full absolute top-0" style={{ 
                    background:'linear-gradient(180deg,#FFFFFF 13%,rgba(254,250,237,0) 87%)',
                   }}>

             </div>
             <div className=" h-[60%] md:h-[100%] w-full absolute bottom-0 bg-blue-200" style={{ 
                    background:'linear-gradient(180deg, #FFFFFF 0%, rgba(254, 250, 237, 0) 87.5%)',
                    transform: "rotate(-180deg)"
                   }}>

             </div>
          </div>
          <div className="">
            <Image src={about} alt="" className=" h-auto md:h-full lg:h-[447px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalText;
