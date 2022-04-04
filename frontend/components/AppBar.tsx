import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import * as React from 'react';

import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import MainMenu from '@/components/MainMenu';
import MainMenuButton from '@/components/MainMenuButton';
import { LogoIcon } from '@/components/icons/Logo';

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderBottom: '1px solid ' + theme.palette.divider,
}));

interface Props {}
const AppBar: React.FC<Props> = ({}) => {
  const router = useRouter();
  // Main Menu State
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleMainMenu = () => {
    setAnchorEl(null);
  };
  // Notifications Popup State
  const [anchorElNotifications, setAnchorElNotifications] =
    React.useState<null | HTMLElement>(null);
  const notificationsOpen = Boolean(anchorElNotifications);
  const handleClickNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotifications(event.currentTarget);
  };
  const toggleNotificationsPopup = () => {
    setAnchorElNotifications(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            {/*App Name*/}
            <Link href={'/'}>
              <LogoIcon sx={{ fontSize: 36 }} style={{ cursor: 'pointer' }} />
            </Link>

            <AppBreadcrumbs />

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: 'flex' }}>
              <IconButton
                color={'inherit'}
                size="large"
                aria-label="search"
                aria-haspopup="false"
              >
                <SearchIcon />
              </IconButton>
              {/*Notifications Buttons*/}
              <IconButton
                color={'inherit'}
                size="large"
                aria-label="notifications"
                aria-haspopup="true"
                onClick={handleClickNotifications}
              >
                <Badge badgeContent={5} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              {/*App Main Menu Button */}
              <MainMenuButton handleClick={handleClick} />
            </Box>
          </Toolbar>
        </StyledAppBar>
      </Box>

      <MainMenu anchorEl={anchorEl} open={open} onClose={toggleMainMenu} />
    </React.Fragment>
  );
};

export default AppBar;
