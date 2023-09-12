import React from "react";
import './index.css'

const Sidebar = (prop) =>{
    return (
        <li id = {prop.id}>{prop.title}</li>
      )
}

export default Sidebar