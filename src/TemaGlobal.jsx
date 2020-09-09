import React from 'react'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'
import Navbar from './components/Navbar'
import Listas from './components/Listas'
import Oculto from './components/Oculto'

function TemaGlobal() {
    return(
        <MuiThemeProvider theme={theme}>
            <Navbar/>
            <Button variant="contained" color="primary">
                contained
            </Button>
            <Listas/>
            <Oculto/>
        </MuiThemeProvider>
    )
}

export default TemaGlobal;