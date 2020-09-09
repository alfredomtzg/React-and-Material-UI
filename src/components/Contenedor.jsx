import React from 'react'
import Navbar from './Navbar'
import {
  makeStyles
} from '@material-ui/core'

const estilos = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}))

const Contenedor = () => {
  const classes = estilos()

  return(
    <div className={classes.root}>
      <Navbar/>
      Contenido
    </div>
  )
}

export default Contenedor;