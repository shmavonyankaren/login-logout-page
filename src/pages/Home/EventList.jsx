import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Event from "./Event";

export default function EventList({ searchingEvent }) {
  const { events } = useSelector((state) => state.events);
  const [newEvents, setNewEvents] = useState(events);
  useEffect(() => {
    const searchFunc = () => {
      return events.filter((event) => event.value === searchingEvent);
    };
    setNewEvents(searchFunc());
  }, [searchingEvent, events]);
  return (
    <div className="flex flex-wrap justify-center mt-3 border-spacing-1 rounded-xl py-3">
      {searchingEvent
        ? newEvents.map((event) => {
            return (
              <div key={event.id} className="mx-2 my-2">
                <Event event={event} />{" "}
              </div>
            );
          })
        : events.map((event) => {
            return (
              <div key={event.id} className="mx-2 my-2">
                <Event event={event} />{" "}
              </div>
            );
          })}
    </div>
  );
}
