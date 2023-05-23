import React, { useState, useEffect } from "react";
import "./App.css";
import viteLogo from "/vite.svg";
import routes from "./routes.jsx";
import { json, useRoutes } from "react-router-dom";
import { Header } from "./Components/Header";

function App() {
  const Routes = useRoutes(routes);

  return (
    <div className="bg-[#fdfdfd] w-full h-screen">
      <Header />
      {Routes}
    </div>
  );
}

export default App;
