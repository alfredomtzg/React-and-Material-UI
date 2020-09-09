import React from 'react'
import {
  makeStyles,
  Drawer
} from '@material-ui/core'

const drawerWidth = 240

const estilos = makeStyles(theme => ({
  drawer: {
    width :drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}))

const Cajon = () => {
  const classes = estilos()

  return(
    <Drawer 
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor= 'left'
    >
    </Drawer>
  )
}

export default Cajon;