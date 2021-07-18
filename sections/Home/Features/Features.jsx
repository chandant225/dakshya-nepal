import React, { useEffect } from "react";
import { FeatureCard } from "../../../components";
import { CursorClickIcon } from "@heroicons/react/solid";
import quizImg from "../../../public/illustrator/laptop_art2.png";
import interactiveImg from "../../../public/illustrator/laptop_art3.png";
import studyLaptopImg from "../../../public/illustrator/study_laptop.png";
import Aos from "aos";

const Features = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-20 container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="space-y-3 mt-10">
        <div
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos="tilt-ball"
          className="relative m-auto lg:m-0 flex items-center shadow-lg justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500"
          style={{
            backgroundImage:
              "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
          }}
        >
          <div
            className="absolute w-6 h-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full -top-4 -right-4"
            style={{
              backgroundImage:
                "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
            }}
          />
          <CursorClickIcon className="w-8 h-8  text-white" />
        </div>
        <div data-aos-duration="2000" data-aos="fade-right">
          <p className="font-primary font-medium text-lg text-gray-800">
            Smart School
          </p>
          <p className="font-primary capitalize text-left text-[32px] md:w-[420px] font-semibold">
            Making Your Learning Process More interactive and fun
          </p>
          <p className="font-primary tracking-wider text-base text-gray-600 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            perferendis, minima maxime facilis delectus culpa, vel voluptatum
            eius consequuntur sapiente accusamus
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5">
        <div
          data-aos-duration="2000"
          data-aos="flip-right"
          className="transform translate-y-0 space-y-10 place-self-center"
        >
          <FeatureCard
            title="Exam Quiz Software"
            description="Extensive quiz software for students which consists of question banks with over 1lac questions"
            image={quizImg}
          />
        </div>
        <div className="lg:space-y-10 space-y-6 lg:mt-0 mt-8 lg:ml-8">
          <div data-aos-duration="2000" data-aos="flip-left">
            <FeatureCard
              title="Interactive Application"
              description="Extensive quiz software for students which consists of question banks with over 1lac questions"
              image={interactiveImg}
            />
          </div>
          <div data-aos-duration="2000" data-aos="flip-left">
            <FeatureCard
              title="High Defination 3D/2D Content"
              description="Extensive quiz software for students which consists of question banks with over 1lac questions"
              image={studyLaptopImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
