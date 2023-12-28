import React from "react";

export default function SearchInput({ value, setValue }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-0 block p-3 max-w-[350px] min-w-[350px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
        placeholder="Search event...."
      />
    </div>
  );
}
