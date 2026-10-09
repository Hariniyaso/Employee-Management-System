import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from"./pages/Dashboard";
import CreateEmp from "./pages/CreateEmp";
import ViewAll from "./pages/ViewAll";
import ViewSingle from "./pages/ViewSingle";
import UpdateEmp from "./pages/UpdateEmp";

let App=()=>{
  let routes= createBrowserRouter([
    {path:"/",element:<Dashboard />,children:[
      {path:"ViewAll",element:<ViewAll/>},
      {path:"UpdateEmp/:id",element:<UpdateEmp/>},
      {path:"ViewSingle/:id",element:<ViewSingle/>},
      {path:"CreateEmp",element:<CreateEmp/>}
    ]}
  ])
  return <RouterProvider router={routes} />
}
export default App