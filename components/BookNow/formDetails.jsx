import React, { useState, useEffect } from "react";
import { ProductNav, PrimaryButton } from "..";
import { dummy } from "./dummy";
import SelectedDetails from "./SelectedDetails";
import AOS from "aos";

const FormDetails = ({ activekey }) => {
  const currActiveProduct = dummy.filter((d) => d.id === activekey);
  useEffect(() => {
    AOS.init();
  });
  console.log(activekey)
  return (
    <div className="p-4">
      { activekey==0 ? (
        <h1>Helllllllllllllll</h1>
      ) : (
        <SelectedDetails currActiveProduct={currActiveProduct} />
      ) }
    </div>
  );
};

export default FormDetails;



{/* <SelectedDetails currActiveProduct={currActiveProduct} /> */}