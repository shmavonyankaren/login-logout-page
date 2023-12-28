import React from "react";
import SearchEvent from "./SearchEvent";
import AddEvent from "./AddEvent";
import EventList from "./EventList";

export default function Events() {
  return (
    <div className="">
      <SearchEvent />
      <AddEvent />
      <EventList />
    </div>
  );
}
