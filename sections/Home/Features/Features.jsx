import React from "react";
import { FeatureCard } from "../../../components";
import { CursorClickIcon } from "@heroicons/react/solid";
import quizImg from "../../../public/illustrator/laptop_art2.png";
import interactiveImg from "../../../public/illustrator/laptop_art3.png";
import studyLaptopImg from "../../../public/illustrator/study_laptop.png";

const Features = () => {
  return (
    <div
      className="mt-20 container mx-auto grid gap-5"
      style={{ gridTemplateColumns: ".4fr 1fr" }}
    >
      <div className="space-y-3 mt-10">
        <div className="relative flex items-center shadow-lg justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-blue-300 to-purple-500">
          <div className="absolute w-6 h-6 bg-gradient-to-br from-blue-300 to-purple-500 rounded-full -top-4 -right-4" />
          <CursorClickIcon className="w-8 h-8 text-white" />
        </div>
        <p className="font-primary font-medium text-lg text-purple-500">
          Smart School
        </p>
        <p className="font-primary capitalize text-left text-[32px] md:w-[420px] font-semibold">
          Making Your Learning Process More interactive and fun
        </p>
        <p className="font-primary tracking-wider text-base text-gray-600 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          perferendis, minima maxime facilis delectus culpa, vel voluptatum eius
          consequuntur sapiente accusamus
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="transform translate-y-0 space-y-10 place-self-center">
          <FeatureCard
            title="Exam Quiz Software"
            description="Extensive quiz software for students which consists of question banks with over 1lac questions"
            image={quizImg}
          />
        </div>
        <div className="space-y-10">
          <FeatureCard
            title="Interactive Application"
            description="Extensive quiz software for students which consists of question banks with over 1lac questions"
            image={interactiveImg}
          />
          <FeatureCard
            title="High Defination 3D/2D Content"
            description="Extensive quiz software for students which consists of question banks with over 1lac questions"
            image={studyLaptopImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
