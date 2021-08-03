import React, { useState, useEffect } from "react";
import Aos from "aos";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import Notification from "../Notification/Notification";
import axios from "axios";

const ContactSalesForm = () => {
  const url = "/api/forms/submit/productContactForm";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, address, email, phone, message } = formData;

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
      setFormData({
        name: "",
        address: "",
        email: "",
        phone: "",
        message: "",
      })
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse lg:gap-4 gap-4 py-2">
        <div className="lg:w-[50%] w-full">
          <form onSubmit={(e) => onSubmit(e)} data-aos="zoom-in">
            <p>Name of Organization *</p>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => onChangeHandler(e)}
              required
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your organization name"
            />
            <p>Address</p>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your address"
            />
            <p>Email</p>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your email"
            />
            <p>Contact Number *</p>
            <input
              type="text"
              value={phone}
              required
              onChange={(e) => onChangeHandler(e)}
              id="phone"
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="input your phone number"
            />
            <p>Messages (if any)</p>
            <textarea
              placeholder="type your messages"
              id="message"
              value={message}
              required
              onChange={(e) => onChangeHandler(e)}
              rows="6"
              cols="10"
              className="py-3 px-3 border-2 focus:border-blue-400 my-2 w-full focus:outline-none"
            ></textarea>
            <center className="mt-8">
              <PrimaryButton type="submit" text={"Contact Sales"} />
            </center>
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
