import React, { useEffect } from "react";
import { PrimaryButton, LandingSlider } from "../../../components";
import { gsap } from "gsap";

const LandingPage = () => {
  return (
    <div className="mt-0">
      <img
        src="/illustrations/background.svg"
        className="absolute top-0 z-[2] md:z-[-1] right-0 w-[80vw]"
      />
      <div
        className="container mx-auto flex flex-col lg:grid"
        style={{ gridTemplateColumns: ".5fr 1fr" }}
      >
        <div className="flex flex-col space-y-2 w-full md:w-[410px] justify-center pt-10 md:pt-0 lg:mb-28">
          <p className="text-lg font-primary font-medium text-gray-900 capitalize">
            We Believe In
          </p>
          <div className="flex space-x-3">
            <p className="text-5xl font-primary font-medium text-yellow-400 capitalize">
              Skilled
            </p>
            <p className="text-5xl font-primary font-medium text-gray-900 capitalize">
              Nepal
            </p>
          </div>
          <p
            id="quote"
            className="text-base font-primary font-normal text-gray-900 w-full"
          >
            Dakshya Nepal is a company fundamentally focused on digitizing the
            education system of the country. We deliver the proper mechanisms to
            revolutionize the traditional way of learning to make it more
            productive and effective.
          </p>
          <div className="pt-3">
            <PrimaryButton text="Explore Products" link="/products" />
          </div>
        </div>
        <div className="h-full w-full order-[-1] md:order-1 md:w-[46rem] md:ml-20">
          <LandingSlider />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
