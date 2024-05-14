import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPannel from "../Admin/componets/AdminPanel/AdminPannel";
// import DemoAdmin from "../Admin/Views/DemoAdmin";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<AdminPannel/>}></Route>
        {/* <Route path="/demo" element={<DemoAdmin/>}></Route> */}
        {/* <Route path='/admin'element={<Main}></Route> */}

      </Routes>
    </div>
  );
};

export default AdminRoutes;
