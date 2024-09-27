import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

export const Taginput = ({tags, setTags}) => {
  const [inputvalue, setInputvalue] = useState("");

  const handleInput = ({ target }) => {
    setInputvalue(target.value);
  };

  const addNewTag = () => {
    if (!inputvalue.trim() !== "") {
      setTags([...tags, inputvalue.trim()]);
      setInputvalue("");
    }
  };

  const handleKeyDown = () => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagRemove) => {
    setTags(tags.filter((tag) => tag !== tagRemove));
  };

  return (
    <div>
        {
            tags?.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap mt-2">
                    {
                        tags.map((tag, index) => (
                            <span key={index} className="flex items-center gap-2 text-sm text-slate-900 bg-slate-200 rounded-md px-3 py-1">
                                # {tag}
                                <button onClick={()=>{handleRemoveTag(tag);}}><IoMdClose/></button>
                            </span>
                        ))
                    }
                </div>
            )
        }
      <div className="flex items-center space-x-3 mt-5">
        <input
          type="text"
          value={inputvalue}
          className="text-sm bg-gray-100 border border-gray-300 h-10 rounded-md outline-none px-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full transition duration-200 ease-in-out"
          placeholder="Enter your text here"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={() => {
            addNewTag();
          }}
          className="text-white bg-blue-500 h-10 w-10 rounded-md flex items-center justify-center hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
        >
          +
        </button>
      </div>
    </div>
  );
};
