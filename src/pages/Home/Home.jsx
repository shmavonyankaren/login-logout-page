import React from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./Events";
import Header from "./Header";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />\
      <div className="min-h-full">
        <Routes>
          <Route path="/" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
}
