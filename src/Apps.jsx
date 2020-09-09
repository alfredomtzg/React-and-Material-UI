import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";

const useStyle = makeStyles({
  boton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

function Apps() {
  const classes = useStyle();

  return (
    <div>
      <Container maxWidth="sm">
        <Button className={classes.boton}>Diseñado con useStyle</Button>
      </Container>
    
    </div>
  );
}

export default Apps;