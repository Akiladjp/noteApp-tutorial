import React, { useState } from "react";
import { TiPin } from "react-icons/ti";
import { TiPinOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  const [isPin, setIsPin] = useState(isPinned);

  const handlePinNote = () => {
    setIsPin(!isPin);
    onPinNote(); // Call the external function to handle pinning outside the component
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto w-[400px] m-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h6 className="text-lg font-semibold text-gray-800">{title}</h6>
          <span className="text-sm text-gray-500">{date}</span>
        </div>

        <TiPin
          onClick={handlePinNote}
          className={`${isPin ? 'text-yellow-500' : 'text-gray-400'} cursor-pointer`}
          size={24}
        />
      </div>

      <p className="text-gray-700 mb-4">{content?.slice(0, 60)}...</p>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
            {tags}
          </span>
        </div>

        <div className="flex space-x-3">
          <CiEdit
            onClick={onEdit}
            className="text-green-500 cursor-pointer"
            size={20}
          />
          <MdDeleteOutline
            onClick={onDelete}
            className="text-red-500 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};
