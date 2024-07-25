import { Box, useMediaQuery } from '@mui/material';
import React from 'react';

const LayoutTwo = ({data ,children }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMidView = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
      {/* <Box sx={{ background: 'white', width: '804px' }} my={2}>
        <Box px={5} py={5}>
          {children}
        </Box>
      </Box> */}



      {!isMobile && <Box  display='flex' justifyContent='center' alignItems='center' px={isMobile ? 0 : 0}>
        <Box sx={{ background: 'white', width: '804px' }}height={!isMobile ? '90%' : '100%'}  my={2} px={5} py={5} >
        <Box width='100%' display='flex' justifyContent='center'>
            <img src={data?.logo} style={{ maxWidth: !isMobile ? `${data?.logoSize}%` : '100%' }} alt="" />
          </Box>
          {children}
        </Box>

      </Box>}
      {
        isMobile && <Box height={!isMobile ? '100vh' : '100%'} display='flex' justifyContent='center' alignItems='center' px={isMobile ? 2 : 10} py={isMobile ? 2 : 10}>
          <Box sx={{ background: 'white' }} px={3} py={1}>
          <Box width='100%' display='flex' justifyContent='center'>
            <img src={data?.logo} style={{ maxWidth: !isMobile ? `${data?.logoSize}%` : '100%' }} alt="" />
          </Box>
          {children}
          </Box>
        </Box>
      }

    </>
  );
};

export default LayoutTwo;