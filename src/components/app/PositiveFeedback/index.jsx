import React, { useContext, useState } from 'react';
import LayoutOne from '../../core/Layout/LayoutOne';
import { Box, Rating, Typography, useMediaQuery, useTheme, TextareaAutosize, TextField, Checkbox } from '@mui/material';
import { LandingPageContext } from '@/src/Store/ContextApi';
import MinHeightTextarea from '../../core/inputs/MuiTextArea';
import PrimaryButton from '../../core/Buttons/PrimaryButton';
import dynamic from 'next/dynamic';
import MobileView from './MobileView';
import Head from 'next/head';
import LayoutTwoWrapper from '../../core/Layout/LayoutTwo'
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


  console.log({ reviewData })

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <Head>
        <title>{data?.pageTitle}</title>
      </Head>
      <LayoutTwoWrapper data={data} >
       
          
          <Box display='flex' justifyContent='center' my={4} >
            {
              data?.evolutionQuestion && <Typography component='p' textAlign='center' sx={{ color: '#634F20', fontWeight: '300', fontSize: '18px', lineHeight: '25px' }}

                dangerouslySetInnerHTML={{ __html: data?.reviewPrompt }}
              ></Typography>
            }
          </Box>
          <Box>
            {!isMobile && <DIrectionCode />}
            {isMobile && <MobileView />}
          </Box>

        </LayoutTwoWrapper>
     
    </>
  );
};

export default index;