import React from "react";

export default ({ item, setProfile, selectedProfile }) => {
  return (
    <div
      onClick={() => setProfile(item)}
      className={
        selectedProfile && selectedProfile.id === item.id
          ? "bg-gray-200 px-8 py-6 flex items-center border-b border-gray-300"
          : "bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300"
      }
    >
      <div className="flex ml-4">
        <img
          src={item.photo}
          className="w-10 h-10 object-cover rounded object-top"
        />
        <div className="flex flex-col pl-4">
          <h2 className="font-medium text-sm">{item.name}</h2>
          <h3 className="text-gray-500 text-sm">{item.profession}</h3>
        </div>
      </div>
      <button className="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
        <svg
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 mr-2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
        Edit
      </button>
    </div>
  );
};
