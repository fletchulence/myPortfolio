import React from 'react'

import {
   Container,
   Grid,
   Paper,
   Box
} from '@mui/material'

function DateCal(props) {
   console.log(props)
  return (
   <Container>
      <Grid container spacing={0}>
         <Grid item>
            <Paper>a;lskdjf</Paper>
         </Grid>
         <Grid item>
            <Box component='button'>say something</Box>
         </Grid>
      </Grid>
   </Container>
  )
}

export default DateCal