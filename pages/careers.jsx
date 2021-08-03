import Head from "next/head";
import React, { useState, useEffect } from "react";
import CareerDropdown from "../components/Careers/CareerDropdown";
import CareerMail from "../components/Careers/CareerMail";
import JoinUs from "../components/Careers/JoinUs";

const Careers = () => {
  const [careerData, setCareerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get data from api
    fetch(`${process.env.NEXT_PUBLIC_CORE_API_URL}/api/collections/get/careers`)
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setLoading(null);
        setCareerData(resultData.entries);
      }); // set data for the blog
  }, []);

  return (
    <div>
      <Head>
        <title>Careers</title>
      </Head>
      <JoinUs />
      <CareerDropdown data={careerData} loading={loading} />
      <CareerMail />
    </div>
  );
};

export default Careers;
