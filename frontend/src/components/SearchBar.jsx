import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {

  return (
    <div className="mt-2 bg-slate-100 rounded-xl flex justify-between">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-s bg-transparent py-[4px] px-[32px] outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoCloseSharp
          onClick={onClearSearch}
          className="my-auto mr-4 cursor-pointer"
        />
      )}
      <FaSearch
        onClick={handleSearch}
        className="my-auto mr-4 cursor-pointer"
      />
    </div>
  );
};
