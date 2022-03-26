import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
   const navigate = useNavigate();
   // console.log(props)
   const [state, setState] = useState({
      fullname: '',
      password:''
   });

   function handleChange (evt) {
      setState({
         ...state,
         [evt.target.name]: evt.target.value
      });
   };
   
   function handleSubmit(evt) {
      evt.preventDefault();
      if (state.fullname === 'debra' && state.password === 'fletcher') {
         console.log('this will be correct for you')
         navigate('/fishCal')
      } else {
         alert('Seems you entered your Name and Password wrong! Try again, please')
      }
   };
   // route to the protected
  return (
    <>
      <form onSubmit={handleSubmit}>
         <label>
            Name: 
            <input 
               type='text' 
               name='fullname' 
               placeholder="please input name"
               onChange={handleChange}
               value={state.fullname}
               /> 
         </label>
         <label>
            Password: 
            <input 
               placeholder="please input password"
               type='text' 
               name='password' 
               onChange={handleChange}
               value={state.password}
            /> 
         </label>
         <input type="submit" value='Submit'/>
      </form>
    </>
  )
}
