import React from "react";
import { FeatureCard } from "../../../components";
import { CursorClickIcon } from "@heroicons/react/solid";
import quizImg from "../../../public/illustrator/laptop_art2.png";
import interactiveImg from "../../../public/illustrator/laptop_art3.png";
import studyLaptopImg from "../../../public/illustrator/study_laptop.png";

const Features = () => {
  return (
    <div
      className="mt-20 container mx-auto grid items-center justify-center gap-5"
      style={{ gridTemplateColumns: ".4fr 1fr" }}
    >
      <div className="space-y-3">
        <div className="flex items-center shadow-lg justify-center w-20 h-20 rounded-tr-full rounded-tl-full rounded-br-3xl rounded-bl-full bg-gradient-to-tr from-blue-300 to-purple-500">
          <CursorClickIcon className="w-8 h-8 text-white" />
        </div>
        <p className="font-primary font-medium text-lg text-purple-500">
          Features
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
        <div className="transform translate-y-14 space-y-10">
          <FeatureCard
            title="Exam Quiz Software"
            description="Extensive quiz software for students which consists of question banks with over 1lac questions"
            image={quizImg}
          />
          <FeatureCard
            title="Interactive Application"
            description="Extensive quiz software for students which consists of question banks with over 1lac questions"
            image={interactiveImg}
          />
        </div>
        <div className="space-y-10">
          <FeatureCard
            title="High Defination 3D/2D Content"
            description="Extensive quiz software for students which consists of question banks with over 1lac questions"
            image={studyLaptopImg}
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
