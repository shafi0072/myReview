import { LandingPageContext } from '@/src/Store/ContextApi';
import { Box, Grid, useMediaQuery } from '@mui/material';
import React, { useContext } from 'react';

const LayoutOne = ({ children }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  
  const [data, setData] = useContext(LandingPageContext);

  return (
    <Box>
      <Grid container >
        <Grid item xs={12} lg={6} md={6} sm={12}> {/* Adjusted item size for medium screens */}
          <Box sx={{background:'white'}} mx={isMobile ? 2 : 0} my={isMobile ? 2 : 0} py={isMobile ? 5 : 0}>
            {children}
          </Box>
        </Grid>
        {isMobile ? null : (
          <Grid item xs={12} lg={6} md={6} sm={12}> {/* Adjusted item size for medium screens */}
            <Box
              sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${data?.featuredImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default LayoutOne;
