import React from 'react'
import Navbar from './Navbar'
import {
  makeStyles, Hidden
} from '@material-ui/core'
import Cajon from './Cajon'

const estilos = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  }
}))

const Contenedor = () => {
  const classes = estilos()

  return(
    <div className={classes.root}>
      <Navbar/>
      <Hidden xsDown>
        <Cajon/>
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        Contenido
      </div>
      
    </div>
  )
}

export default Contenedor;