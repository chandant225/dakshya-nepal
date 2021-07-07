import React, { useEffect } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Link from "next/link";
import CounselingForm from "../../components/CounselingForm/CounselingForm";
import Aos from "aos";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";

const GuidanceCounseling = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <div className="container mx-auto">
      <div className="flex flex-row relative justify-between py-8 lg:shadow-none shadow-md">
        <Accordion title={"Guidance Counseling"} />
        <Link href="#councelingForm">
          <a className="absolute lg:top-12 top-6 lg:right-6 right-2 ">
            <SecondaryButton text={"Book Session"} />
          </a>
        </Link>
      </div>
      <div className="lg:mt-0 mt-8">
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
        <div className="flex lg:flex-row flex-col-reverse lg:gap-12 gap-4 items-center justify-center lg:py-10">
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
          <div
            data-aos="fade-up"
            className="bg-[#FEF6E0] lg:w-[40%] lg:mt-0 mt-6"
          >
            <img
              className="w-full object-contain"
              src="/images/products/counseling/1.svg"
              alt="Coping With Academic And Personal Struggles"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-12 gap-4 items-center justify-center lg:py-10">
          <div className="bg-[#FEF6E0] lg:w-[40%] lg:mt-0 mt-6">
            <img
              data-aos="flip-left"
              className="w-full object-contain"
              src="/images/products/counseling/2.svg"
              alt="Minimizing Gap In Parent-Child Relationship"
            />
          </div>

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
        <div className="flex lg:flex-row flex-col-reverse lg:gap-12 gap-4 items-center justify-center lg:py-10">
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
          <div className="bg-[#FEF6E0] lg:w-[40%] lg:mt-0 mt-6">
            <img
              data-aos="zoom-in"
              className="w-full object-contain"
              src="/images/products/counseling/3.svg"
              alt="Reliable Support System For Students"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-12 gap-4 items-center justify-center lg:py-10">
          <div className="bg-[#FEF6E0] lg:w-[40%] w-full lg:mt-0 mt-6">
            <img
              data-aos="fade-up"
              className="w-full object-contain"
              src="/images/products/counseling/4.svg"
              alt="Facilitated Mediator For Parents"
            />
          </div>

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
          <div className="bg-[#FEF6E0] lg:w-[35rem] flex w-full lg:h-[32rem] h-auto lg:py-0 py-8">
            <img
              className="object-contain w-full items-center justify-center"
              src="/illustrations/Girl on a chair.svg"
              alt="Girl_on_a_chair"
            />
          </div>
        </div>
      </div>
      <div className="lg:pt-12 pt-6">
        <div className="flex lg:flex-row flex-col gap-8 mt-2">
          <div className="lg:w-[50%] w-full flex bg-[#FEF6E0]">
            <img
              data-aos="zoom-in"
              className="object-contain items-center justify-center w-full"
              src="/images/online-classes.svg"
              alt="Online_classes"
            />
          </div>

          <div data-aos="zoom-in" className="lg:w-[50%] w-full">
            <h1 className="text-3xl font-medium">
              With Your Partnership With Us, We Promise On Fulfilling The
              Following Duties
            </h1>
            <p className="text-gray-500 mt-4">
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
