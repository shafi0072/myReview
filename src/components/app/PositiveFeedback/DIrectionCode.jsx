import { LandingPageContext } from '@/src/Store/ContextApi';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import SimpleSnackbar from '../ReviewSubmit/SnackBar';

const DIrectionCode = () => {
  const [data, setData] = useContext(LandingPageContext);
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.parse(localStorage.getItem('reviewComment'))).then(() => {
      setOpen(true)
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    // <Box>
    //   <Box px={2} display='flex' flexDirection='row' justifyContent='space-between'>
    //     <Box display='flex' flexDirection='column' width='100%'>
    //       <Box my={4} borderBottom={`7px dashed ${theme.palette.primary.main}`}>
    //         <Typography variant='h4' fontWeight='bolder' color={theme.palette.secondary.main}>
    //           Copy Your <br /> Feedback
    //         </Typography>
    //         <Typography variant='h6' color={theme.palette.secondary.main} sx={{ my: 4 }}>
    //           Click on the copy icon to the right to save your feedback from the previous step to your clipboard.
    //         </Typography>
    //       </Box>
    //     </Box>
    //     <Box display='flex' flexDirection='column' alignItems='center' mx={2}>
    //       <Box my={4}>
    //         <Typography variant='h4' fontWeight='bolder' textAlign='center' color={theme.palette.secondary.main}>
    //           STEP <br /> <Typography variant='h2' fontWeight='bolder' >01</Typography>
    //         </Typography>

    //       </Box>
    //       <Box width='10px' height='30vh' sx={{ background: theme.palette.primary.main }}>

    //       </Box>
    //     </Box>
    //     <Box display='flex' mx={2} flexDirection='column' >
    //       <Box my={4} mx={10}>
    //         <Box width='100%' mt={10}>
    //           <img src="https://landing.nolimits.digital/wp-content/uploads/2024/04/copy-icon.svg" alt="" />
    //         </Box>
    //       </Box>

    //     </Box>
    //   </Box>

    //   <Box px={2} display='flex' flexDirection='row' justifyContent='space-between'>
    //     <Box display='flex' mx={1} flexDirection='column' my={10}>


    //       {
    //         data?.providers?.map((items, index) => {
    //           return items?.status === "Enabled" && <Box key={index}  mx={10}>
    //           <Box width='100%' >
    //             <Link href={items?.link} target='_blank'><img src={items?.icon} style={{maxWidth:'120px'}} alt="" /></Link>
    //           </Box>
    //         </Box>
    //         })
    //       }


    //     </Box>
    //     <Box display='flex' flexDirection='column' alignItems='center' mx={2}>
    //       <Box my={4}>
    //         <Typography variant='h4' fontWeight='bolder' textAlign='center' color={theme.palette.secondary.main}>
    //           STEP <br /> <Typography variant='h2' fontWeight='bolder' >02</Typography>
    //         </Typography>

    //       </Box>
    //       <Box width='10px' height='30vh' sx={{ background: theme.palette.primary.main }}>
    //       </Box>
    //     </Box>
    //     <Box display='flex' flexDirection='column' width='100%'>
    //       <Box my={4} borderBottom={`7px dashed ${theme.palette.primary.main}`}>
    //         <Typography textAlign='end' variant='h4' fontWeight='bolder' color={theme.palette.secondary.main}>
    //           Choose a <br /> Review Site
    //         </Typography>
    //         <Typography textAlign='end' variant='h6' color={theme.palette.secondary.main} sx={{ my: 4 }}>
    //           Select one of the review sites listed. Simply paste your feedback into their review form and submit.
    //         </Typography>
    //       </Box>
    //     </Box>


    //   </Box>
    //   <Box>
    //   <Typography textAlign={'center'} mt={2} variant='h3' color={theme.palette.secondary.main} fontWeight='bolder'>

    //         {data?.thankYouMessage}
    //       </Typography>
    //   </Box>
    // </Box>
    <Box>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 6, md: 10 }} my={2}>
        <Grid item xs={2} sm={4} md={4} >
          <Box sx={{ borderBottom: `10px dashed ${theme.palette.primary.main}` }}>
            <Typography variant="h4" fontWeight='bolder' color={theme.palette.secondary.main}>Copy Your <br />Feedback</Typography>
            <Typography sx={{ my: 2 }} variant="h6" color={theme.palette.secondary.main}>Click on the copy icon to the right to save your feedback from the previous step to your clipboard.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={2} >
          <Box>
            <Typography textAlign='center' variant="h3" fontWeight='bolder' color={theme.palette.secondary.main}>STEP<br />01</Typography>
            <Box display='flex' justifyContent='center'>
              <Box width='10px' height='200px' sx={{ background: theme.palette.primary.main }}></Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
          <Box onClick={copyToClipboard}  display='flex' justifyContent='center' alignItems='center' sx={{ pt: 10, cursor:'pointer' }}>
            <img style={{ width: '40%' }} src='https://landing.nolimits.digital/wp-content/uploads/2024/04/copy-icon.svg' />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 6, md: 10 }} my={2}>
        <Grid item xs={2} sm={4} md={4} >

          <Box display='flex' mx={1} flexDirection='column' my={10}>


            {
              data?.providers?.map((items, index) => {
                return items?.status === "Enabled" && <Box key={index} mx={10}>
                  <Box width='100%' >
                    <Link href={items?.link} target='_blank'><img src={items?.icon} style={{ maxWidth: '100px' }} alt="" /></Link>
                  </Box>
                </Box>
              })
            }


          </Box>

        </Grid>
        <Grid item xs={2} sm={4} md={2} >
          <Box>
            <Typography textAlign='center' variant="h3" fontWeight='bolder' color={theme.palette.secondary.main}>STEP<br />02</Typography>
            <Box display='flex' justifyContent='center'>
              <Box width='10px' height={data?.providers?.length ? '350px' : '200px'} sx={{ background: theme.palette.primary.main }}></Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
          <Box sx={{ borderBottom: `10px dashed ${theme.palette.primary.main}` }}>
            <Typography variant="h4" fontWeight='bolder' textAlign='end' color={theme.palette.secondary.main}>Choose a<br />Review Site</Typography>
            <Typography sx={{ my: 2 }} variant="h6" textAlign='end' color={theme.palette.secondary.main}>Select one of the review sites listed. Simply paste your feedback into their review form and submit.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Typography textAlign={'center'} mt={2} variant='h3' color={theme.palette.secondary.main} fontWeight='bolder'>
          {data?.thankYouMessage}
        </Typography>
      </Box>
      <SimpleSnackbar open={open} setOpen={setOpen}/>
    </Box>
  );
};

export default DIrectionCode;