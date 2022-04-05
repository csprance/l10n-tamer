import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import * as React from 'react';

import { LogoIcon } from '@/components/icons/Logo';
import { logout } from '@/features/auth/lib';

const AuthLogoutConfirm: React.FC = ({}) => {
  const { data } = useSession();
  const handleLogoutButtonClick = async () => {
    if (data?.user) await logout(data.user.name!);
  };
  return (
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
          <Box sx={{ marginBottom: 4 }}>
            <LogoIcon sx={{ fontSize: 48 }} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
            Logout
          </Typography>

          <Typography color="textSecondary" variant="caption">
            {'Are you sure you want to log out?'}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Button
              onClick={handleLogoutButtonClick}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ my: 2, minWidth: '250px' }}
            >
              Log Out
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AuthLogoutConfirm;
