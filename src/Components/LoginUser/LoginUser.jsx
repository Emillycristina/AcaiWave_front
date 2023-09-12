import { useState } from "react";
import Link from "@mui/material/Link";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import Logo from "../../assets/açai1.png";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        AçaiWave
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

  const onSubmit = (data) => console.log(data);

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
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: "#35155D" }}>
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitForm(onSubmit)}
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
                    label="Email Address"
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
                    label="Password"
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
              
          
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#35155D" }}
              >
                Sign In
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
                  <Link
                    href="/CriarConta"
                    variant="body"
                    sx={{ textDecoration: "none", color: "#d6d5d5" }}
                  >
                    {"Don't have an account? Sign Up"}
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
