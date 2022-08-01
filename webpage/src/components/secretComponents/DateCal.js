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
            <Box sx={{
               display: 'flex',
               border: '1px solid black'

            }}>a;lskdjf</Box>
         </Grid>
         <Grid item>
            <Box component='button'>say something</Box>
         </Grid>
         <Grid item>
            <Paper square sx={{ border: '1px solid green', padding: '2%'}}>hello</Paper>
         </Grid>
      </Grid>
   </Container>
  )
}

export default DateCal