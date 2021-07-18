import React from "react";
import { InfoCard } from "../../../components";

const InfoCards = () => {
  return (
    <div className="container mx-auto mt-24 flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-10 md:space-y-0">
      <InfoCard title="Reforming Education" pic="/icons/Book.svg" />
      <InfoCard title="Domain Expertise" pic="/icons/Medal.svg" />
      <InfoCard
        title="Building You To Build Nepal"
        pic="/icons/BookStack.svg"
      />
    </div>
  );
};

export default InfoCards;
