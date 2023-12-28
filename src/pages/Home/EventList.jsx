import React from "react";
import { useSelector } from "react-redux";
import Event from "./Event";

export default function EventList() {
  const { events } = useSelector((state) => state.events);
  return (
    <div>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <Event event={event} />{" "}
          </div>
        );
      })}
    </div>
  );
}
