import React from "react";
import OurTeamCard from "./OurTeamCard";
import mkz from "../assets/TeamMember/minkhantzaw.jpg";
import wla from "../assets/TeamMember/wailinnaung.jpg";
import mnnn from "../assets/TeamMember/myonyinyinaing.jpg";
import stl from "../assets/TeamMember/shinthantlwin.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Wai Lin Aung",
      position: "CEO & Founder",
      image: wla,
    },
    {
      id: 2,
      name: "Min Khant Zaw",
      position: "General Manager",
      image: mkz,
    },
    {
      id: 3,
      name: "Myo Nyi Nyi Naing",
      position: "Chief Financial Officer",
      image: mnnn,
    },
    {
      id: 4,
      name: "Shin Thant Lwin",
      position: "Building Manager",
      image: stl,
    },
  ];

  console.log(teamMembers);

  return (
    <div>
      <div className=" lg:max-w-[1215px] xl:max-w-[1500px] lg:mx-auto mx-5">
        <div className=" text-center mb-20">
          <h1 className="text-[54px] dark:text-white text-black font-[700]">
            Our Team
          </h1>
        </div>
        <div className=" xl:max-w-[90%] mx-auto flex justify-center flex-wrap gap-3">
          {teamMembers.map((member, i) => (
            <OurTeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
