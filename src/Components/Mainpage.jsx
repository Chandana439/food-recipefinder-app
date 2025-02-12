import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Mainpage() {
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (search === "") {
      setMsg("Please enter a valid category");
    } else {
      e.preventDefault();
      setSearch("");
      setMsg("");
      navigate(`/${search}`);
    }
  };
  return (
    <div className="mainpage-wrapper">
      <div className="mainpage-container">
        <p className="title">Recipe Finder</p>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter category"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <br />
          <br />
          <input type="submit" value="Search"></input>
        </form>
        <h2>{msg}</h2>
      </div>
    </div>
  );
}
