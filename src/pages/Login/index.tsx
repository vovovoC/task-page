import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Logo } from '../../components/Logo';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { login } from '../../api/api';
import actions from '../../store/constants';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const theme = createTheme();

export const Login = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postErrors, setPostErrors] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = (data: Record<string, string>) => {
    login(data).then(() => {
      setPostErrors(null);
      dispatch({
        type: actions.USER,
        payload: data
      });
      navigate("/tasks", { replace: true });
    }).catch((err) => { 
    setPostErrors(err.response.data.non_field_errors.join(' '));
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding:'20px'
          }}
        >
           <Logo height ='150px'  width = '150px'/>
          <Typography component="h1" variant="h5" sx={{fontWeight:'bold', marginTop:'50px'}}>
             Aibomed
          </Typography>
          <Typography component="h1" variant="h6" sx={{color:'grey', fontSize:'16px', textAlign:'center'}}>
             Система операционно-учетного управления клиникой
          </Typography>
          <Box 
            component="form" 
            onSubmit={handleSubmit(onSubmit)}
            noValidate 
            sx={{ mt: 1 }}
            >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              {...register('email')}
              autoComplete="email"
              autoFocus
            />
            {errors.email && <span style={{color:'red'}}>{errors.email}</span> }
            <TextField
              margin="normal"
              required
              fullWidth
              label="Пароль"
              {...register('password')}
              type="password"
              id="password"
              autoComplete="current-password"
            />
             {errors.password && <span style={{color:'red'}}>{errors.password}</span> }
           <Box sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Запомнить меня"
                />
                <Link href="/forget-password" variant="body2">
                  Забыли пароль?
                </Link>
            </Box>  
            {postErrors && <span style={{color:'red'}}>{postErrors}</span> }
            <Box sx={{display:'flex', justifyContent:'center'}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, width:'70%', maxWidth:'350px' }}
            >
              Войти
            </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}