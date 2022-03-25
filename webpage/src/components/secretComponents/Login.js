import React, { useState, useEffect } from "react";

export default function Login() {

   // onchange 
   // onSubmit
   // route to the protected
  return (
    <>
      <form>
         <label>
            Name: 
            <input type='text' name='fullname'/> 
         </label>
         <label>
            Password: 
            <input type='text' name='password'/> 
         </label>
         <input type="submit" value='Submit'/>
      </form>
    </>
  )
}
