import { joiResolver } from '@hookform/resolvers/joi';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Joi from 'joi';
import NextLink from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { LogoIcon } from '@/components/icons/Logo';
import { forgotPassword } from '@/features/auth/api';
import useNotifications from '@/features/notifications/useNotifications';
import { EMAIL } from '@/lib/validations';

export interface AuthForgotPasswordFormData {
  email: string;
}
export const authResetPasswordFormSchema = Joi.object({
  email: EMAIL.required(),
});

interface Props {}
const AuthForgotPasswordForm: React.FC<Props> = ({}) => {
  const { addSuccess, addError } = useNotifications();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForgotPasswordFormData>({
    resolver: joiResolver(authResetPasswordFormSchema),
  });
  const onSubmit = async (formData: AuthForgotPasswordFormData) => {
    try {
      await forgotPassword({ value: formData.email });
      addSuccess(
        'Success! If your email is on our system we will send you an email!',
      );
      console.log(formData.email);
    } catch (e) {
      addError('Failed to send email. Please check inputs and try again.');
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
              Forgot Password
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ my: 2 }}
              >
                Reset Password
              </Button>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Alert severity="info" color="info" sx={{ width: '100%' }}>
                  Check your email for a reset link
                </Alert>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AuthForgotPasswordForm;
