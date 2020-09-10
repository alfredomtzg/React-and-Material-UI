import React from 'react'
import { Box, Grid } from '@material-ui/core'

const Grids = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={12}>
          <Box color="primary.contrastText" bgcolor="primary.main">
            hola
          </Box>
        </Grid>
        
      </Grid>
    </>
  )
}

export default Grids;