import React, { useEffect } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Link from "next/link";
import CounselingForm from "../../components/CounselingForm/CounselingForm";
import Aos from "aos";

const GuidanceCounseling = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <div className="container mx-auto">
      <div className="shadow-sm flex flex-row relative justify-between">
        <Accordion title={"Guidance-Counseling"} />
        <Link href="#councelingForm">
          <a>
            <button className="text-white px-3 py-2 absolute right-0 bg-black lg:w-[10rem] w-[10rem] h-[3rem] rounded-full font-medium lg:mt-6 mt-2 hover:border-2 border-black focus:outline-none hover:text-black hover:bg-white lg:mr-4 mr-1">
              Book Session
            </button>
          </a>
        </Link>
      </div>
      <div className="mt-6">
        <h1 className="text-4xl font-medium py-4">Guidance Counseling</h1>
        <p className="text-gray-500">
          Dakshya Nepal brings to you Guidance Counselors who help both the
          parents and students to resolve their respective issues. We are trying
          to incorporate wider goals of helping students develop socially,
          personally and academically. We are also trying to be the mediator for
          parents to help them find a better way to interact with their children
          academically and personally.
        </p>
      </div>
      <div className="">
        <div className="flex lg:flex-row flex-col-reverse lg:gap-12 gap-4 items-center justify-center">
          <div data-aos="fade-up-right" className="lg:w-[60%] w-full">
            <h1 className="text-2xl font-medium py-2">
              Coping With Academic And Personal Struggles
            </h1>
            <p className="text-gray-500">
              Students go through plenty of hardships in studies, relationships
              with friends and family, social life or the outside world which
              needs to be addressed in a proper time. Guidance counselors are
              here to help them tackle such hurdles they face.
            </p>
          </div>
          <img
            data-aos="fade-up"
            className="lg:w-[40%] w-full"
            src="/images/products/counceling/1.svg"
            alt="Coping With Academic And Personal Struggles"
          />
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-12 gap-4 items-center justify-center">
          <img
            data-aos="flip-left"
            className="lg:w-[40%] w-full"
            src="/images/products/counceling/2.svg"
            alt="Minimizing Gap In Parent-Child Relationship"
          />
          <div data-aos="flip-right" className="lg:w-[60%] w-full">
            <h1 className="text-2xl font-medium py-2">
              Minimizing Gap In Parent-Child Relationship
            </h1>
            <p className="text-gray-500">
              Kids are not comfortable sharing their problems with their parents
              fearing they might not understand while parents find it difficult
              to get through their children in most situations. Guidance
              counselors will help both of them tie up the loose ends
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse lg:gap-12 gap-4 items-center justify-center">
          <div data-aos="slide-up" className="lg:w-[60%] w-full">
            <h1 className="text-2xl font-medium py-2">
              Reliable Support System For Students
            </h1>
            <p className="text-gray-500">
              Students will find the support system they are looking for and
              achieve their respective goals to develop socially, personally and
              academically. This will always be kept confidential
            </p>
          </div>
          <img
            data-aos="zoom-in"
            className="lg:w-[40%] w-full"
            src="/images/products/counceling/3.svg"
            alt="Reliable Support System For Students"
          />
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-12 gap-4 items-center justify-center">
          <img
            data-aos="fade-up"
            className="lg:w-[40%] w-full"
            src="/images/products/counceling/4.svg"
            alt="Facilitated Mediator For Parents"
          />
          <div data-aos="fade-up" className="lg:w-[60%] w-full">
            <h1 className="text-2xl font-medium py-2">
              Facilitated Mediator For Parents
            </h1>
            <p className="text-gray-500">
              Many parents struggle dealing with their kids with respect to
              academia, technology and personals, Dakshya Nepal promises to be
              the mediator the parent needs.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="slide-up" className="mt-10">
        <h1 className="text-4xl font-medium py-4">How It Works</h1>
        <div className="flex lg:flex-row flex-col-reverse gap-8 justify-between">
          <div>
            <div className="flex flex-row gap-4 py-5">
              <p className="border-2 px-5 py-3 lg:h-[4rem] h-[4rem] text-3xl font-medium rounded-full">
                1
              </p>
              <div>
                <p className="text-2xl font-medium">Book Your Session</p>
                <p className="text-gray-700">
                  Book your counseling session by filling the form.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 py-5">
              <p className="border-2 px-5 lg:h-[4rem] h-[4rem] py-3 text-3xl font-medium rounded-full">
                2
              </p>
              <div>
                <p className="text-2xl font-medium">We Will Contact You</p>
                <p className="text-gray-700">
                  We will contact you and set up a meeting.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 py-5">
              <p className="border-2 lg:h-[4rem] h-[4rem] px-5 py-3 text-3xl font-medium rounded-full">
                3
              </p>
              <div>
                <p className="text-2xl font-medium">Guidance Counseling</p>
                <p className="text-gray-700">
                  Guidance Counselor will complete the requires process.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 py-5">
              <p className="border-2 lg:h-[4rem] h-[4rem]  px-5 py-3 text-3xl font-medium rounded-full">
                4
              </p>
              <div>
                <p className="text-2xl font-medium">Follow Up If Necessary</p>
                <p className="text-gray-700">Follow up if necessary</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-[35rem]  h-[16rem]"
              src="/images/products/Girl_on_a_chair.png"
              alt="Girl_on_a_chair"
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex lg:flex-row flex-col gap-8">
          <img
            data-aos="zoom-in"
            className="object-cover lg:w-[50%] w-full"
            src="/images/products/Online_classes.png"
            alt="Online_classes"
          />
          <div data-aos="zoom-in" className="lg:w-[50%] w-full mt-8">
            <h1 className="text-3xl font-medium ">
              With Your Partnership With Us, We Promise On Fulfilling The
              Following Duties
            </h1>
            <p className="text-gray-500">
              Counseling with regards to academics Providing instruction on
              psychological and social issues Help with college or career
              selection Early intervention about learning difficulties Maintain
              academic standards Develop skills to improve organization, time
              management and study habits Identify interests, strengths and
              aptitudes through assessment Any other aspect on which guidance is
              needed
            </p>
          </div>
        </div>
      </div>
      <div id="councelingForm" className="mt-12">
        <h1 className="text-4xl font-medium py-4">
          Lets Start Learning With Guidance Counseling Sessions
        </h1>
        <div className="border-2 p-4 rounded-xl">
          <CounselingForm />
        </div>
      </div>
    </div>
  );
};

export default GuidanceCounseling;
