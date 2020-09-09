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
import ShareIcon from '@material-ui/icons/Share';


const Listas = () => {
  return(
    <div>
      <List component='nav'>

        <ListItem button>
          <ListItemIcon>
            <SportsEsportsIcon/>
          </ListItemIcon>
          <ListItemText primary='Juegos online'/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon/>
          </ListItemIcon>
          <ListItemText primary='Juegos disponibles'/>
        </ListItem>

        <Divider/>

        <ListItem button>
          <ListItemIcon>
            <ShareIcon/>
          </ListItemIcon>
          <ListItemText primary='Comparte con tus amigos'/>
        </ListItem>

      </List>

      
    </div>
  )
}

export default Listas;