import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import viteLogo from "/vite.svg";
import routes from "./routes.jsx";
import { json, useRoutes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/sidebar/Sidebar";
function App() {
  const Routes = useRoutes(routes);

  return (
    <div className="bg-[#fdfdfd] w-full">
      <Header />
      <div className="flex px-4 mt-1 xs:pl-0">
        <Sidebar />
        <div className=" w-[calc(100%-236px)] pb-4 xs:w-[calc(100%-161px)]">
          {Routes}
        </div>
      </div>
    </div>
  );
}

export default App;
