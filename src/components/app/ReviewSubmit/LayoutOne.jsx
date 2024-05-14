import React, { useContext, useState } from 'react';
import LayoutOne from '../../core/Layout/LayoutOne';
import { Box, Rating, Typography, useMediaQuery, useTheme, TextareaAutosize } from '@mui/material';
import { LandingPageContext } from '@/src/Store/ContextApi';
import PrimaryButton from '../../core/Buttons/PrimaryButton';
import { useRouter } from "next/router";

const LayoutOneComponent = () => {
  const [data, setData,  value, setValue] = useContext(LandingPageContext);
  const [reviewData, setReviewData] = useState('');
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down(765));
  const isMidView = useMediaQuery((theme) => theme.breakpoints.down(1380));
  const theme = useTheme();
  const router = useRouter()

  const getRows = () => {
    if (isMobile) return 6; // For mobile devices, set 6 rows
    if (isMidView) return 8; // For mid-size devices, set 8 rows
    return 10; // For larger devices, set 10 rows
  };

  const handleSubmit = () => {
    if (data?.thereshold >= value) {
      router.push(`/negetive-feedback/${data?.id}`);
    } else {
      router.push(`/positive-feedback/${data?.id}`);
    }
  };

  return (
    <LayoutOne>
      <Box height='100vh' display='flex' justifyContent='center' alignItems='center' px={5}>
        <Box px={4}>
          <Box width='100%' display='flex' justifyContent='center'>
            <img src={data?.logo} style={{ maxWidth: `${data?.logoSize}%` }} alt="" />
          </Box>
          <Box display='flex' justifyContent='center' my={2}>
            {data?.evolutionQuestion && 
              <Typography variant='h6' textAlign='center' sx={{ color: theme.palette.secondary.main }} dangerouslySetInnerHTML={{ __html: data?.evolutionQuestion }} />
            }
          </Box>
          <Box my={2} display='flex' justifyContent='center'>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                fontSize: '60px',
                color: '#ecbc4d'
              }}
            />
          </Box>
          <Box my={4} display='flex' justifyContent='center'>

              <Typography variant='h4' fontWeight='500' color={theme.palette.secondary.main} textAlign='center'>Select Rating</Typography>

          </Box>
          <form onSubmit={handleSubmit}>
            <Box my={2} display='flex' width='100%' justifyContent='center'>
              <TextareaAutosize
                onChange={(e) => setReviewData(e.target.value)}
                value={reviewData}
                placeholder="Type your feedback here..."
                rows={getRows()} // Set rows dynamically based on screen size
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  height:'20vh',
                  color: '#374151',
                  borderRadius: '2px',
                  borderWidth: '2px',
                  borderColor: 'lightgrey',
                  resize: 'none',
                  background: 'white',
                  '--placeholder-color': '#6F5821',
                  '--focus-border-color': 'lightgrey'
                }}
              />
            </Box>
            <Box display='flex' justifyContent='start'>
              <PrimaryButton text='Submit' onClick={handleSubmit} type="button" />
            </Box>
          </form>
        </Box>
      </Box>
    </LayoutOne>
  );
};

export default LayoutOneComponent;
