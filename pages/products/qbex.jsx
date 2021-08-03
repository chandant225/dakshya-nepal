import React, { useEffect } from "react";
import Accordion from "../../components/Accordion/Accordion";
import QbexData from "./qbex.json";
import ContactSalesForm from "../../components/ContactSalesForm/ContactSalesForm";
import Aos from "aos";
import Link from "next/link";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";
import { NextSeo } from "next-seo";

const Qbex = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <NextSeo
        title="Qbex"
        description="An Artificial Intelligence (AI) Driven School Management System which can be customized to cater to every users’ needs, a powerful and easy to use system accessible at any time from anywhere."
        canonical="https://dakshyanepal.com/products/qbex"
        openGraph={{
          type: "website",
          locale: "en_IE",
          site_name: "Dakshya Nepal",
          url: "https://dakshyanepal.com/products/qbex",
          title:
            "Artificial Intelligence Driven School Management System(Qbex)",
          description:
            "An Artificial Intelligence (AI) Driven School Management System which can be customized to cater to every users’ needs, a powerful and easy to use system accessible at any time from anywhere.",
          images: [
            {
              url: "https://dakshyanepal.com/illustrations/Qubex.svg",
              width: 100,
              height: 100,
              alt: "Qbex",
            },
          ],
          site_name: "Dakshya nepal",
        }}
      />
      <div className="container mx-auto">
        <div className="shadow-sm lg:shadow-none flex relative flex-row justify-between py-8">
          <Accordion title={"Qbex"} />
          <Link href="#contactsales">
            <a className="absolute lg:top-12 lg:right-6 top-6 right-2 ">
              <SecondaryButton text={"Contact sales"} />
            </a>
          </Link>
        </div>
        <div>
          <h1 className="text-4xl font-medium py-8">
            Artificial Intelligence Driven School Management System
          </h1>
          <p className="text-gray-500">
            An Artificial Intelligence (AI) Driven School Management System
            which can be customized to cater to every users’ needs, a powerful
            and easy to use system accessible at any time from anywhere.
          </p>
          <div className="flex lg:flex-row flex-col mt-10 lg:gap-4 gap-12">
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
                efficient report card generation that frees teachers from a lot
                of stress.
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
        <div className="lg:mt-10 mt-8">
          <h1 className="text-4xl font-medium">Modules</h1>
          {QbexData &&
            QbexData.map((data, index) => (
              <>
                {data.left == true ? (
                  <div
                    data-aos="fade-up"
                    className="flex lg:flex-row flex-col lg:gap-12 gap-4 lg:mt-8 mt-6 items-center justify-center"
                  >
                    <div className="bg-[#FEF6E0] lg:w-[40%] p-6 ">
                      <img
                        className="w-full object-contain"
                        src={data.image_url}
                        alt={data.title}
                      />
                    </div>

                    <div className="lg:w-[60%] w-full">
                      <h1 className="text-2xl font-medium py-2">
                        {data.title}
                      </h1>
                      <p className="text-gray-500">{data.description}</p>
                    </div>
                  </div>
                ) : (
                  <div
                    data-aos="fade-up"
                    className="flex lg:flex-row flex-col-reverse lg:gap-12 gap-4 lg:mt-8 mt-6 items-center justify-center"
                  >
                    <div className="lg:w-[60%] w-full">
                      <h1 className="text-2xl font-medium py-2">
                        {data.title}
                      </h1>
                      <p className="text-gray-500">{data.description}</p>
                    </div>
                    <div className="bg-[#FEF6E0] lg:w-[40%] p-6">
                      <img
                        className="w-full object-contain"
                        src={data.image_url}
                        alt={data.title}
                      />
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>
        <div id="contactsales" className="border-2 p-4 mt-12 rounded-xl">
          <h1 className="text-4xl font-medium py-4">Contact Sales Form</h1>
          <ContactSalesForm />
        </div>
      </div>
    </>
  );
};

export default Qbex;
