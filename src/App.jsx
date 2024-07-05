import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Action from "./pages/Action";
import Adventure from "./pages/Adventure";
import Scifi from "./pages/Scifi";
import Romance from "./pages/Romance";
import Comedy from "./pages/Comedy";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/action' element={<Action />} />
      <Route path='/Adventure' element={<Adventure />} />
      <Route path='/Scifi' element={<Scifi />} />
      <Route path='/Romance' element={<Romance />} />
      <Route path='/Comedy' element={<Comedy />} />
    </Routes>
  )
}
export default App;