import React, { useState, useEffect } from "react";
import "./App.css";
import viteLogo from "/vite.svg";
import routes from "./routes.jsx";
import { json, useRoutes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/sidebar/Sidebar";
function App() {
  const Routes = useRoutes(routes);

  return (
    <div className="bg-[#fdfdfd] w-full">
      <Header />
      <div className="flex px-4 mt-1">
        <Sidebar />
        {Routes}
      </div>
    </div>
  );
}

export default App;
