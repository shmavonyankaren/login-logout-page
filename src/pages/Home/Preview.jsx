import React from "react";
import eventLogo from "../../assets/eventLogo.png";
import Cloud from "../../assets/Cloud.png";

export default function Preview() {
  return (
    <div className="relative inline-block">
      <div className="flex justify-center w-[1300px] h-[250px]">
        <img src={Cloud} className="block" alt="a" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center items-center mt-5 top-5">
            <h1 className="font-serif	text-5xl font-bold">Your </h1>
            <div className="mb-0">
              <img
                alt="eventLogo"
                className="min-w-[250px] max-w-[250px] min-h-[130px] max-h-[130px]"
                src={eventLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
