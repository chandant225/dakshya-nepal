import React, { useState, useEffect } from "react";
import Form from "../components/BookNow/form";
import FormDetails from "../components/BookNow/formDetails";
import { dummy } from "../components/BookNow/dummy";

const BookNow = () => {
  const [activekey, setActiveKey] = useState(0);
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-booking mt-10 ">
          <div className="bg-gradient-to-br from-yellow-200 to-primary flex justify-center items-center">
            <FormDetails activekey={activekey} />
          </div>
          <div className="bg-gray-50">
            <Form
              activekey={activekey}
              dummy={dummy}
              setActiveKey={setActiveKey}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
