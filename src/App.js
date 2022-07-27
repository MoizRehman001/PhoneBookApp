import { Route, Routes } from "react-router-dom";
import About from "./ReactRouting/About";
import Home from "./ReactRouting/Home";
import Main from "./ReactRouting/Main";
import { Navbar } from "./ReactRouting/Navbar";

function App() {
  return (
   <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
    </Routes>
   </>
  )
}

export default App;