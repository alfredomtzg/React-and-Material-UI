import React from 'react'
import Listas from './Listas'
import {
  makeStyles,
  Drawer,
  Divider
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

const Cajon = (props) => {
  const classes = estilos()

  return(
    <Drawer 
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor= 'left'
      variant={props.variant}
      open={props.open}
      onClose= {props.onClose ? props.onClose : null }
    >
      <div className={classes.toolbar}></div>
      <Divider/>
      <Listas/>
    </Drawer>
  )
}

export default Cajon;