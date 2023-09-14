import React from "react";
import Card from "@mui/material/Card";
// import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
// import Button from '@mui/material/Button';
import CardContent from "@mui/material/CardContent";
import { auto } from "@popperjs/core";
import Divider from "@mui/material/Divider";

// import Divider from '@mui/material/Divider';
// import style from './Listagem.css';
import copo from "../../assets/copo 1.png";
import CardMedia from "@mui/material/CardMedia";

function Listagem() {
  const cardStyle = {
    maxWidth: "500px",
    margin: "10px auto",
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Divider
          sx={{
            marginTop: "50px",
            width: "35%",
            variant: "fullwidth",
            height: "1px",
            backgroundColor: "--color-lilas",
          }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "#35155D", marginTop: 5, marginX: auto }}
        >
          Próximos Pedidos
        </Typography>
        <Divider
          sx={{
            marginTop: "50px",
            width: "35%",
            variant: "fullwidth",
            height: "1px",
            backgroundColor: "--color-lilas",
          }}
        />
        <Grid item xs={12}>
          <Card style={cardStyle} sx={{ display: "flex" }}>
            <Grid justifyContent="center">
            <CardMedia
              component="img"
              sx={{ height: "151px", width: "100px" }}
              image={copo}
              alt="copo"
            />
            <Typography variant="h5" component="div" sx={{marginLeft: "20px", color: "--color-lilas"}}>400mL</Typography>
            </Grid>
            <CardContent>
              <Grid justifyContent="center">
                <Typography variant="h5" component="div">
                  Card 1
                </Typography>
                <Typography color="text.secondary">
                  This is the content of Card 1. You can put any text or
                  components here.
                </Typography>
              </Grid>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Listagem;
