import React from "react";
import { InfoCard } from "../../../components";

import book_img from "../../../public/icons/Book.svg";

const InfoCards = () => {
  return (
    <div className="container mx-auto mt-24 flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-10 md:space-y-0">
      <InfoCard title="Reforming Education" image={book_img} />
      <InfoCard title="Reforming Education" image={book_img} />
      <InfoCard title="Reforming Education" image={book_img} />
    </div>
  );
};

export default InfoCards;
