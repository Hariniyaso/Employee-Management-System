import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

let ViewSingle=()=>{
    let[employee,setemployee]=useState({
        id:"",
        ename:"",
        email:"",
        designation:"",
    })
    let{id} = useParams();
    console.log(id);

    useEffect(()=>{
        let getData=async ()=>{
            let {data}=await axios.get(`http://localhost:4000/employees/${id}`);
            setemployee(data)
        }
        getData();
    },[])

    return(<center>
        <u>
            <h2>Employee information</h2>
        </u>
        <h3>Emp Id: {employee.id}</h3>
        <h3>Emp Name: {employee.ename}</h3>
        <h3>Emp Email: {employee.email}</h3>
        <h3>Emp Designation: {employee.designation}</h3>
        <NavLink to="/ViewAll">
        <button>View all employee</button></NavLink>
    </center>)
}
export default ViewSingle