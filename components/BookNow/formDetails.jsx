import React, { useState, useEffect } from "react";
import { dummy } from "./dummy";
import SelectedDetails from "./SelectedDetails";
import DefaultDetail from "./DefaultDetail";
import AOS from "aos";

const FormDetails = ({ activekey }) => {
  const currActiveProduct = dummy.filter((d) => d.id === activekey);
  useEffect(() => {
    AOS.init();
  });
  console.log(activekey)
  return (
    <div className="">
      { activekey === 0 ? (
        <DefaultDetail />
      ) : (
        <SelectedDetails currActiveProduct={currActiveProduct} />
      ) }
    </div>
  );
};

export default FormDetails;