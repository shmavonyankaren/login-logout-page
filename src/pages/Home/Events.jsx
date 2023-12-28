import React, { useState } from "react";
import AddEvent from "./AddEvent";
import EventList from "./EventList";
import SearchEvent from "./SearchEvent";
import Preview from "./Preview";

export default function Events() {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <Preview />
      </div>
      <div className="flex justify-center mt-">
        <SearchEvent value={value} setValue={setValue} />
        <AddEvent />
      </div>
      <EventList searchingEvent={value} />
    </div>
  );
}
