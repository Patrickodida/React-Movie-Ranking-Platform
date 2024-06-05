import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Action from "./pages/Action";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/action' element={<Action />} />
    </Routes>
  )
}
export default App;