import React from "react";
import { InfoCard } from "../../../components";

import book_img from "../../../public/icons/Book.svg";

const InfoCards = () => {
  return (
    <div className="container mx-auto mt-24 flex items-center justify-center space-x-10">
      <InfoCard title="Reforming Education" image={book_img} />
      <InfoCard title="Reforming Education" image={book_img} />
      <InfoCard title="Reforming Education" image={book_img} />
    </div>
  );
};

export default InfoCards;
