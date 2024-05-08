import React, { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
export default function Login(){
    
    const {setUsername, setShowProfile} = useContext(LoginContext)

    return (
      <div className="flex items-center justify-center h-screen bg-gray-300">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ minWidth: '300px' }}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              onChange={(event) => {setUsername(event.target.value)}}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={(event) => {
                event.preventDefault(); // Prevent default form submission behavior
                setShowProfile(true);
              }}
            >
              Sign In
            </button>

            {/* {showProfile && <h1>{username}</h1>} */}
          </div>
        </form>
      </div>
    );
  }
  