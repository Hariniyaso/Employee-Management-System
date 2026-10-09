
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

let Dashboard=()=>{
    return(<>
    <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h2>Dashboard</h2>
        <div style={{display:"flex", gap:"50px"}}>
            <NavLink to="ViewAll">View All Employee</NavLink>
            <NavLink to="CreateEmp">Create Employee</NavLink>
        </div>
    </nav>
    <hr />
    <Outlet/>
    
    </>)
}
export default Dashboard