import { joiResolver } from '@hookform/resolvers/joi';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Joi from 'joi';
import { signIn } from 'next-auth/react';
import NextLink from 'next/link';
import Router from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { LogoIcon } from '@/components/icons/Logo';
import useNotifications from '@/features/notifications/useNotifications';
import { PASSWORD, USERNAME } from '@/lib/validations';

export type AuthLoginFormData = {
  username: string;
  password: string;
};
const authLoginFormSchema = Joi.object({
  username: USERNAME.required(),
  password: PASSWORD.required(),
});

interface Props {}
const AuthLoginForm: React.FC<Props> = ({}) => {
  const { addError, addSuccess } = useNotifications();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginFormData>({
    resolver: joiResolver(authLoginFormSchema),
  });

  const onSubmit = async (formData: AuthLoginFormData) => {
    try {
      const response = await signIn<'credentials'>('credentials', {
        redirect: false,
        username: formData.username,
        password: formData.password,
      });
      if (response?.error) {
        addError('Invalid username or password');
      } else {
        // Successful login
        await Router.push('/');
      }
    } catch (e) {
      addError('Login Failed! Please Try again');
      console.log(e);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          boxShadow: 0,
        }}
      >
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
              Sign in
            </Typography>
            <Typography color="textSecondary" variant="caption">
              {"Don't have an account? "}
              <NextLink href="/auth/register" passHref>
                <Link variant="subtitle2" underline="hover">
                  Register New User
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
                    {...register('password')}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    id="password"
                    autoComplete="current-password"
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
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ my: 2 }}
              >
                Sign In
              </Button>

              <Grid container alignItems="center" direction="column">
                <Grid item xs>
                  <NextLink href="/auth/forgot" passHref>
                    <Link variant="subtitle2" underline="hover">
                      Forgot password?
                    </Link>
                  </NextLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AuthLoginForm;
