import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import React from "react";


const HeaderComponent = () =>{
   const [ btnName, setBtnName ] = useState("Login");
   return (
      <div className="header"> 
         <div className="logo"> 
            <img src={LOGO_URL} alt="logo"></img>
         </div>
         <div className="nav-items">
            <ul>
               <li> Home </li>
               <li> About Us</li>
               <li> Contact Us </li>
               <li> Cart </li>
               <button className="btn-login"
                  onClick={()=>{
                     btnName === "Login"?
                     setBtnName("Logout") :
                     setBtnName("Login") ;
                  }}
               >{btnName}</button>
            </ul>
         </div>
      </div>
   )
};

export default HeaderComponent;