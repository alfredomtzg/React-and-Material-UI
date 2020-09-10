import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1
  },
  AppBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    }
  }
}))

export default function Navbar() {
  const classes = useStyles()
  return(
    <AppBar position="fixed" color="primary" className={classes.AppBar}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Foro Game
        </Typography>
        <Button variant="text" color="inherit">
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  )
}

