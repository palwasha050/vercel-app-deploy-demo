import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  
  const navigate = useHistory();
  const data = {
    name: name,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/phase", data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD PHASE</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Phase"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD PHASE
        </button>
      </form>
    </div>
  );
}

export default Add;
