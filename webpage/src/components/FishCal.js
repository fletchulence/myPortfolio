import React from "react";
import Calendar from './Calendar'

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginForm from "./secretComponents/Login";

const FishCal = () => {
   console.log('im working')
   let navigate = useNavigate()
   if ( LoggedIn === true ) {
      return(
         <>
           <Calendar/>
         </>
      )
   } else {
      return (
         <>
            <LoginForm/>
         </>
      )
   }
}

function LoggedIn() {
   return true;
}

export default FishCal