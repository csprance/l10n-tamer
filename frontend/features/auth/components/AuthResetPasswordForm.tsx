import { joiResolver } from '@hookform/resolvers/joi';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Joi from 'joi';
import Router, { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { LogoIcon } from '@/components/icons/Logo';
import { resetPassword } from '@/features/auth/api';
import useNotifications from '@/features/notifications/useNotifications';
import { PASSWORD, USERNAME } from '@/lib/validations';

export interface AuthResetPasswordFormData {
  password: string;
  password_repeat: string;
}
export const authResetPasswordFormSchema = Joi.object({
  password: PASSWORD.required(),
  password_repeat: Joi.ref('password'),
});

interface Props {}
const AuthForgotPasswordForm: React.FC<Props> = ({}) => {
  const {
    query: { username, token },
  } = useRouter();
  const { addSuccess } = useNotifications();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthResetPasswordFormData>({
    resolver: joiResolver(authResetPasswordFormSchema),
  });
  const onSubmit = async ({
    password,
    password_repeat,
  }: AuthResetPasswordFormData) => {
    try {
      if (
        USERNAME.required().validate(username) &&
        Joi.string().required().validate(token)
      ) {
        // Because we validated we can assume input
        await resetPassword({
          username: username as string,
          token: token as string,
          password_repeat,
          password,
        });
        addSuccess('Success! Please log back in with your new password!');
        await Router.push('/api/auth/signin');
      }
    } catch (e) {
      console.error('Error', e);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

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
              Reset Password
            </Typography>
            <Typography color="textSecondary" variant="caption">
              Enter a new password for your account.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 3 }}
            >
              <TextField
                {...register('password')}
                required
                fullWidth
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
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
                id="password"
                label="New Password"
                name="password"
                autoComplete="password"
                autoFocus
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <p></p>
              <TextField
                {...register('password_repeat')}
                required
                fullWidth
                id="password_repeat"
                label="New Password Again"
                name="password_repeat"
                autoComplete="password_repeat"
                autoFocus
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
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
                error={!!errors.password_repeat}
                helperText={
                  errors.password_repeat ? 'Passwords must match' : ''
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
              >
                Reset Password
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AuthForgotPasswordForm;
