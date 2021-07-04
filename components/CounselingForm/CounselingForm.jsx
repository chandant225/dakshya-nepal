import React, { useEffect } from "react";
import Aos from "aos";

const CounselingForm = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse lg:gap-4 gap-4 py-2">
        <div data-aos="zoom-in" className="lg:w-[50%] w-full">
          <form>
            <p className="px-4">Need guidance as</p>
            <select className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none">
              <option>select one</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
            <p className="px-4">Your Name*</p>
            <input
              type="text"
              className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none"
              placeholder="input your name"
              required
            />

            <p className="px-4">Address</p>
            <input
              type="text"
              className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none"
              placeholder="input your address "
            />
            <p className="px-4">Contact Number *</p>
            <input
              type="text"
              className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none"
              placeholder="input your phone number"
            />
            <p className="px-4">school Name</p>
            <input
              type="text"
              className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none"
              placeholder="Your school name as applicable"
            />
            <p className="px-4">Nature of Counseling you are seeking</p>
            <select className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none">
              <option className="text-gray-400">select one</option>
              <option value="Acedemics">Acedemics</option>
              <option value="Relationship">Relationship</option>
              <option value="Social life, others">Social life, others</option>
            </select>
            <p className="px-4">
              Describe the hardships you are facing in few words
            </p>
            <textarea
              placeholder="describe here"
              rows="4"
              cols="10"
              className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-xl focus:outline-none"
            ></textarea>
            <p className="px-4">Available for Counseling via</p>
            <select className="py-3 px-3 border-2 focus:shadow-xl my-2 w-full shadow-md rounded-full focus:outline-none">
              <option className="text-gray-400">select one</option>
              <option value="Acedemics">Phone Call</option>
              <option value="Relationship">Video Call</option>
            </select>
            <center className="mt-8">
              <input
                type="submit"
                value="Book Your Session"
                className="px-4 py-2 border-2 border-black text-lg font-medium rounded-3xl text-black bg-white shadow-md hover:shadow-2xl hover:text-white hover:bg-black"
              />
            </center>
          </form>
        </div>
        <div className=" flex lg:w-[50%] w-full">
          <img
            data-aos="zoom-in"
            className="object-contain w-full lg:mb-0 mb-4 h-auto items-center"
            src="/images/products/Girl_on_a_chair.png"
            alt="Girl_on_a_chair"
          />
        </div>
      </div>
    </div>
  );
};

export default CounselingForm;
