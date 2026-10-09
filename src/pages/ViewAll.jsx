import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

let ViewAll=()=>{
let [employee,setemployee]=useState([]);
console.log(employee);

useEffect(()=>{
let getData=async()=>{
    let {data}=await axios.get("http://localhost:4000/employees");
    setemployee(data);
}
getData();
},[]);

return(<center>
<h2>Employee List</h2>

<table border="" cellPadding="10px" cellSpacing="0px"> 
<thead>
<tr>
    <th>EId</th>
    <th>Ename</th>
    <th>Email</th>
    <th>Designation</th>
    <th colSpan="3">Options</th>
</tr>
</thead>
<tbody>
    {employee.map((val,ind)=>{
        return(
            <tr key={ind}>
                <td>{val.id}</td>
                <td>{val.ename}</td>
                <td>{val.email}</td>
                <td>{val.designation}</td>
                <td>
                    <NavLink to={"/ViewSingle/"+val.id}>
                    <button>view</button></NavLink>
                </td>
                <td>
                    <NavLink to={"/UpdateEmp/"+val.id}>
                        <button>update</button></NavLink>
                    </td>
                <td><button onClick={()=>{
                    axios.delete("http://localhost:4000/employees/"+val.id);
                    window.alert("Employee details deleted sucessfully!!!");
                    location.assign("http://localhost:5173/ViewAll");
                }}>Delete</button></td>
            </tr>
        )
    })}
</tbody>
</table>

</center>)

}
export default ViewAll