import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { NoteCard } from "../components/NoteCard";
import { IoMdAdd } from "react-icons/io";
import { NotePopup } from "../components/NotePopup";
import Modal from "react-modal";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-3">
        <NoteCard
          title={"Meeting on 23rd of October"}
          date={"1st of October"}
          content={"Annual Meeting"}
          tags={"#meeting"}
          isPinned={true}
          onEdit={false}
          onDelete={false}
        />

        <NoteCard
          title={"Meeting on 23rd of October"}
          date={"1st of October"}
          content={"Annual Meeting"}
          tags={"#meeting"}
          isPinned={true}
          onEdit={false}
          onDelete={false}
        />
      </div>

      <button
        onClick={() => setIsOpen({ isShown: true, type: "add", data: null })}
        className="w-12 h-12 bg-blue-500 rounded-2xl flex justify-center items-center shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-90 absolute bottom-4 right-4"
      >
        <IoMdAdd className="text-white" size={32} />
      </button>

      <Modal
        isOpen={isOpen.isShown}
        onRequestClose={() => {}}
        style={{ overlay: { backgroundColor: "rgba(0,0,0, 0.2)" } }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5"
      >
        <NotePopup
          type={isOpen.data}
          noteData={isOpen.data}
          onClose={() => {
            setIsOpen({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </div>
  );
};
