import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/phase/${id}`).then((res) => {
      setName(res.data.name);
    });
  }, []);

  const navigate = useHistory();

  const data = {
    name: name,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3001/phase/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Phase Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE PHASE
        </button>
      </form>
    </div>
  );
}

export default Add;
