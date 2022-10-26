import "./Main.css";
// import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Detail from "../Detail/Detail";

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </main>
  );
};

export default Main;
