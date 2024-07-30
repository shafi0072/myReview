import React, { useContext, useState } from 'react';
import LayoutOne from '../../core/Layout/LayoutOne';
import { Box, Rating, Typography, useMediaQuery, useTheme, TextareaAutosize, TextField, Checkbox, Grid } from '@mui/material';
import { LandingPageContext } from '@/src/Store/ContextApi';
import MinHeightTextarea from '../../core/inputs/MuiTextArea';
import PrimaryButton from '../../core/Buttons/PrimaryButton';
import Head from 'next/head';
import LayoutTwoWrapper from '../../core/Layout/LayoutTwo'
import axios from 'axios';
import { useRouter } from 'next/router';
import ButtonTwo from '../../core/Buttons/ButtonTwo';
const index = () => {
  const [data, setData, setValue, value, submitableDataTwo, setSubmitableDataTwo, submitableData] = useContext(LandingPageContext)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down(870));
  const isMidView = useMediaQuery((theme) => theme.breakpoints.down(1380));
  const theme = useTheme();
  const [reviewData, setReviewData] = useState('');
  const router = useRouter()
  const { id } = router.query
  const getRows = () => {
    if (isMobile) return 6; // For mobile devices, set 6 rows
    if (isMidView) return 8; // For mid-size devices, set 8 rows
    return 10; // For larger devices, set 10 rows
  };
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let datas = JSON.stringify({
      query: `mutation {
      createUser(
        id: "${id + generateRandomString(10)}",
        dashboardId: "${id}",
        firstName: "odd",
        lastName: "odd",
        email:"odd",
        phoneNumber: "odd",
        checkIn: "odd",
        checkOut: "odd",
        reviewStars: "${submitableData?.reviewStars || data?.thereshold}",
        reviewDate: "odd",
        guestFeedback: "${submitableData?.guestFeedback}",
        address: "odd",
        country: "odd",
        state: "odd",
        city: "odd",
        postCode: "odd",
        guestId: "odd",
        salutation: "odd",
        age: "odd",
        mobileNumber: "odd",
        passportNumber: "odd",
        dateOfBirth: "odd",
        gender: "odd",
        nationality: "odd",
        language: "odd",
        blacklist: "odd",
        smocker: "odd",
        VIP: "odd",
        profileNote: "odd",
        loyalty: "odd",
        numberOfvisits: "odd",
        businessSourced: "odd",
        numberOfPeoples: "odd",
        numberOfRooms: "odd",
        bookingRefarenced: "odd",
        ratePlan: "asd",
        roomType: "odd",
        memberNumber: "odd",
        reservationType: "odd",
        bookingAgentName: "odd",
        checkinRceptionist: "odd",
        checkoutReceptionist: "odd",
        receptionNote: "odd",
        serverName: "odd",
        receptionType: "Front Desk",
        guideName: "odd",
        therapistName: "odd"
      ) {
        id
        dashboardId
        firstName
        lastName
        email
        phoneNumber
        checkIn
        checkOut
        reviewStars
        reviewDate
        guestFeedback
        address
        country
        state
        city
        postCode
        guestId
        salutation
        age
        mobileNumber
        passportNumber
        dateOfBirth
        gender
        nationality
        language
        blacklist
        smocker
        VIP
        profileNote
        loyalty
        numberOfvisits
        businessSourced
        numberOfPeoples
        numberOfRooms
        bookingRefarenced
        ratePlan
        roomType
        memberNumber
        reservationType
        bookingAgentName
        checkinRceptionist
        checkoutReceptionist
        receptionNote
        serverName
        receptionType
        guideName
        therapistName
      }
    }`,
      variables: {}
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://reviewoso-bac-7ec066579c00.herokuapp.com/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: datas
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

  };

  console.log({submitableDataTwo})
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
                  <TextField name="firstName" onChange={(e) => setSubmitableDataTwo({...submitableDataTwo, [e.target.name] : e.target.value})} sx={{ mr: 1, }} id="outlined-basic" label="First Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} lg={6} md={6} sm={12}>
                  <TextField name="lastName" onChange={(e) => setSubmitableDataTwo({...submitableDataTwo, [e.target.name] : e.target.value})} id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
                </Grid>
              </Grid>
              <TextField name="phoneNumber" onChange={(e) => setSubmitableDataTwo({...submitableDataTwo, [e.target.name] : e.target.value})} sx={{ my: 1 }} id="outlined-basic" label="Mobile" variant="outlined" fullWidth />
              <TextField name="email" onChange={(e) => setSubmitableDataTwo({...submitableDataTwo, [e.target.name] : e.target.value})}  sx={{ mb: 1 }} id="outlined-basic" label="Email" variant="outlined" fullWidth />
               <Box display='flex'  mb={2}><input type="checkbox" class="form-check-input colorCheck" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1" style={{marginLeft:'2%',color: 'grey'}}>I agree to be contacted by the hotel regarding my recent stay and to receive updates on how my feedback is being addressed.</label>
                </Box>

                <Box display='flex' justifyContent='start'>
                  <ButtonTwo text='Submit' type="submit" />
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