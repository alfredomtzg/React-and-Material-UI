import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default function Navbar() {
  const classes = useStyles()
  return(
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            Alfredo
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  )
}

