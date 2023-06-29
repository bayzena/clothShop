import React from "react";
import { Routes, Route } from "react-router-dom";

import { pages } from "./Routes/constants";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import { MAIN } from "./constants";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={MAIN} element={<HeaderContainer />}></Route>
    </Routes>
  );
}

export default App;
