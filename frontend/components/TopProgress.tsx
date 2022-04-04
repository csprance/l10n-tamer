import Box from '@mui/material/Box';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import * as React from 'react';

interface Props {
  progress?: number;
  show?: boolean;
  variant?: LinearProgressProps['variant'];
}
const TopProgress: React.FC<Props> = ({
  progress = 0,
  show = false,
  variant = undefined,
}) => {
  return show ? (
    <Box sx={{ width: '100%', position: 'absolute', top: 0, zIndex: 9999 }}>
      <LinearProgress variant={variant} value={progress} />
    </Box>
  ) : (
    <React.Fragment />
  );
};

export default TopProgress;
