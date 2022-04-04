import HomeIcon from '@mui/icons-material/Home';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Link from 'next/link';
import * as React from 'react';

interface Props {
  open: boolean;
  anchorEl: any;
  onClose: () => void;
}
const MainMenu: React.FC<Props> = ({ open = true, anchorEl, onClose }) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose} onClick={onClose}>
      <MenuList dense sx={{ p: 0 }}>
        <Link href={'/'} passHref>
          <MenuItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
        </Link>
        <Link href={'/project'} passHref>
          <MenuItem>
            <ListItemIcon>
              <SchemaOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </MenuItem>
        </Link>
        <Link href={'/auth/logout'} passHref>
          <MenuItem>
            <ListItemIcon>
              <SchemaOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Log Out</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default MainMenu;
