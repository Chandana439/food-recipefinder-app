import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./Components/Mainpage";
import Mealinfo from "./Components/Mealinfo";
import SearchResults from "./Components/SearchResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/:query" element={<SearchResults />} />
      <Route path="/meal/:mealid" element={<Mealinfo />} />
    </Routes>
  );
}

export default App;
