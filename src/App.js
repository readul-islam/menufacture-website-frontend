
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";

import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import TosterContainer from "./TosterContainer";



function App() {
  
  return (
    <div className="">
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="purchase/:id" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />
       <Route path="dashboard" element={<RequireAuth>
        <Dashboard />
       </RequireAuth>} >
         <Route index element={<MyOrders/>}></Route>
         <Route path="orders" element={<MyOrders/>}/>
         <Route path="add-review" element={<AddReview/>}/>
         <Route path="my-profile" element={<MyProfile/>}/>
        
         <Route path="payment/:id" element={
         <Payment />
       } ></Route>
         <Route path="orders/payment/:id" element={
         <Payment />
       } ></Route>
        
       </Route>
       
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
     <TosterContainer/>
      
    </div>
  );
}

export default App;
