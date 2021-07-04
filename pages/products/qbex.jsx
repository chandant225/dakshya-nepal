import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import QbexData from "./qbex.json";
import ContactSalesForm from "../../components/ContactSalesForm/ContactSalesForm";

const Qbex = () => {
  return (
    <div className="lg:px-28 px-4">
      <div className="shadow-sm flex relative flex-row justify-between">
        <Accordion title={"Qbex"} />
        <button className="text-white absolute right-0 px-2 py-2 bg-black lg:w-[10rem] w-[10rem] h-[3rem] rounded-full font-medium mt-2 hover:border-2 border-black focus:outline-none hover:text-black hover:bg-white mr-4">
          Contact Sales
        </button>
      </div>
      <div>
        <h1 className="text-4xl font-medium py-8">
          Artificial Intelligence Driven School Management System
        </h1>
        <p className="text-gray-500">
          An Artificial Intelligence (AI) Driven School Management System which
          can be customized to cater to every users’ needs, a powerful and easy
          to use system accessible at any time from anywhere.
        </p>
        <div className="flex lg:flex-row flex-col my-12 gap-4">
          <div className="flex-1 text-center shadow-xl p-3 rounded-xl duration-700 ease-in-out transition-transform hover:transform hover:-translate-y-4">
            <div className="border-2 p-4 rounded-full w-[30%] m-auto">
              <img
                className="w-full object-cover"
                src="/icons/Qubex/Students & Parents.svg"
                alt="student and parents"
              />
            </div>

            <h1 className="text-2xl font-medium py-1">Students & Parents</h1>
            <p className="text-gray-500 py-1">
              Students can join online classes, receive and submit assignments
              and even sit in online exams. Parents can keep track of daily
              school activities and children’s performance.
            </p>
          </div>
          <div className="flex-1 text-center shadow-xl rounded-lg p-3 duration-700 ease-in-out transition-transform hover:transform hover:-translate-y-4">
            <div className="border-2 p-4 rounded-full w-[30%] m-auto">
              <img
                className="w-full object-cover"
                src="/icons/Qubex/Teachers.svg"
                alt="student and parents"
              />
            </div>
            <h1 className="text-2xl font-medium py-1">Teachers</h1>
            <p className="text-gray-500 py-1">
              Teachers can submit self-attendance and keep track of student
              attendance. Teachers can also manage online classes and
              assignments and even online exams. Qbex also provides the most
              efficient report card generation that frees teachers from a lot of
              stress.
            </p>
          </div>

          <div className="flex-1 text-center shadow-xl rounded-lg p-3 duration-700 ease-in-out transition-transform hover:transform hover:-translate-y-4">
            <div className="border-2 p-4 rounded-full w-[30%] m-auto">
              <img
                className="w-full object-cover"
                src="/icons/Qubex/Admin.svg"
                alt="student and parents"
              />
            </div>
            <h1 className="text-2xl font-medium py-1">Admin & Management</h1>
            <p className="text-gray-500 py-1">
              Admins have overall access and control of the system and all
              managerial tasks can be completed with ease in less time. Any
              department of the institution can be handled with less efforts
              providing great efficiency.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-medium">Modules</h1>
        {QbexData &&
          QbexData.map((data, index) => (
            <>
              {data.left == true ? (
                <div className="flex lg:flex-row flex-col lg:gap-12 gap-4 items-center justify-center">
                  <img
                    className="lg:w-[40%] w-full"
                    src={data.image_url}
                    alt={data.title}
                  />
                  <div className="lg:w-[60%] w-full">
                    <h1 className="text-2xl font-medium py-2">
                      {data.title}
                    </h1>
                    <p className="text-gray-500">{data.description}</p>
                  </div>
                </div>
              ) : (
                <div className="flex lg:flex-row flex-col-reverse lg:gap-12 gap-4 items-center justify-center">
                  <div className="lg:w-[60%] w-full">
                    <h1 className="text-2xl font-medium py-2">
                      {data.title}
                    </h1>
                    <p className="text-gray-500">{data.description}</p>
                  </div>
                  <img
                    className="lg:w-[40%] w-full"
                    src={data.image_url}
                    alt={data.title}
                  />
                </div>
              )}
            </>
          ))}
      </div>
      <div className="border-2 p-4 rounded-xl">
      <h1 className="text-4xl font-medium py-4">Contact Sales Form</h1>
      <ContactSalesForm />
      </div>
    
    </div>
  );
};

export default Qbex;
