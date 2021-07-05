import React, { useState, useEffect } from "react";
import { Team_Data } from "./TeamData";
import TeamSkeleton from "./TeamSkeleton";
import TeamWithDesc from "./TeamWithDesc";
import TeamWithoutDesc from "./TeamWithoutDesc";

const Teams = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CORE_API_URL}/api/collections/get/teams`)
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setLoading(null);
        setTeamData(resultData.entries);
      }); // set data for the blog
  }, []);

  return (
    <div>
      <div className="pt-[80px] lg:pt-[91px] container mx-auto">
        <p className="text-3xl font-primary font-semibold text-gray-800">
          People @Dakshya Nepal
        </p>
        <div className="pt-[65px] grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Team_Data.map((data, index) => {
            return <TeamWithDesc key={index} member={data} />;
          })}
        </div>
        {loading ? (
          <TeamSkeleton />
        ) : (
          <div className="pt-[32px] lg:pt-[70px] pb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[16px] gap-y-[24px] md:gap-[28px] xl:gap-[28px] ">
            {teamData.map((data, index) => {
              return <TeamWithoutDesc member={data} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
