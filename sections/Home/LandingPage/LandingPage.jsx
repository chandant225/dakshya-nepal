import React from "react";
import { PrimaryButton, LandingSlider } from "../../../components";
const LandingPage = () => {
  return (
    <div
      className="mt-0 relative"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFFBEF 0%, rgba(254, 250, 237, 0) 87.5%)",
      }}
    >
      <div
        className="container mx-auto block lg:grid"
        style={{ gridTemplateColumns: ".5fr 1fr" }}
      >
        <div className="flex flex-col space-y-2 w-full md:w-[436px] justify-center mb-28">
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
          <p className="text-base font-primary font-normal text-gray-900 w-full">
            Dakshya Nepal is a company fundamentally focused on digitizing the
            education system of the country. We deliver the proper mechanisms to
            revolutionize the traditional way of learning to make it more
            productive and effective.
          </p>
          <div className="pt-3">
            <PrimaryButton text="Explore Products" link="/products" />
          </div>
        </div>
        <div className="h-full w-full">
          <LandingSlider />
        </div>
      </div>
      {/* <svg
        width="598"
        height="616"
        viewBox="0 0 598 616"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-196px] right-0 z-[-1]"
      >
        <path
          d="M343.114 372.977C-38.5 372.977 -13.0535 37.8336 13.6267 -42H305.813H598V608.525C364.872 655.319 330.939 470.99 343.114 372.977Z"
          fill="#FACD2E"
        />
      </svg> */}
    </div>
  );
};

export default LandingPage;
