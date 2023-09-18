import {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import copo from "../../assets/copo 1.png";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";

function Listagem() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a URL da sua API
    const apiUrl = 'https://34.41.148.34/costumers';

    // Realiza a requisição fetch para a API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => {
        setPedidos(data); // Define os dados da API no estado 'pedidos'
        setLoading(false); // Marca o carregamento como concluído
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
        setLoading(false); // Marca o carregamento como concluído, mesmo em caso de erro
      });
  }, []);

  
  
  const cardStyle = {
    maxWidth: "500px",
    margin: "10px auto",
  };

  


  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Grid container spacing={3}>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "#35155D", marginTop: 5, marginX: "auto" }}
          >
            Próximos Pedidos
          </Typography>
          {pedidos.map((pedido) => (
            <Grid item xs={12} key={pedido.id}>
              <Card style={cardStyle} sx={{ display: "flex" }}>
                <Grid justifyContent="center">
                  <CardMedia
                    component="img"
                    sx={{ height: "151px", width: "100px" }}
                    image={copo}
                    alt="copo"
                  />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ marginLeft: "20px", color: "#512B81", fontWeight: 700 }}
                  >
                    {pedido.volume}
                  </Typography>
                </Grid>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6} justifyContent="center">
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: "#512B81", marginLeft: "10px" }}
                      >
                        {pedido.nome}
                      </Typography>
                      <Button
                        sx={{
                          position: "relative",
                          marginLeft: "240px",
                          marginTop: "15px",
                        }}
                      >
                        Finalizar
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Listagem;
