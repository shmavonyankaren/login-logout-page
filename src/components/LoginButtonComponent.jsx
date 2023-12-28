import React from "react";

export default function ButtonComponent({ text, type, onClickHandler }) {
  return (
    <div>
      <button
        className="border-2 border-gray-800 bg-gray-100 shadow-lg hover:bg-gray-800 hover:border-white hover:text-white rounded-lg px-4 py-1"
        type={type}
        onClick={onClickHandler}
      >
        {text}
      </button>
    </div>
  );
}
