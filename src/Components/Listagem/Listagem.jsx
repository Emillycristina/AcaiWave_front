import React from 'react';
import Card from '@mui/material/Card';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { auto } from '@popperjs/core';
import Divider from '@mui/material/Divider';


// import Divider from '@mui/material/Divider';
// import style from './Listagem.css';
// import copo from '../../assets/copo 1.png';

function Listagem() {

  const cardStyle = {
    maxWidth: '500px', // Set your desired maximum card width
    margin: '10px auto', // Center the card horizontally
  };
  
  return (
    <div>
      <Grid container spacing={3}>
      <Divider sx={{ marginTop:'50px', width:'35%', variant: 'fullwidth', height: '1px', backgroundColor: '#35155D' }}/>
      <Typography variant="h5" component="div"  sx={{color: '#35155D', marginTop: 5, marginX: auto}}>
                Próximos Pedidos
              </Typography>
      <Divider sx={{ marginTop:'50px', width:'35%', variant: 'fullwidth', height: '1px', backgroundColor: '#35155D' }}/>
        <Grid item xs={12}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 1
              </Typography>
              <Typography color="text.secondary">
                This is the content of Card 1. You can put any text or components here.
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 2
              </Typography>
              <Typography color="text.secondary">
                This is the content of Card 2. You can put any text or components here.
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
        <Grid  item xs={12}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 3
              </Typography>
              <Typography color="text.secondary">
                This is the content of Card 3. You can put any text or components here.
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Listagem;
