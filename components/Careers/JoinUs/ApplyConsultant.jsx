import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'

const ApplyConsultant = ({ setApply }) => {

    const mobile = window.innerWidth <768;

    return (
        <div className=' bg-white'>
      <Transition appear show={true} as={Fragment} >
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
                <RemoveScroll className=''>
                    <div className=''>
                        <div className="flex">
                            <div className="px-[12px] md:p-[24px]  w-[100%] md:w-[60%] h-[100vh] md:h-[570px] mx-2 md:mx-0 overflow-auto bg-white">
                              <div className=" flex justify-between pt-3 md:pt-0">
                                <p className="text-lg lg:text-xl font-primary font-medium">Apply for counselor</p>
                                {mobile ? (
                                  <button
                                  type="button"
                                  className=" inline-flex justify-center pl-4 py-2 text-sm font-medium  rounded-full focus:outline-none "
                                  onClick={() => setApply(false)}
                                >
                                <img src="/icons/Exit.svg"  className=" bg-fixed h-4 w-4 md:h-6 md:w-6" alt='' />
                                </button>
                                ): null}
                              </div>

                                <div className="my-3">
                                    <label className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1" htmlFor="username">
                                        Your Name*
                                    </label>
                                    <input className=" text-sm font-primary border-2 border-gray-300 rounded-md  w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="username" name="username" type="text" placeholder="John Doe"/>
                                    </div>
                                    {/* -------------- */}
                                    <div class="my-3">
                                    <label className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1" htmlFor="gender">
                                       Gender
                                    </label>
                                    <select class=" text-sm font-primary border-2 border-gray-300 rounded-md  w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="gender" name="gender" type="text" placeholder="Select One">
                                      <option className='w-11/12'>Male</option>
                                      <option>Female</option>
                                      <option>Others</option>
                                    </select>
                                  </div>

                                    {/* ---------------- */}
                                    <div className="my-3">
                                    <label className="block text-gray-800 text-sm  w-11/12 md:w-full font-primary font-light mb-1" htmlFor="email">
                                    Your Email*
                                    </label>
                                    <input className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="email" name="email" type="email" placeholder="email@domain.com"/>
                                    </div>
                                    <div className="my-3">
                                    <label className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1" htmlFor="phone">
                                    Contact Number
                                    </label>
                                    <input className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="phone" name="phone" type="text" placeholder="9876564123"/>
                                    </div>
                                    <div className="my-3">
                                    <label className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1" htmlFor="address">
                                    Address
                                    </label>
                                    <textarea className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="address" name="address" type="text" placeholder="Input your address"/>
                                    </div>
                                    <div className="my-3">
                                    <label className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1" htmlFor="qualification">
                                    Education Qualification
                                    </label>
                                    <input className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="qualification" name="qualification" type="text" placeholder="Undergraduate"/>
                                    </div>
                                    <div className="my-3">
                                    <label className="block text-gray-800  text-sm w-11/12 md:w-full font-primary font-light mb-1" htmlFor="specialization">
                                    Any Specialization In Counseling
                                    </label>
                                    <input className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="specialization" name="specialization" type="text" placeholder="Training"/>
                                    </div>
                                    <div className="my-3">
                                    <label className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1" htmlFor="training">
                                    Counseling Or Related Subjects Training Or Courses
                                    </label>
                                    <input className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="training" id="training" type="text" placeholder="Your Training"/>
                                    </div>
                                    <div className="my-3">
                                    <label className="block text-gray-800 font-primary text-sm w-11/12 md:w-full font-light mb-1" htmlFor="occupation">
                                    Current Occupation
                                    </label>
                                    <input className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5   text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="occupation" name="occupation"  type="text" placeholder="Your Occupation"/>
                                    </div>
                                    <div className="my-3">
                                    <label className="block text-gray-800 text-sm w-11/12 md:w-full font-primary font-light mb-1" htmlFor="dakshya">
                                    Why do you want to associate with Dakshya Nepal?
                                    </label>
                                    <textarea className=" text-sm font-primary border-2 border-gray-300 rounded-md w-11/12 md:w-full py-2 md:py-3 px-2 md:px-5  text-gray-500 leading-tight focus:outline-none focus:border-blue-500" id="dakshya" name="dakshya" type="text" placeholder="Input your answer"/>
                                    </div>
                                    <button className=" bg-black text-white font-primary lg:place-self-end  font-bold  py-[8px] lg:py-[12px] px-[13px] lg:px-[24px] lg:self-end rounded-md my-2  "
                                        type="submit"
                                    >
                                    Submit
                                </button>

                            </div>
                            {mobile ? null : (
                              <>
                                <div className="w-[50%] bg-yellow-50">
                                    <div className="h-[570px] flex items-center">
                                        <img src="/illustrations/guidance form.svg" alt="" className='object-cover overflow-hidden h-full' />
                                    </div>
                                </div>

                    
                 <button
                    type="button"
                    className=" absolute top-[0px] right-[10px] md:top-[5px] md:right-[5px] inline-flex justify-center px-4 py-2 text-sm font-medium  rounded-full focus:outline-none "
                    onClick={() => setApply(false)}
                  >
                  <img src="/icons/Exit.svg"  className=" h-4 w-4 md:h-6 md:w-6" alt='' />
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
      )
}

export default ApplyConsultant