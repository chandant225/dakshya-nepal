import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import VideoData from "./videoData.json";
import ContactSalesForm from "../../components/ContactSalesForm/ContactSalesForm";
import Link from 'next/link';
import Aos from 'aos';

const SmartSchool = () => {
  const [classvideos, setclassvideos] = useState("");
  const [activeclass, setactiveclass] = useState(0);

  const ClassVideoSection = (n) => {
    setclassvideos(VideoData[n]);
    setactiveclass(n);
  };

  useEffect(() => {
    ClassVideoSection(0);
    Aos.init({
      duration:1000
    })
  }, []);

  return (
    <div className="lg:px-28 px-4">
      <div className="shadow-sm flex flex-row justify-between relative">
        <Accordion title={"Smart School"} />
        <Link href="#contactsales"><a>
        <button  className="text-white px-3 py-2 bg-black lg:w-[10rem] w-[10rem]  h-[3rem] rounded-full font-medium lg:mt-4 mt-2 absolute right-0  hover:border-2 border-black focus:outline-none hover:text-black hover:bg-white lg:mr-4">
          Contact Sales
        </button>
          </a></Link>
      
      </div>
      <div className="lg:py-8 mt-12">
        <h1 className="text-4xl font-medium">
          Smarter Way To Study With SmartSchool<br></br>
          Study'n'Learn
        </h1>
        <p className="text-gray-500 py-8">
          An eLearning package containing curriculum mapped K-12 digital content
          supported by robust assessment software - Examguru integrated on an
          advanced offline/online LMS. With over 50,000 modules mapped to school
          curriculum, the software is the best tool to ensure that students
          learn things at their own pace with interactive modules to get better
          understanding on the subject matter.
        </p>
      </div>
      <div>
        <h1 className="text-4xl font-medium">Why SmartSchool ?</h1>
      </div>
      <div  className="flex lg:flex-row flex-col gap-8 py-10 items-center align-middle justify-center">
        <img
             data-aos="fade-up"
          className=" lg:w-2/5 w-full h-80 object-cover"
          src="/images/products/smart-school/HD Animated Videos.svg"
          alt="HD Animated Videos"
        />
        <div data-aos="fade-up" className="lg:w-3/5 w-full ">
          <p className="text-2xl font-medium py-2">HD Animated Videos</p>
          <p className="text-gray-500">
            Ignite the spirit of learning in your child with high definition
            video lessons mapped as per the school curriculum. The complete
            concepts are captured in audio-visual format, which provides a
            better learning impact on the child, wherein the child is able to
            grasp the concept and is able to retain it for a longer duration.
          </p>
        </div>
      </div>
      <div  className="flex lg:flex-row flex-col-reverse gap-8 py-10 items-center align-middle justify-center">
        <div  data-aos="zoom-in-up" className="lg:w-3/5 w-full ">
          <p className="text-2xl font-medium py-2">Interactive Tools</p>
          <p className="text-gray-500">
            Revision is an integral part of any learning program, aimed at
            achieving good marks in the examination. Studynlearn package
            contains interactive revision tool, which are mapped as per the
            school curriculum and is the best last minute study tool for your
            child. With its vivid graphics and intuitiveness, the tools makes
            the revision time relaxing for the child.
          </p>
        </div>
        <img
         data-aos="zoom-in-up"
          className="lg:w-2/5 w-full h-80 object-cover"
          src="/images/products/smart-school/Interactive Tools.svg"
          alt="HD Animated Videos"
        />
      </div>
      <div className="flex lg:flex-row flex-col gap-8 py-10 items-center align-middle justify-center">
        <img
         data-aos="flip-right"
          className=" lg:w-2/5 w-full h-80 object-cover"
          src="/images/products/smart-school/Huge Question Bank.svg"
          alt="HD Animated Videos"
        />
        <div data-aos="flip-left" className="lg:w-3/5 w-full ">
          <p className="text-2xl font-medium py-2">Huge Question Bank</p>
          <p className="text-gray-500">
            Practice makes the man perfect”, this is certainly true for any
            school based examination. Studynlearn package contains an extensive
            question bank in form of practice tests, which is mapped as per the
            school curriculum. The question bank not only provides an extensive
            practice help for the child but also provides a complete analysis of
            the test taken and gives an insight into the relative rank compared
            to other test takers.
          </p>
        </div>
      </div>
      <div data-aos="slide-up" className="mt-10">
        <h1 className="text-4xl font-medium py-2">How It Works</h1>
        <div className="flex lg:flex-row flex-col-reverse gap-8 justify-between">
          <div>
            <div className="flex flex-row gap-4 py-5">
              <p className="border-2 px-5 py-2 text-3xl font-medium rounded-full">
                1
              </p>
              <div>
                <p className="text-2xl font-medium">Classroom Study</p>
                <p className="text-gray-700">Concept is taught in classroom.</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 py-5">
              <p className="border-2 px-5 py-3 lg:h-[4rem] h-[4rem] text-3xl font-medium rounded-full">
                2
              </p>
              <div>
                <p className="text-2xl font-medium">Self Study</p>
                <p className="text-gray-700">
                  Student studies the same concept in studynlearn package.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 py-5">
              <p className="border-2  px-5 py-3 lg:h-[4rem] h-[4rem] text-3xl font-medium rounded-full">
                3
              </p>
              <div>
                <p className="text-2xl font-medium">Quiz Practice</p>
                <p className="text-gray-700">
                  Student practices quiz for the same concepts.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-[35rem] h-[16rem]"
              src="/images/products/Girl_on_a_chair.png"
              alt="Girl_on_a_chair"
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-4xl font-medium">Demo Videos</h1>
        <div className="flex lg:flex-row flex-col gap-8 mt-8 border-2 rounded-xl p-4">
          <div className="flex lg:flex-col flex-row lg:overflow-visible overflow-x-auto gap-2 mt-2">
            {VideoData.map((data, index) => (
                <button
                  key={index}
                  className={
                    activeclass == index
                      ? "bg-black py-2 px-3 focus:outline-none text-lg rounded-xl text-gray-50"
                      : "text-lg font-medium py-2 px-3  text-gray-600"
                  }
                  onClick={() => ClassVideoSection(index)}
                >
                  {"Class" + (index + 1)}
                </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 lg:px-4">
            {classvideos &&
              classvideos.map((videodetails, index) => (
                <div data-aos="flip-right" key={index} className="p-4">
                  <iframe
                    className="shadow-lg rounded-xl"
                    src={videodetails.link}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                  ></iframe>
                  <h1 className="text-xl font-medium py-2">
                    {videodetails.sub}
                  </h1>
                  <p className="text-md text-gray-700">
                    {videodetails.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div id="contactsales" className="mt-8 border-2 rounded-xl lg:p-8 p-2">
        <h1 className="text-4xl font-medium py-3">
          Let's Start Learning With Study'n'Learn
        </h1>
        <ContactSalesForm />
      </div>
    </div>
  );
};

export default SmartSchool;
