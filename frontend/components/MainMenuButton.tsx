import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useSession } from 'next-auth/react';
import * as React from 'react';

interface Props {
  handleClick: (...arg: any[]) => void;
}
const MainMenuButton: React.FC<Props> = ({ handleClick }) => {
  const { data } = useSession();
  return (
    <IconButton
      color={'inherit'}
      edge="end"
      aria-label="menu"
      aria-haspopup="true"
      onClick={handleClick}
    >
      {data ? (
        <Avatar src={data.image} />
      ) : (
        <AccountCircle fontSize={'large'} />
      )}
    </IconButton>
  );
};

export default MainMenuButton;
