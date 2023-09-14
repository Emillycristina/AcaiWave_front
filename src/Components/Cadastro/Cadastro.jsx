import { useState} from "react";
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
import { useForm, Controller,useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";





const schema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(5, "O nome deve ter 5 cacteres ou mais")
    .max(25, "O nome deve ter no máximo 20 caracteres"),
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("E-mail inválido")
    .test("format", "O e-mail deve ser no formato padrão", (value) => {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    }),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .max(12, "A senha deve conter até 12 caracteres")
    .required("Senha é obrigatória")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\.)[a-zA-Z\d.]+$/,
      "A senha deve conter pelo menos uma letra minúscula e maiúscula, um caractere especial e um número"
    ),
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      
    >
      {"Copyright  "}
      <Link color="secondary" href="/">
      © Açaiwave
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Cadastro = () => {
  const {
    handleSubmit: handleSubmitForm,
    control,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formState = useFormState({control});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  

 
  
  
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (data) => {

    // Verifique se todos os campos estão vazios
    if (!data.name && !data.password && !data.email) {
      // Exibir uma mensagem de erro ou feedback ao usuário
      setError("form", {
        type: "manual",
        message: "Preencha pelo menos um campo",
      });
    } else {
      // Executar ação de envio do formulário aqui
      const formData = {
        name: data.name,
        password: data.password,
        email: data.email,
      };
    
    try {
      const response = await fetch('http://34.41.148.34/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Lidar com a resposta da API em caso de sucesso
        alert("Cadastro efetuado com sucesso!");
      } else {
        // Lidar com a resposta da API em caso de falha
        console.error("Falha no login");
      }
    } catch (error) {
      // Lidar com erros de rede ou outros erros
      console.error('Erro ao fazer a solicitação:', error);
    }
   }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh", minHeight: 400,}}>
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
            <Typography component="h1" variant="h5" sx={{ color: "#35155D", padding:'16px' }}>
              Criar Conta
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitForm(onSubmit)}
              sx={{ mt: 1 }}
            >
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    name="name"
                    color="secondary"
                    autoComplete="name"
                    autoFocus
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    color="secondary"
                    label="Email"
                    name="email"
                    autoComplete="email"
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
                disabled={!formState.isDirty || Object.keys(errors).length > 0}
              >
                Criar Conta
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
                    href="/"
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
                    Entrar
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

export default Cadastro