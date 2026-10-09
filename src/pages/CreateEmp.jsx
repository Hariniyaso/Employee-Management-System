import React, { useState } from "react";
import axios from "axios";
import { ToastContainer,toast,Zoom } from "react-toastify";

let CreateEmp=()=>{
let[ename,setename]=useState("");
let[email,setemail]=useState("");
let[designation,setdesignation]=useState("");

let handleSubmit = e=>{
    e.preventDefault();
    if(!ename.trim()){
        //alert("please enter valid name")
        toast.warn('🦄 please enter valid ename!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
});
        console.log("name is empty");
        return;
    }

    if(!email.trim()){
        //alert("please enter valid email")
        toast.warn('🦄 please enter valid email!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
});
        console.log("email is empty");
        return;
    }

    if(!designation.trim()){
        //alert("please enter valid designation")
        toast.warn('🦄 please enter valid designation!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
});
        console.log("designation is empty");
        return;
    }

    let newEmployee ={ename,email,designation}
    console.log(newEmployee);

    axios.post("http://localhost:4000/employees",newEmployee)
    //alert("new employee detail is added")
    toast.success('🦄 Employee detail is added!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
});
}

    return(<>

    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Zoom}
/>

    <h2>Register New Employee</h2>
    <form onSubmit={handleSubmit}>
        Name: <input type="text" value={ename} onChange={e=> setename(e.target.value)} required /> <br /> <br />
        Email: <input type="text" value={email} onChange={e=> setemail(e.target.value)} required /> <br /> <br />
        Designation: <input type="text" value={designation} onChange={e=> setdesignation(e.target.value)} required /> <br /> <br />
    <button>Register</button>
    </form>
    </>)
}
export default CreateEmp