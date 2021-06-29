import React from "react";

const Subscribe = () => {
  return (
    <div className="container mx-auto mt-24 flex flex-col items-center">
      <p className="text-center font-primary text-[32px] font-medium capitalize text-gray-900">
        Get Updated With Us
      </p>
      <div className="pt-10 w-1/2">
        <div className="bg-white shadow-primary focus:shadow-lg hover:shadow-primary rounded-full flex justify-center items-center relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address Here"
            className="text-lg font-primary rounded-full text-gray-400 w-full focus:outline-none py-6 px-6"
          />
          <button className="absolute font-primary bg-[#ffc700] text-white focus:outline-none right-5 py-4 px-6 rounded-full hover:bg-yellow-400 transition-all ease-in-out duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
