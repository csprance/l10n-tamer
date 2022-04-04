import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import { ThemeNames } from '@/constants';
import { getTheme } from '@/styles/themes';

interface Props {
  themeName: ThemeNames;
}
const MyThemeProvider: React.FC<Props> = ({ children, themeName }) => {
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
