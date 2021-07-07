import React, { useEffect } from "react";
import Aos from "aos";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";

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
            <p>Need guidance as</p>
            <select className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none">
              <option>select one</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
            <p>Your Name*</p>
            <input
              type="text"
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your name"
              required
            />

            <p>Address</p>
            <input
              type="text"
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your address "
            />
            <p>Contact Number *</p>
            <input
              type="text"
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your phone number"
            />
            <p>school Name</p>
            <input
              type="text"
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="Your school name as applicable"
            />
            <p>Nature of Counseling you are seeking</p>
            <select className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none">
              <option className="text-gray-400">select one</option>
              <option value="Acedemics">Acedemics</option>
              <option value="Relationship">Relationship</option>
              <option value="Social life, others">Social life, others</option>
            </select>
            <p>Describe the hardships you are facing in few words</p>
            <textarea
              placeholder="describe here"
              rows="4"
              cols="10"
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            ></textarea>
            <p>Available for Counseling via</p>
            <select className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none">
              <option className="text-gray-400">select one</option>
              <option value="Acedemics">Phone Call</option>
              <option value="Relationship">Video Call</option>
            </select>
            <center className="mt-8">
              <PrimaryButton text="Book Your Session" />
            </center>
          </form>
        </div>
        <div className=" flex lg:w-[50%] w-full bg-[#FEF6E0]">
          <img
            data-aos="zoom-in"
            className="object-contain w-full lg:mb-0 mb-4 h-auto items-center"
            src="/illustrations/Girl on a chair.svg"
            alt="Girl_on_a_chair"
          />
        </div>
      </div>
    </div>
  );
};

export default CounselingForm;
