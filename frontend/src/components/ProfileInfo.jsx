import React from 'react'
import { getinitials } from '../utils/helper';

export const ProfileInfo = ({ onLogout }) => {

  return (
    <div className="absolute top-4 right-4 flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
        {getinitials("Tony Williams")}
      </div>
      <div>
        <p className="text-sm font-medium">William</p>
        <button className="text-blue-600 hover:text-blue-800" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
