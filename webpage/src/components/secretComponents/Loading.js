import React from 'react'

export const Loading = (props) => {

   if (props.isLoading === true){
      return (
        <div>Loading</div>
      )
   }
}



// Notes to self: 
//> use this to show when Herou stops fetching.
//? how modular can i make it?