import { useState } from "react";
import Link from "@mui/material/Link";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import Logo from "../../assets/açai1.png";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const onSend = async (data) => {

  // Verifique se todos os campos estão vazios
  if (!data.password && !data.email) {
    // Exibir uma mensagem de erro ou feedback ao usuário
    alert('Preencha os dados para realizar o login')
  } else {
    // Executar ação de envio do formulário aqui
    const formData = {
      password: data.password,
      email: data.email,
    };
  
  try {
    const response = await fetch('http://34.41.148.34/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Lidar com a resposta da API em caso de sucesso
      window.location.href = '/protected';
    } else {
      // Lidar com a resposta da API em caso de falha
      alert("E-mail e/ou senha incorretos!");
    }
  } catch (error) {
    // Lidar com erros de rede ou outros erros
    console.error('Erro ao fazer a solicitação:', error);
  }
 }
};








const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("E-mail inválido"),
  password: yup.string().required("Senha é obrigatória"),
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright "}
      <Link color="secondary" href="https://mui.com/">
      © Açaiwave
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Login = () => {
  const {
    handleSubmit: handleSubmitForm,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh", minHeight: 400 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Logo})`,
            backgroundColor: "#35155D",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: '25%'
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: "#35155D", padding:'16px'}}>
              Entrar
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitForm(onSend)}
              sx={{ mt: 1 }}
            >
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email "
                    name="email"
                    autoComplete="email"
                    color="secondary"
                    autoFocus
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                  />
                )}
              />
             <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    id="password"
                    color="secondary"
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    autoComplete="current-password"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                     InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Box
                            onClick={togglePasswordVisibility}
                            sx={{
                              cursor: "pointer",
                            }}
                          >
                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => {
                      field.onChange(e); 
                      setPassword(e.target.value); 
                    }}
                  />
                )}
              />

              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#35155D" }}
              >
                Entrar
              </Button>
              <Grid
                container
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Grid item>
                  <span style={{ color: "#d6d5d5" }}>Não possui uma conta? </span>
                  <Link
                    href="/CriarConta"
                    variant="body"
                    sx={{  textDecoration: "none",
                    color: "#d6d5d5",
                    "&:hover": {
                      color: "#35155D",
                    },
                    "&:active": {
                      color: "#35155D",
                    }, }}
                  >
                    Cadastre-se 
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
