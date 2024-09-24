import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="relative w-full">
      <input
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
      />

      <div className="absolute inset-y-0 right-3 flex items-center">
        {isShowPassword ? (
          <FaRegEye
            size={22}
            className="text-blue-500 cursor-pointer"
            onClick={() => toggleShowPassword()}
          />
        ) : (
          <FaRegEyeSlash
            size={22}
            className="text-blue-500 cursor-pointer"
            onClick={() => toggleShowPassword()}
          />
        )}
      </div>
    </div>
  );
};
