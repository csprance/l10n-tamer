import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Head from 'next/head';
import * as React from 'react';

import AppVersion from '@/components/AppVersion';

const AuthLayout: React.FC<{ title: string; description: string }> = ({
  children,
  title,
  description,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
        }}
      >
        <Container maxWidth="sm">{children}</Container>
      </Box>
      <Box
        component={'footer'}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <AppVersion />
      </Box>
    </React.Fragment>
  );
};

export default AuthLayout;
