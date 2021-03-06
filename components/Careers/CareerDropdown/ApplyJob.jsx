import React from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import Notification from "../../Notification/Notification";

const ApplyJob = ({ setApply, title }) => {
  const mobile = window.innerWidth < 768;

  const url =
    "/api/forms/submit/jobApplication?token=account-8fcffe3170295d0872f210c4799ee1";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: "",
  });

  const { name, email, phone, message, resume } = formData;

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
    <div className=" bg-white">
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setApply(false)}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full md:max-w-2xl lg:max-w-screen-md xl:max-w-screen-[70%] overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl md:rounded">
                <div className="">
                  <RemoveScroll className="">
                    <div className="">
                      <div className="flex">
                        <form
                          onSubmit={(e) => onSubmit(e)}
                          className="px-[12px] md:px-[24px] md:pt-[15px]  w-[100%] md:w-[60%] h-[100vh] md:h-[570px] mx-2 md:mx-0 overflow-auto bg-white"
                        >
                          <div className=" flex justify-between pt-3 md:pt-0">
                            <p className="text-lg lg:text-xl font-primary font-medium">
                              Apply For {title}
                            </p>
                            {mobile ? (
                              <button
                                type="button"
                                className=" inline-flex justify-center pl-4 py-2 text-sm font-medium  rounded-full focus:outline-none "
                                onClick={() => setApply(false)}
                              >
                                <img
                                  src="/icons/Exit.svg"
                                  className=" bg-fixed h-4 w-4 md:h-6 md:w-6"
                                  alt=""
                                />
                              </button>
                            ) : null}
                          </div>

                          <div className="my-3">
                            <label
                              className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1"
                              htmlFor="name"
                            >
                              Your Name*
                            </label>
                            <input
                              className=" text-sm font-primary border-2 border-gray-300 rounded-md  w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                              id="name"
                              value={name}
                              onChange={(e) => onChangeHandler(e)}
                              type="text"
                              placeholder="John Doe"
                            />
                          </div>
                          <div className="my-3">
                            <label
                              className="block text-gray-800 text-sm  w-11/12 md:w-full font-primary font-light mb-1"
                              htmlFor="email"
                            >
                              Your Email*
                            </label>
                            <input
                              className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                              id="email"
                              value={email}
                              onChange={(e) => onChangeHandler(e)}
                              type="email"
                              placeholder="email@domain.com"
                            />
                          </div>
                          <div className="my-3">
                            <label
                              className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1"
                              htmlFor="phone"
                            >
                              Your Phone
                            </label>
                            <input
                              className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                              id="phone"
                              value={phone}
                              onChange={(e) => onChangeHandler(e)}
                              type="text"
                              placeholder="9876564123"
                            />
                          </div>
                          <div className="my-3">
                            <label
                              className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1"
                              htmlFor="message"
                            >
                              Messages (If any)
                            </label>
                            <textarea
                              className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                              id="message"
                              value={message}
                              onChange={(e) => onChangeHandler(e)}
                              type="text"
                              placeholder="Input your message"
                            />
                          </div>
                          <div className="my-3">
                            <label
                              className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1"
                              htmlFor="resume"
                            >
                              Your Resume Link *
                            </label>
                            <input
                              className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                              id="resume"
                              value={resume}
                              onChange={(e) => onChangeHandler(e)}
                              type="text"
                              placeholder="Google Drive Link"
                            />
                          </div>
                          <button
                            className=" bg-black text-white font-primary lg:place-self-end  font-bold  py-[8px] lg:py-[12px] px-[13px] lg:px-[24px] lg:self-end rounded-md my-2  "
                            type="submit"
                          >
                            Submit
                          </button>
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

                        {mobile ? null : (
                          <>
                            <div className="w-[50%] bg-yellow-50">
                              <div className="h-[570px] flex items-center">
                                <img
                                  src="/illustrations/guidance form.svg"
                                  alt=""
                                  className="object-cover overflow-hidden h-full"
                                />
                              </div>
                            </div>

                            <button
                              type="button"
                              className=" absolute top-[0px] right-[10px] md:top-[5px] md:right-[5px] inline-flex justify-center px-4 py-2 text-sm font-medium  rounded-full focus:outline-none "
                              onClick={() => setApply(false)}
                            >
                              <img
                                src="/icons/Exit.svg"
                                className=" h-4 w-4 md:h-6 md:w-6"
                                alt=""
                              />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </RemoveScroll>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ApplyJob;
