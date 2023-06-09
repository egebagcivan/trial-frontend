import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Login as loginApi } from '../api/api';

const ParentContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

const FormContainer = styled(Container)(({ theme }) => ({
  width: 400,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
}));


const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const LoginButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SignUpLink = styled(Box)({
  textAlign: 'center',
});


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginApi({ email, password });
      // Assuming the API returns the access token on success
      const accessToken = response.data.access_token;
      // Store the access token in local storage or session storage for authentication purposes
      localStorage.setItem('access_token', accessToken);
      // Redirect to the homepage
      navigate('/home');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <ParentContainer>
    <FormContainer>
      <Title variant="h4" align="center">
        Login
      </Title>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleLogin}>
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <LoginButton type="submit" variant="contained" color="primary" fullWidth>
          Login
        </LoginButton>
      </form>
      <SignUpLink>
        <Typography variant="body2">
          Don't have an account? Sign up
        </Typography>
      </SignUpLink>
    </FormContainer>
    </ParentContainer>
  );
};

export default Login;
