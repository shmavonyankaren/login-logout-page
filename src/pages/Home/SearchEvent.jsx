import React from "react";
import SearchInput from "../../components/SearchInput";

export default function SearchEvent({ value, setValue }) {
  return (
    <div className="mr-3">
      <SearchInput value={value} setValue={setValue} />
    </div>
  );
}
