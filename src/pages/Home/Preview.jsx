import React from "react";
import eventLogo from "../../assets/eventLogo.png";
export default function Preview() {
  return (
    <div className="flex justify-center items-center mt-5">
      <h1 className="font-serif	text-5xl">Your </h1>
      <div className="mb-0">
        <img
          alt="eventLogo"
          className="min-w-[250px] max-w-[250px] min-h-[130px] max-h-[130px]"
          src={eventLogo}
        />
      </div>
    </div>
  );
}
