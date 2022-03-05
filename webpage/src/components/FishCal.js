import React from "react";
import Calendar from './Calendar'

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FishCal = () => {
   console.log('im working')
   let navigate = useNavigate()
   return (
      <>
         < Calendar />
      </>
   )

}

export default FishCal