import React from 'react'
import { Box } from '@material-ui/core'

const Boxin = () => {
  return (
    <>
      <Box color="secondary.main">
        Caja con color secundary
      </Box>
      <Box color="primary.contrastText" bgcolor="primary.main">
        Caja con color contrastText y fondo primary
      </Box>
      <Box m={2} color="primary.main">
        caja con margin2
      </Box>
      <Box ml={3} color="primary.main">
        caja con marginleft 1
      </Box>
      <Box p={4} color="primary.main">
        caja con padding 4
      </Box>
    </>
  )
}

export default Boxin;