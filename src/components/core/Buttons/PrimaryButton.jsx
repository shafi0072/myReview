import { Button, useTheme } from '@mui/material';
import React from 'react';

const PrimaryButton = ({text, onClick, type}) => {
  const theme = useTheme()
  return (
   <Button sx={{background:theme.palette.primary.main, boxShadow:'none', color:'white', fontSize:'14px', fontWeight:'bold'}} variant='contained' type={type} onClick={() => onClick()}>{text}</Button>
  );
};

export default PrimaryButton;