import React, { useContext, useState } from 'react';
import LayoutOne from '../../core/Layout/LayoutOne';
import { Box, Rating, Typography, useMediaQuery, useTheme, TextareaAutosize,TextField, Checkbox } from '@mui/material';
import { LandingPageContext } from '@/src/Store/ContextApi';
import MinHeightTextarea from '../../core/inputs/MuiTextArea';
import PrimaryButton from '../../core/Buttons/PrimaryButton';
import dynamic from 'next/dynamic';
import MobileView from './MobileView';

const DIrectionCode = dynamic(() => import('./DIrectionCode'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable server-side rendering for this component
});
const index = () => {
  const [data, setData, setValue, value] = useContext(LandingPageContext)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down(899));
  const isMidView = useMediaQuery((theme) => theme.breakpoints.down(1380));
  const theme = useTheme();
  const [reviewData, setReviewData] = useState('');
  const getRows = () => {
    if (isMobile) return 6; // For mobile devices, set 6 rows
    if (isMidView) return 8; // For mid-size devices, set 8 rows
    return 10; // For larger devices, set 10 rows
  };


  console.log({reviewData})

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box  height='100%' my={isMobile?0:2} display='flex' justifyContent='center' alignItems='center' >
        <Box width={!isMobile && !isMidView ? '42%' : isMidView && !isMobile ? '70%' : isMobile ? '100%' : '100%'} height={!isMobile? '90%': '100%'} sx={{background:'white'}} py={5} px={4}>
          <Box width='100%' display='flex' justifyContent='center'>
            <img src={data?.logo} style={{ maxWidth: !isMobile ? `40%` : '70%' }} alt="" />
          </Box>
          <Box display='flex' justifyContent='center' my={4}>
            {
              data?.evolutionQuestion && <Typography component='p' fontSize='16px' textAlign='center' sx={{ color: theme.palette.secondary.main }}

                dangerouslySetInnerHTML={{ __html: data?.reviewPrompt }}
              ></Typography>
            }
          </Box>
          <Box>
          {!isMobile && <DIrectionCode/>}
          {isMobile && <MobileView/>}
          </Box>

        </Box>
      </Box>
  );
};

export default index;