import React, { useState, useEffect } from "react";
import "./App.css";
import viteLogo from "/vite.svg";
import routes from "./routes.jsx";
import { json, useRoutes } from "react-router-dom";

function App() {
  const Routes = useRoutes(routes);

  return <>{Routes}</>;
}

export default App;
