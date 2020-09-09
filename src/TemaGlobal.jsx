import React from 'react'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'

function TemaGlobal() {
    return(
        <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
                contained
            </Button>
        </MuiThemeProvider>
    )
}

export default TemaGlobal;