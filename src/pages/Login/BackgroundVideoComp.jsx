import React from "react";
import share from "../../assets/share.mp4";

export default function BackgroundVideoComp() {
  return (
    <div>
      <video
        src={share}
        type="video/mp4"
        controls={false}
        loop
        muted
        autoPlay
        className="w-full h-full object-cover"
      />
    </div>
  );
}
