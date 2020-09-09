import React from 'react'
import Navbar from './Navbar'
import {
  makeStyles
} from '@material-ui/core'

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

      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        Contenido
      </div>
    </div>
  )
}

export default Contenedor;