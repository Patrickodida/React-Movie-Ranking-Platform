import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Action from "./pages/Action";
import Adventure from "./pages/Adventure";
import Scifi from "./pages/Scifi";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/action' element={<Action />} />
      <Route path='/Adventure' element={<Adventure />} />
      <Route path='/Scifi' element={<Scifi />} />
    </Routes>
  )
}
export default App;