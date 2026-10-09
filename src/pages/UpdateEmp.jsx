import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast ,Bounce } from "react-toastify";
let UpdateEmp=()=>{

    let[ename,setename]=useState("")
    let[email,setemail]=useState("")
    let[designation,setdesignation]=useState("")
    console.log(ename);
    console.log(email);
    console.log(designation);

    let {id}=useParams();
    console.log(id);

    let navigate = useNavigate();

useEffect(()=>{
    let getData= async()=>{
        let{data}=await axios.get("http://localhost:4000/employees/"+id)
        console.log(data);

        setename(data.ename);
        setemail(data.email)
        setdesignation(data.designation)
    }
 getData();
},[])

  let handleSubmit=e=>{
    e.preventDefault();
    console.log("form submitted");

    axios.put("http://localhost:4000/employees/"+id,{
        ename,
        email,
        designation,
    })
    toast.success('🦄 updated sucessfully!', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
setTimeout(()=>{
    navigate("/ViewAll");
},2000)
  }

    return(<>
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
    <h2>update Employee</h2>

    <form onSubmit={handleSubmit}>
        Name: <input type="text" value={ename} onChange={e=>setename(e.target.value)} /> <br /> <br />
        Email: <input type="text" value={email} onChange={e=>setemail(e.target.value)} />  <br /> <br />
        Designation: <input type="text" value={designation} onChange={e=>setdesignation(e.target.value)} /><br /> <br />
        <button>update</button>
    </form>
    </>)
}
export default UpdateEmp