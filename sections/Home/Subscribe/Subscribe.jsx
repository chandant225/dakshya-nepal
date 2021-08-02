import React, { useState } from "react";
import axios from "axios";
import Notification from "../../../components/Notification/Notification";

const Subscribe = () => {
  const url = `/api/forms/submit/emailSubscriber?token=account-8fcffe3170295d0872f210c4799ee1`;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

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
      process.env.NEXT_PUBLIC_CORE_API_URL + url;

    try {
      const res = await axios.post(finalUrl, data);
      console.log(res);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="container mx-auto mt-24 flex flex-col items-center">
      <p className="text-center font-primary text-[32px] font-medium capitalize text-gray-900">
        Get Updated With Us
      </p>
      <div className="pt-10 w-full md:w-1/2">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="bg-white shadow-primary focus:shadow-lg hover:shadow-primary rounded-full flex justify-center items-center relative">
            <input
              type="email"
              required
              name="email"
              id="email"
              onChange={(e) => onChangeHandler(e)}
              value={email}
              placeholder="Your Email Address"
              className="text-lg font-primary rounded-full text-gray-400 w-full focus:outline-none py-6 px-3 md:px-6"
            />
            <button
              className={`absolute font-primary bg-[#ffc700] text-white focus:outline-none right-3 md:right-5 py-4 px-6 rounded-full hover:bg-yellow-400 transition-all ease-in-out duration-300${
                email === ""
                  ? "bg-opacity-30 cursor-not-allowed transition-none hover:bg-[#ffc700]"
                  : ""
              }`}
              type="submit"
              disabled={email === "" ? true : false}
            >
              Subscribe
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
  );
};

export default Subscribe;
