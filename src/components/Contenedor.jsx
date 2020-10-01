import React from 'react'
import Navbar from './Navbar'
import {
  makeStyles, Hidden
} from '@material-ui/core'
import Cajon from './Cajon'
import Boxin from './Box'
import Grids from './Grids'

const estilos = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  }
}))

const Contenedor = () => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir)
  }

  return(
    <div className={classes.root}>
      <Navbar accionAbrir={accionAbrir}/>

      <Hidden xsDown>
        <Cajon
          variant="permanent"
          open={true} />
      </Hidden>

      <Hidden smUp>
        <Cajon
          variant="temporary"
          open={abrir}
          onClose={accionAbrir}
          />
      </Hidden>
      
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <button onClick={()=>accionAbrir()}>abrir </button>
        <button onClick={()=>accionAbrir()}>cerrar</button>
      {abrir ? "Hola estoy en true" : "estoy false"}
        <Boxin/>
        <Grids/>
      </div>
      
    </div>
  )
}

export default Contenedor;