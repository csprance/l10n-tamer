import { useSnackbar } from 'notistack';

/**
 * This is a wrapper around notistack. It is a convenience method to notistack
 */
export default function useNotifications() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const addInfo = (message: string) =>
    enqueueSnackbar(message, { variant: 'info' });
  const addError = (message: string) =>
    enqueueSnackbar(message, { variant: 'error' });
  const addWarning = (message: string) =>
    enqueueSnackbar(message, { variant: 'warning' });
  const addSuccess = (message: string) =>
    enqueueSnackbar(message, { variant: 'success' });
  return {
    addSuccess,
    addInfo,
    addError,
    addWarning,
    removeNotification: closeSnackbar,
    addNotification: enqueueSnackbar,
  };
}
