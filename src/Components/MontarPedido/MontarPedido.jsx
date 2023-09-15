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
          marginTop: "5rem",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography sx={{ color: "#35155D" }}>Monte Seu Pedido</Typography>
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
      <Box sx={{ width: '100%' , padding:'30px', display:'flex', }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  xs={6} sx={{margin:'2px', }} >
          <Item>1</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}} >
        <Item>1</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}} >
        <Item>1</Item>
        </Grid>
        <Grid xs={6} sx={{margin:'2px'}}>
        <Item>1</Item>
        </Grid>
      </Grid>
      </Box>
    </div>
  );
}

export default App;
