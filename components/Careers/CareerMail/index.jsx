import React, { useState, useEffect } from "react";
import aos from "aos";
import axios from "axios";
import Notification from "../../Notification/Notification";

const CareerMail = () => {
  const url =
    "/api/forms/submit/careerReminder?token=account-8fcffe3170295d0872f210c4799ee1";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    position: "",
    email: "",
  });

  const { position, email } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      form: formData,
    };

    const finalUrl =
      process.env.NEXT_PUBLIC_PROXY_URL +
      process.env.NEXT_PUBLIC_CORE_API_URL +
      url;

    try {
      const res = await axios.post(finalUrl, data);
      console.log(res);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    aos.init();
  });

  return (
    <>
      <div className="container mx-auto py-[58px] lg:py-[90px]">
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="font-medium font-primary text-2xl md:text-3xl capitalize"
        >
          Can’t find what you do?
        </p>
        <div className="mt-[32px] p-[24px] border-solid border-[2px] border-gray-300 rounded-2xl flex flex-col lg:flex-row ">
          <div className="w-[100%] lg:w-[29%] xl:w-[29%]">
            <p className="font-primary text-xl font-medium capitalize">
              get a reminder for these positions if they are open again.
            </p>
          </div>

          <form
            onSubmit={(e) => onSubmit(e)}
            className="flex items-center mt-5 lg:mt-0 lg:float-right"
          >
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 lg:ml-20">
              <div className="">
                <input
                  id="position"
                  onChange={(e) => onChangeHandler(e)}
                  value={position}
                  required
                  type="text"
                  placeholder="Enter a Position"
                  className="text-base font-primary border-2 border-gray-300 rounded-lg w-full py-[11px] pl-[11px] lg:pr-[24px]  text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="">
                <input
                  value={email}
                  onChange={(e) => onChangeHandler(e)}
                  id="email"
                  type="email"
                  required
                  placeholder="Your E-mail *"
                  className="text-base font-primary border-2 border-gray-300 rounded-lg w-full py-[11px] pl-[11px] pr-[24px]  text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                className=" bg-black text-white font-primary lg:place-self-end  font-bold w-2/4 md:w-3/4  py-[9px] lg:py-[15px] px-[13px] lg:px-[26px] lg:self-end rounded-md  "
                type="submit"
              >
                Apply
              </button>
            </div>
          </form>
          {success && (
            <Notification
              message="Request Success"
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
      </div>
    </>
  );
};

export default CareerMail;
