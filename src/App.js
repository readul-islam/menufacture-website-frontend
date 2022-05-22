
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import TosterContainer from "./TosterContainer";


function App() {
  return (
    <div className=" w-full  px-1  md:6 lg:px-12">
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
     <TosterContainer/>
      
    </div>
  );
}

export default App;
