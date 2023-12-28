import React from "react";
import { useSelector } from "react-redux";
import Event from "./Event";

export default function EventList() {
  const { events } = useSelector((state) => state.events);
  return (
    <div className="flex flex-wrap justify-center mt-3 border-spacing-1 rounded-xl py-3">
      {events.map((event) => {
        return (
          <div key={event.id} className="mx-2 my-2">
            <Event event={event} />{" "}
          </div>
        );
      })}
    </div>
  );
}
