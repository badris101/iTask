import React from "react";

export default () => {
  return (
    <div className="p-8 shadow-md relative bg-white">
      <div className="flex items-center">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          className="w-10 h-10 block rounded object-cover object-top"
        />
        <div className="text-indigo-600 font-medium ml-3">Badris Abdelilah</div>
        <button className="bg-indigo-100 text-indigo-400 ml-auto w-8 h-8 flex items-center justify-center rounded">
          <svg
            stroke="currentColor"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </button>
      </div>
      <h1 className="font-medium text-lg mt-6">Contact List</h1>
      <p className="text-gray-600 text-sm">
        Fingerstache godard blog, cornhole meh hoodie
      </p>
      <div className="mt-6 flex">
        <button className="bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none">
          New Contact
        </button>
        <button className="ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">
          New Task
        </button>
        <div className="relative ml-auto flex-1 pl-8 sm:block hidden">
          <input
            placeholder="Search"
            type="text"
            className="w-full border rounded border-gray-400 h-full focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"
          />
          <svg
            stroke="currentColor"
            className="w-4 h-4 absolute right-0 top-0 mt-3 mr-2 text-gray-500"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>
    </div>
  );
};
