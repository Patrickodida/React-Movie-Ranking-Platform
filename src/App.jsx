import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Action from "./pages/Action";
import Adventure from "./pages/Adventure";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/action' element={<Action />} />
      <Route path='/Adventure' element={<Adventure />} />
    </Routes>
  )
}
export default App;