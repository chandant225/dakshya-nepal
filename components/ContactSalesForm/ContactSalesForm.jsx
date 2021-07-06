import React, { useEffect } from "react";
import Aos from "aos";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";

const ContactSalesForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse lg:gap-4 gap-4 py-2">
        <div data-aos="zoom-in" className="lg:w-[50%] w-full">
          <p>Name of Organization *</p>
          <input
            type="text"
            className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            placeholder="input your organization name"
          />
          <p>Address</p>
          <textarea
            placeholder="type your address"
            rows="1"
            cols="10"
            className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
          ></textarea>
          <input
            type="text"
            className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            placeholder="input your address"
          />
          <p>Email</p>
          <input
            type="email"
            className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            placeholder="input your email"
          />
          <p>Contact Number *</p>
          <input
            type="text"
            className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            placeholder="input your phone number"
          />
          <p>Messages (if any)</p>
          <textarea
            placeholder="type your messages"
            rows="6"
            cols="10"
            className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
          ></textarea>
          <center className="mt-8">
            <PrimaryButton text={"Contact Sales"} />
          </center>
        </div>
        <div className=" flex lg:w-[50%] w-full bg-[#FEF6E0]">
          <img
            data-aos="zoom-in"
            className="object-contain w-full h-auto items-center"
            src="/illustrations/Girl on a chair.svg"
            alt="Girl_on_a_chair"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSalesForm;
