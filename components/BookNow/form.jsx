import React, { useEffect, useState } from "react";
import Aos from "aos";
import { PrimaryButton } from "..";
import Notification from "../Notification/Notification";
import axios from "axios";

const Form = ({ activekey, setActiveKey, dummy }) => {
  const url =
    "/api/forms/submit/guidanceCounseling?token=account-8fcffe3170295d0872f210c4799ee1";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    occupation: "",
    grade: "",
  });

  const { name, email, phone, product, occupation, grade } = formData;

  console.log(activekey, product, grade);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setActiveKey(parseInt(e.target.selectedOptions[0].id));
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
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <div>
      <div className="flex py-[50px] px-[25px]">
        <div data-aos="zoom-in" className=" w-full p-4">
          <form onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="name" className="font-primary text-gray-500">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 rounded-xl focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email" className="font-primary text-gray-500">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 rounded-xl focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="Enter your email address "
              required
            />
            <label htmlFor="phone" className="font-primary text-gray-500">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => onChangeHandler(e)}
              className="py-3 px-3 border-2 rounded-xl focus:border-blue-400 my-2 w-full focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
            <label htmlFor="product" className="font-primary text-gray-500">
              Product Type
            </label>
            <select
              id="product"
              value={product}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Select Your Product Type"
              className="py-3 px-3 border-2 rounded-xl bg-white focus:border-blue-400 my-2 w-full focus:outline-none"
            >
              {dummy.map((data, index) => {
                return (
                  <option value={data.name} id={data.id} key={index}>
                    {data.name}
                  </option>
                );
              })}
            </select>

            <div className="grid grid-cols-2  gap-4 lg:gap-6">
              <div className="">
                <label htmlFor="grade" className="font-primary text-gray-500">
                  Grade
                </label>
                <select
                  id="grade"
                  value={grade}
                  onChange={(e) => onChangeHandler(e)}
                  className="py-3 px-3 border-2 rounded-xl bg-white focus:border-blue-400 my-2 w-full focus:outline-none"
                >
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="">
                <label
                  htmlFor="occupation"
                  className="font-primary text-gray-500"
                >
                  Occupation
                </label>
                <input
                  placeholder="Enter your occupation"
                  type="text"
                  id="occupation"
                  value={occupation}
                  onChange={(e) => onChangeHandler(e)}
                  className="py-3 px-3 border-2 rounded-xl focus:border-blue-400 my-2 w-full focus:outline-none"
                ></input>
              </div>
            </div>

            <center className="mt-8">
              <PrimaryButton type="submit" text="Book Your Product" />
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
      </div>
    </div>
  );
};

export default Form;
