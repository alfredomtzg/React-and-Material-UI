import React from 'react';
import { Button, Container, IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'

function App() {
  return (
    <>
      <Container maxWidth="xs">
        <Button variant="contained" color="primary">
          contained
        </Button>

        <Button variant="outlined" color="primary">
          outline
        </Button>

        <Button variant="text" color="primary">
          text
        </Button>
        <DeleteIcon color="primary"/>


        <Button 
        variant="contained" 
        color="default"
        endIcon ={<DeleteIcon color="secondary"/>} >
          Delete
        </Button>
        <Button 
        variant="contained" 
        color="default"
        startIcon ={<DeleteIcon color="primary"/>} >
          Delete
        </Button>

        <IconButton 
        aria-label="delete" 
        >
          <DeleteIcon color="primary"/>
        </IconButton>
      </Container>
      <Container maxWidth="lg" >
        Tipografia
        <Typography variant="h1" color="initial">Hola soy un h1</Typography>
        <Typography variant="h6" color="primary">Hola soy un h6 color primary</Typography>
        <Typography variant="body1" color="primary" align="center" >Hola soy un body1 color primary y estoy alineado al centro</Typography>

      </Container>
      <Container maxWidth="lg" >
      <Typography variant="h6" color="primary">form</Typography>

      </Container>
    </>
  );
}

export default App;
