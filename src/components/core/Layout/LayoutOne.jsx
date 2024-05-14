import { LandingPageContext } from '@/src/Store/ContextApi';
import { Box, Grid, useMediaQuery } from '@mui/material';
import React, { useContext } from 'react';

const LayoutOne = ({ children }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down(765));
  
  const [data, setData] = useContext(LandingPageContext);

  return (
    <Box>
      <Grid container rowSpacing={1} spacing={2}>
        <Grid item xs={12} lg={6} md={6} sm={12}> {/* Adjusted item size for medium screens */}
          <Box px={5}>
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
