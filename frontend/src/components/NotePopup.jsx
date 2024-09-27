import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Taginput } from "./Taginput";

export const NotePopup = ({noteData, type, onClose}) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null);

  const editNote = async () => {

  };

  const addNewNote = async () => {
    
  };

  const handleAddNote = () => {
    if(!title) {
      setError("Please enter the title");
      return;
    }

    if(!content) {
      setError("Please enter the content");
      return;
    }

    setError("");

    if(type === 'edit') {
      editNote()
    }
    else {
      addNewNote()
    }

  }

  return (
    <div className="relative">
      <div className="flex flex-col gap-2">
        <label className="uppercase">title</label>
        <input
          type="text"
          className="text-2xl to-slate-900 outline-none"
          placeholder="Add note"
          onChange={({target}) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="uppercase">content</label>
        <textarea
          className="text-slate-800 outline-none bg-slate-50 p-2 rounded-lg"
          type="text"
          placeholder="Content"
          rows={10}
          onChange={({target}) => setContent(target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="">tags</label>
        <Taginput tags={tags} setTags={setTags} />
      </div>
      <div className="flex justify-center">
        <button className="text-[16px] bg-blue-500 py-1 px-8 rounded-md mt-2 text-white font-bold">
          Add
        </button>
      </div>

      <IoMdCloseCircle
        className="text-red-600 absolute top-0 right-0"
        size={22}
        onClick={() => {
          window.location.reload();
        }}
      />
    </div>
  );
};
