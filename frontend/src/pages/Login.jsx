import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { PasswordInput } from "../components/PasswordInput";
import { validemail } from "../utils/helper";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validemail(email)) {
      setError("Please enter valid email");
      return;
    }

    if(!password) {
      setError("Please enter correct password");
      return;
    }

    setError("")

  };

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Login
            </h2>

            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>

            <p className="text-center text-gray-600">
              Not registered yet?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
