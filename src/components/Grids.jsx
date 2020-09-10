import React from 'react'
import { Box, Grid } from '@material-ui/core'

const Grids = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={12}>
          <Box color="primary.main"   border={1}>
            xs 12
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box color="primary.main" mt={1} border={1}>
            xs 8
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box color="primary.main" mt={1} border={1}>
            xs 8
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box color="primary.main" ml={1} mt={1} border={1}>
            xs 4
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box color="primary.main" mt={1} border={1}>
            xs 1
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Grids;