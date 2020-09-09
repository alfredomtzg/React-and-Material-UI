import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Listas = () => {
  return(
    <div>
      <List component='nav'>
        <ListItem button>
          <ListItemIcon>
            <SportsEsportsIcon/>
          </ListItemIcon>
          <ListItemText primary='Mi primer elemento'/>
        </ListItem>
      </List>
    </div>
  )
}

export default Listas;