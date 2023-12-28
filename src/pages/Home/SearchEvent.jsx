import React, { useState } from "react";
import SearchInput from "../../components/SearchInput";

export default function SearchEvent() {
  const [value, setValue] = useState("");
  return (
    <div>
      <SearchInput value={value} setValue={setValue} />
    </div>
  );
}
