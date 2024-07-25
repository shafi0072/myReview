import React, { useContext, useState } from 'react';
import LayoutOne from '../../core/Layout/LayoutOne';
import { Box, Rating, Typography, useMediaQuery, useTheme, TextareaAutosize, TextField, Checkbox, Grid } from '@mui/material';
import { LandingPageContext } from '@/src/Store/ContextApi';
import MinHeightTextarea from '../../core/inputs/MuiTextArea';
import PrimaryButton from '../../core/Buttons/PrimaryButton';
import Head from 'next/head';
import LayoutTwoWrapper from '../../core/Layout/LayoutTwo'
const index = () => {
  const [data, setData, setValue, value] = useContext(LandingPageContext)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down(870));
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
    <>
      <Head><title>{data?.pageTitle}</title></Head>
      <LayoutTwoWrapper data={data}>

        <Box display='flex' justifyContent='center' my={4} >
          {
            data?.evolutionQuestion && <Typography component='h2' className='subheading' textAlign='center'

              dangerouslySetInnerHTML={{ __html: data?.feedbackPrompt }}
            ></Typography>
          }
        </Box>

        <Box >
          <Box width='100%' display='flex' justifyContent='center'>
            <form onSubmit={handleSubmit} style={{ width: !isMobile ? '60%' : isMidView ? '100%' : '80%' }}>
              <Grid container rowSpacing={1} spacing={1}>
                <Grid item xs={12} lg={6} md={6} sm={12}>
                  <TextField sx={{ mr: 1, }} id="outlined-basic" label="First Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} lg={6} md={6} sm={12}>
                  <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
                </Grid>
              </Grid>
              <TextField sx={{ my: 1 }} id="outlined-basic" label="Mobile" variant="outlined" fullWidth />
              <TextField sx={{ mb: 1 }} id="outlined-basic" label="Email" variant="outlined" fullWidth />
               <Box display='flex' mb={2}><input type="checkbox" class="form-check-input colorCheck" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1" style={{marginLeft:'2%',color: 'grey'}}>I agree to be contacted by the hotel regarding my recent stay and to receive updates on how my feedback is being addressed.</label>
                </Box>

                <Box display='flex' justifyContent='start'>
                  <PrimaryButton text='Submit' type="submit" />
                </Box>
            </form>
          </Box>
          <Box display='flex' justifyContent='center' my={4} >
            {
              data?.evolutionQuestion && <Typography className='openSans' component='p' fontSize='15px' textAlign='center' sx={{ color: '#634F20', fontWeight: '300', lineHeight: '21px' }}

                dangerouslySetInnerHTML={{ __html: data?.getPrompt }}
              ></Typography>
            }
          </Box>
        </Box>
      </LayoutTwoWrapper>

    </>
  );
};

export default index;