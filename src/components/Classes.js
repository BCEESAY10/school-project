import React from "react";
import Navbar from "./Navbar";

export default function Classes() {


  return (
    <div className="mt-4 mx-auto bg-gray-200">
        <Navbar />
      <h2 className="text-3xl font-bold text-gray-800 text-center my-6">Classes</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-violet-600 mb-4 mx-4">Primary Section</h3>
          <ul className="grid grid-cols-3 gap-4 mx-4">
            {Array.from({ length: 6 }, (_, i) => (
              <li
                key={i + 1}
                className="p-4 bg-gray-100 text-xl shadow rounded hover:bg-violet-200 cursor-pointer"
              >
                Grade {i + 1}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-violet-600 mb-4 mx-4">Junior Secondary</h3>
          <ul className="grid grid-cols-3 gap-4 mx-4">
            {Array.from({ length: 3 }, (_, i) => (
              <li
                key={i + 7}
                className="p-4 bg-gray-100 text-xl shadow rounded hover:bg-violet-200 cursor-pointer"
              >
                Grade {i + 7}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-violet-600 mb-4 mx-4">Senior Secondary</h3>
          <ul className="grid grid-cols-3 gap-4 mx-4">
            {Array.from({ length: 3 }, (_, i) => (
              <li
                key={i + 10}
                className="p-4 bg-gray-100 text-xl shadow rounded hover:bg-violet-200 cursor-pointer"
              >
                Grade {i + 10}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
