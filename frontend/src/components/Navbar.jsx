import React, { useState } from "react";
import { ProfileInfo } from "./ProfileInfo";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = async (e) => {
    navigate("/");
  };

  const handleSearch = () => {

  };

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="pb-10 shadow-md flex justify-between items-center bg-white px-6 py-4 z-40">
      <div>
        <h3 className="text-2xl font-bold text-gray-800">Notes</h3>
      </div>

      <div>
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}

          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      </div>
      
      <div>
        <ProfileInfo onLogout={onLogout} />
      </div>
    </div>
  );
};
