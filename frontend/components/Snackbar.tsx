import { AlertColor, AlertProps, Alert as MuiAlert } from '@mui/material';
import { Snackbar } from '@mui/material';
import * as React from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  message: string;
  vertical?: 'top' | 'bottom';
  horizontal?: 'right' | 'left' | 'center';
  onClose?: () => void;
  action?: React.ReactNode;
  severity: string;
}
const MySnackbar: React.FC<Props> = ({
  message,
  vertical = 'top',
  horizontal = 'center',
  onClose = () => undefined,
  action,
  severity,
}) => {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    onClose();
  };

  return (
    <Snackbar
      action={action}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      key={message}
    >
      <Alert onClose={handleClose} severity={severity as AlertColor}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MySnackbar;
