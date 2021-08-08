import React, { useEffect, useState } from "react";
import Aos from "aos";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import Notification from "../Notification/Notification";
import axios from "axios";

const CounselingForm = () => {
  // const [apply, setApply] = useState(false);
  const url =
    "/api/forms/submit/guidanceCounseling?token=account-8fcffe3170295d0872f210c4799ee1";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    guidanceAs: "",
    name: "",
    address: "",
    phone: "",
    school: "",
    problems: "",
    nature: "",
    availableAs: "",
  });

  const {
    guidanceAs,
    name,
    address,
    phone,
    school,
    problems,
    nature,
    availableAs,
  } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      form: formData,
    };

    const finalUrl =
      // process.env.NEXT_PUBLIC_PROXY_URL +
      process.env.NEXT_PUBLIC_CORE_API_URL +
      url;

    try {
      const res = await axios.post(finalUrl, data);
      console.log(res);
      setFormData({
        guidanceAs: "",
        name: "",
        address: "",
        phone: "",
        school: "",
        problems: "",
        nature: "",
        availableAs: "",
      })
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse lg:gap-4 gap-4 py-2">
        <div data-aos="zoom-in" className="lg:w-[50%] w-full">
          <form onSubmit={(e) => onSubmit(e)}>
            <p>Need guidance as</p>
            <select
              id="guidanceAs"
              value={guidanceAs}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            >
              <option>select one</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
            <p>Your Name*</p>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your name"
              required
            />

            <p>Address</p>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your address "
            />
            <p>Contact Number *</p>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your phone number"
            />
            <p>school Name</p>
            <input
              type="text"
              id="school"
              value={school}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="Your school name as applicable"
            />
            <p>Nature of Counseling you are seeking</p>
            <select
              id="nature"
              value={nature}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            >
              <option className="text-gray-400">select one</option>
              <option value="Acedemics">Acedemics</option>
              <option value="Relationship">Relationship</option>
              <option value="Social life, others">Social life, others</option>
            </select>
            <p>Describe the hardships you are facing in few words</p>
            <textarea
              placeholder="describe here"
              id="problems"
              value={problems}
              onChange={(e) => onChangeHandler(e)}
              rows="4"
              cols="10"
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            ></textarea>
            <p>Available for Counseling via</p>
            <select
              id="availableAs"
              value={availableAs}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            >
              <option className="text-gray-400">select one</option>
              <option value="Acedemics">Phone Call</option>
              <option value="Relationship">Video Call</option>
            </select>
            <center className="mt-8">
              <PrimaryButton
                // onClick={() => setApply(true)}
                type="submit"
                text="Book Your Session"
              />
            </center>
          </form>
          {success && (
            <Notification
              message="Request Success!"
              setSuccess={setSuccess}
              setError={setError}
            />
          )}
          {error && (
            <Notification
              message="Could not send message. Please try again!"
              error
              setSuccess={setSuccess}
              setError={setError}
            />
          )}
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
