import { Grid, Paper, Typography, Box } from "@mui/material";
import { styled } from '@mui/material/styles'
import copo from "../../assets/copo 1.png";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function App() {
  return (
    <div style={{ padding: 40 }}>
      <Box
        sx={{
          marginTop: "25px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography variant='h5' component='div' 
        sx={{ color: "#35155D",  alignItems: "center",
        justifyContent: "center",}}>Monte Seu Pedido</Typography>
      </Box>
      <Grid
        container
        sx={{
          padding: "5rem",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ alignItems: "center" }}>
          <Paper elevation={3} sx={{ width: "200px", height: "250px" }}>
            <img src={copo} alt="copo" width={200} />
            <Typography>300 ml</Typography>
            <Typography variant="body">R$</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper
            elevation={3}
            sx={{ width: "200px", height: "250px", marginTop: "2px" }}
          >
            <img src={copo} alt="copo" width={200} />
            <Typography>400 ml</Typography>
            <Typography variant="body">R$</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper
            elevation={3}
            sx={{ width: "200px", height: "250px", marginTop: "4px" }}
          >
            <img src={copo} alt="copo" width={200} />
            <Typography>700 ml</Typography>
            <Typography variant="body">R$</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ width: '50%' , padding:'30px', display:'center', alignContent:'space-evenly', alignItems: 'center' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid  xs={6} sx={{margin:'2px', }} >
          <Item>Banana</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}} >
        <Item>Granola</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}} >
        <Item>Morango</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}}>
        <Item>Abacaxi</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}}>
        <Item>Manga</Item>
        </Grid>
        </Grid>

        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid xs={6} sx={{margin:'2px'}}>
        <Item>Leite Cond</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}}>
        <Item>Conferte</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}}>
        <Item>Sufler</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}}>
        <Item>Leite em pó</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}}>
        <Item>Kiwi</Item>
        </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
