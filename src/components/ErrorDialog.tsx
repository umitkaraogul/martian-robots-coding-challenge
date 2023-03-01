import { Alert, AlertTitle, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type ErrorDialogProp = {
  error?: string;
  closeDialog: () => void;
};
export const ErrorDialog = ({ error, closeDialog }: ErrorDialogProp) => {
  return (
    <Box>
      <Alert
        severity='error'
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={closeDialog}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        <AlertTitle>Error</AlertTitle>
        <strong>{error}</strong>
      </Alert>
    </Box>
  );
};
