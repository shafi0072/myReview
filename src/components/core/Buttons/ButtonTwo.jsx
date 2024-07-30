import { Button, useTheme } from '@mui/material';
import React from 'react';

const ButtonTwo = ({text, type}) => {
  const theme = useTheme()
  return (
   <Button sx={{background:theme.palette.primary.main, boxShadow:'none', color:'white', fontSize:'14px', fontWeight:'bold', px:4}} variant='contained' className='openSans' type={type} >{text}</Button>
  );
};

export default ButtonTwo;