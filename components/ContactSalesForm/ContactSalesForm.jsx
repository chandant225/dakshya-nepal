import React, { useEffect } from "react";
import Aos from 'aos';


const ContactSalesForm = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  })
  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse lg:gap-4 gap-4 py-2">
        <div data-aos="zoom-in" className="lg:w-[50%] w-full">
          <p className="px-4">Name of Organization *</p>
          <input
            type="text"
            className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none"
            placeholder="input your organization name"
          />
          <p className="px-4">Address</p>
          <input
            type="text"
            className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none"
            placeholder="input your address"
          />
          <p className="px-4">Email</p>
          <input
            type="email"
            className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none"
            placeholder="input your email"
          />
          <p className="px-4">Contact Number *</p>
          <input
            type="text"
            className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none"
            placeholder="input your phone number"
          />
          <p className="px-4">Messages (if any)</p>
          <textarea
            placeholder="type your messages"
            rows="6"
            cols="10"
            className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-xl focus:outline-none"
          ></textarea>
          <center className="mt-8">
            <input
              type="submit"
              value="Contact Sales"
              className="px-4 py-2 border-2 border-black text-lg font-medium rounded-3xl text-black bg-white shadow-md hover:shadow-2xl hover:text-white hover:bg-black"
            />
          </center>
        </div>
        <div className=" flex lg:w-[50%] w-full">
          <img
          data-aos="zoom-in"
            className="object-contain w-full h-auto items-center"
            src="/images/products/Girl_on_a_chair.png"
            alt="Girl_on_a_chair"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSalesForm;
