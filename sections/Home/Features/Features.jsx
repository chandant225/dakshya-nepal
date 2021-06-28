import React from "react";
import { FeatureCard } from "../../../components";

import quizImg from "../../../public/illustrator/laptop_art2.png";
import interactiveImg from "../../../public/illustrator/laptop_art3.png";
import studyLaptopImg from "../../../public/illustrator/study_laptop.png";

const Features = () => {
  return (
    <div className="mt-24 container mx-auto flex flex-col items-center justify-center">
      <p className="font-primary capitalize text-center text-[32px] w-[494px] font-semibold">
        Making Your Learning Process More interactive and fun
      </p>
      <div className="flex space-x-14 pt-10">
        <FeatureCard
          title="Exam Quiz Software"
          description="Extensive quiz software for students which consists of question banks with over 1lac questions, full length test series for competitive examinations, extensive study material, GK/IQ based tests along with test analysis and feedback report."
          image={quizImg}
        />
        <FeatureCard
          title="Interactive Application"
          description="Extensive quiz software for students which consists of question banks with over 1lac questions, full length test series for competitive examinations, extensive study material, GK/IQ based tests along with test analysis and feedback report."
          image={interactiveImg}
        />
        <FeatureCard
          title="High Defination 3D/2D Content"
          description="Extensive quiz software for students which consists of question banks with over 1lac questions, full length test series for competitive examinations, extensive study material, GK/IQ based tests along with test analysis and feedback report."
          image={studyLaptopImg}
        />
      </div>
    </div>
  );
};

export default Features;
