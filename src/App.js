import React, { useState } from "react";
import ContactListHeader from "./features/ContactListHeader";
import Details from "./features/Details";
import ItemList from "./lib/ui-kit/ItemList";
import { data } from "./utils/data";

export default function App() {
  const [selectedProfile, setProfile] = useState(null);

  return (
    <div className="h-screen relative">
      <div className="flex w-full h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl">
        <div
          className={
            selectedProfile
              ? "lg:flex-grow bg-white text-gray-800 flex flex-col"
              : "lg:flex-grow bg-white text-gray-800 flex flex-col"
          }
        >
          <ContactListHeader />
          <div className="overflow-auto flex-grow bg-gray-100">
            {data.map(item => (
              <ItemList
                key={item.id}
                item={item}
                selectedProfile={selectedProfile}
                setProfile={setProfile}
              />
            ))}
          </div>
        </div>
        <div
          className={
            selectedProfile
              ? "lg:w-1/2 bg-indigo-600 text-white flex flex-col animation"
              : "animatedWidth bg-indigo-600 text-white flex flex-col animation"
          }
        >
          {selectedProfile && <Details selectedProfile={selectedProfile} />}
        </div>
      </div>
    </div>
  );
}
