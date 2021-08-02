import React, { useState, useEffect } from "react";
import Form from "../components/BookNow/form";
import FormDetails from "../components/BookNow/formDetails";
import { dummy } from "../components/BookNow/dummy";

const BookNow = () => {
  const [activekey, setActiveKey] = useState(0);
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow mt-10 ">
          <div className="" style={{ backgroundColor: "#f9ea8f" }}>
            <FormDetails activekey={activekey} />
          </div>
          <div className="">
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
