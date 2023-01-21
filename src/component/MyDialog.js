import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import './MyDialog.css'

const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function MyDialog(props) {
  const { onClose, selectedValue, open, data, title} = props;
  const [close, setClose] = React.useState(false);

  const handleClose = () => {
   // onClose(selectedValue);
   onClose(true);
  };


  return (
    <Dialog className='my-dailog' open={open}>
      <div className={'close-icon-button'}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <DialogTitle>{title}</DialogTitle>
      <Grid className='dailog-data'> {data}</Grid>
    </Dialog>
  );
}

