import React, { useContext, useState } from 'react';
import LayoutOne from '../../core/Layout/LayoutOne';
import { Box, Rating, Typography, useMediaQuery, useTheme, TextareaAutosize,TextField, Checkbox } from '@mui/material';
import { LandingPageContext } from '@/src/Store/ContextApi';
import MinHeightTextarea from '../../core/inputs/MuiTextArea';
import PrimaryButton from '../../core/Buttons/PrimaryButton';

const index = () => {
  const [data, setData, setValue, value] = useContext(LandingPageContext)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down(765));
  const isMidView = useMediaQuery((theme) => theme.breakpoints.down(1380));
  const theme = useTheme();
  const [reviewData, setReviewData] = useState('');
  const getRows = () => {
    if (isMobile) return 6; // For mobile devices, set 6 rows
    if (isMidView) return 8; // For mid-size devices, set 8 rows
    return 10; // For larger devices, set 10 rows
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box height='100%' my={isMobile?0:2} display='flex' justifyContent='center' alignItems='center'>
        <Box width={!isMobile ? '42%' : '100%'} height={!isMobile? '90%': '100%'} sx={{background:'white'}} py={5} px={4}>
          <Box width='100%' display='flex' justifyContent='center'>
            <img src={data?.logo} style={{ maxWidth: `40%` }} alt="" />
          </Box>
          <Box display='flex' justifyContent='center' my={4}>
            {
              data?.evolutionQuestion && <Typography component='p' fontSize='16px' textAlign='center' sx={{ color: theme.palette.secondary.main }}

                dangerouslySetInnerHTML={{ __html: data?.feedbackPrompt }}
              ></Typography>
            }
          </Box>
          <Box my={2} display='flex' justifyContent='center'>
           
          </Box>
          <Box >
          <Box width='100%' display='flex' justifyContent='center'>
          <form onSubmit={handleSubmit} style={{width:'70%'}}>
            <Box  display='flex' width='100%' justifyContent='center'>
            <TextField sx={{mr:1}} id="outlined-basic" label="First Name" variant="outlined" fullWidth />
            <TextField  id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
            </Box>
            <TextField sx={{my:1}} id="outlined-basic" label="Mobile" variant="outlined" fullWidth />
            <TextField sx={{mb:1}} id="outlined-basic" label="Email" variant="outlined" fullWidth />
            <Typography sx={{mb:2}}>
              <Checkbox/> <Typography component='span'>I agree to be contacted by the hotel regarding my recent stay and to receive updates on how my feedback is being addressed.</Typography>
            </Typography>
            <Box display='flex' justifyContent='start'>
              <PrimaryButton text='Submit' type="submit" />
            </Box>
          </form>
          </Box>
          <Box display='flex' justifyContent='center' my={4}>
            {
              data?.evolutionQuestion && <Typography component='p' fontSize='12px' textAlign='center' sx={{ color: theme.palette.secondary.main }}

                dangerouslySetInnerHTML={{ __html: data?.getPrompt }}
              ></Typography>
            }
          </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default index;