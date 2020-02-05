import React from "react";

export default ({ selectedProfile }) => {
  return (
    <>
      <div className="p-8 bg-indigo-700 flex items-center">
        <img
          alt="img"
          src={selectedProfile.photo}
          className="w-16 h-16 mr-4 object-top object-cover rounded"
        />
        <div className="mr-auto">
          <h1 className="text-xl leading-none mb-1">{selectedProfile.name}</h1>
          <h2 className="text-indigo-400 text-sm">
            {selectedProfile.profession}
          </h2>
        </div>
        <button className="bg-indigo-600 text-white py-2 text-sm px-3 rounded focus:outline-none">
          New Task
        </button>
      </div>
      <div className="p-8 flex flex-1 items-start overflow-auto">
        <div className="flex-shrink-0 text-sm sticky top-0">
          <div className="flex items-center text-white mb-3">
            Open{" "}
            <span className="italic text-sm ml-1 text-indigo-300">(10)</span>
          </div>
          <div className="flex items-center text-indigo-300 mb-3">
            In Progress <span className="italic text-sm ml-1">(8)</span>
          </div>
          <div className="flex items-center text-indigo-300">
            Closed <span className="italic text-sm ml-1">(4)</span>
          </div>
        </div>
        <div className="flex-1 pl-10">
          <div className="flex mb-8">
            <div className="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div className="flex-grow">
              <h3 className="text-sm mb-1">
                Actually tbh godard try-hard jianbing vape
              </h3>
              <h4 className="text-xs text-indigo-300 italic">24 min ago</h4>
            </div>
            <button className="text-indigo-300 flex-shrink-0 ml-2">
              <svg
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
