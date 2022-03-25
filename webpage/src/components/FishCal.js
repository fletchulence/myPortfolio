import React from "react";
import Calendar from './Calendar'

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginForm from "./secretComponents/Login";

// function LoggedIn() {
//    return false;
// };

const FishCal = () => {
   console.log('im working')
   // let navigate = useNavigate();
   let LoggedIn = false;
   return (
      <>
         { (LoggedIn) ? <Calendar/> : <LoginForm/> }
      </>
   )
}


export default FishCal