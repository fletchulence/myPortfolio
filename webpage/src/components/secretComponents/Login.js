import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialFormVals = {
   fullname: '',
   password:''
};

export default function Login(props) {
   const navigate = useNavigate();
   // console.log(props)
   const [state, setState] = useState(initialFormVals);

   function handleChange (evt) {
      setState({
         ...state,
         [evt.target.name]: evt.target.value
      });
   };
   
   function handleSubmit(evt) {
      evt.preventDefault();
      if (state.fullname === 'Debra' && state.password === 'Fletcher') {
         navigate('/fish')
      } else {
         alert('Seems you entered your Name and Password wrong! Try again, please');
         setState(initialFormVals)
      }
   };

   function handleLink(evt){
      // evt.preventDefault();
      navigate('/')
   }

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
      <button onClick={handleLink}>Home</button>
    </>
  )
}
