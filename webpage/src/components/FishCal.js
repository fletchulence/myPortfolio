import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Calendar from './Calendar'

import LoginForm from "./secretComponents/Login";

const FishCal = (props) => {
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