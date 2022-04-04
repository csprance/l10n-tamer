import { joiResolver } from '@hookform/resolvers/joi';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Joi from 'joi';
import NextLink from 'next/link';
import Router from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { LogoIcon } from '@/components/icons/Logo';
import { registerUser } from '@/features/auth/api';
import useNotifications from '@/features/notifications/useNotifications';
import { EMAIL, PASSWORD, USERNAME } from '@/lib/validations';

export type AuthRegisterFormData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};
const registerFormSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  username: USERNAME.required(),
  email: EMAIL.required(),
  password: PASSWORD.required(),
});

interface Props {}
const AuthLoginForm: React.FC<Props> = ({}) => {
  const { addError, addSuccess } = useNotifications();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthRegisterFormData>({
    resolver: joiResolver(registerFormSchema),
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: AuthRegisterFormData) => {
    try {
      const response = await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        password: data.password,
      });
      if (!response.error) {
        // if registration is a success we should redirect and have them login
        await Router.push('/auth/login?newUser=true');
        addSuccess('You have successfully registered. Please login.');
      }
    } catch (e) {
      addError('Registration failed. Please try again later.');
      console.log(e);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Card sx={{ boxShadow: 0 }}>
        <CardContent>
          <Box
            sx={{
              margin: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box>
              <LogoIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
              Register New User
            </Typography>

            <Typography color="textSecondary" variant="caption">
              {'Already have an account? '}
              <NextLink href="/auth/login" passHref>
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NextLink>
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('firstName')}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="given-name"
                    autoFocus
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('lastName')}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    autoFocus
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('username')}
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    error={!!errors.username}
                    helperText={errors.username?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('email')}
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('password')}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    id="password"
                    autoComplete="new-password"
                    type={showPassword ? 'text' : 'password'}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleToggleShowPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AuthLoginForm;
