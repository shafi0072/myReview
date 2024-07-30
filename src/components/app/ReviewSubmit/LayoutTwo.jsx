import React, { useContext, useState } from 'react';
import LayoutOne from '../../core/Layout/LayoutOne';
import { Box, Rating, Typography, useMediaQuery, useTheme, TextareaAutosize } from '@mui/material';
import { LandingPageContext } from '@/src/Store/ContextApi';
import MinHeightTextarea from '../../core/inputs/MuiTextArea';
import PrimaryButton from '../../core/Buttons/PrimaryButton';
import { useRouter } from "next/router";
import LayoutTwoWrapper from '../../core/Layout/LayoutTwo'
import axios from 'axios';

const LayoutTwo = () => {
  const [data, setData,  value, setValue, reviewData, setReviewData, submitableData, setSubmitableData] = useContext(LandingPageContext);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMidView = useMediaQuery((theme) => theme.breakpoints.down('md'));
  console.log({isMobile})
  const theme = useTheme();
  const router = useRouter()
  const {id} = router.query
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

  const handleSubmit = () => {
    if (data?.thereshold >= value) {
      router.push(`/negetive-feedback/${data?.id}`);
    } else {
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



      router.push(`/positive-feedback/${data?.id}`);
    }
  };
console.log({reviewData});
  return (

    
        <LayoutTwoWrapper  data={data} >
          <Box sx={{ textAlign: 'center' }} mt={2}>
            {data?.evolutionQuestion &&
              <Typography variant='p' lineHeight={1.5} textAlign='center' sx={{ color: '#634F20' }} dangerouslySetInnerHTML={{ __html: data?.evolutionQuestion }} className='openSans' />
            }
          </Box>
          <Box mt={2} display='flex' justifyContent='center'>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setSubmitableData({...submitableData, reviewStars: newValue.toString()})
                setValue(newValue);
              }}
              sx={{
                fontSize: '60px',
                color: '#ecbc4d'
              }}
            />
          </Box>
          <Box mb={4} display='flex' justifyContent='center'>

            <Typography variant='h4' fontWeight='500' color={theme.palette.secondary.main} textAlign='center'>Select Rating</Typography>

          </Box>
          <Box display='flex' justifyContent='center'>
            {/* <form  onSubmit={handleSubmit} >
            <Box my={2} mx={1} display='flex' width='100%' justifyContent='center'>
              <TextareaAutosize
                onChange={(e) => {setReviewData(e.target.value); localStorage.setItem('reviewComment', JSON.stringify(e?.target?.value))}}
                value={reviewData}
                className="custom-textarea"
                placeholder="Type your feedback here..."
                rows={getRows()} // Set rows dynamically based on screen size
                style={{
                  width: isMobile ? '100%' : isMidView ? '30rem'  : '45rem',
                  padding: '10px',
                  fontSize: '15px',
                  fontWeight:'700',
                  height:'20vh',
                  color: '#6F5821',
                  borderRadius: '2px',
                  borderWidth: '2px',
                  borderColor: '#E9E9E9',
                  resize: 'none',
                  background: 'white',
                  '--placeholder-color': '#6F5821',
                  '--placeholder-font-weigth': '300',
                  '--focus-border-color': 'lightgrey'
                }}
              />
            </Box>
            <Box mx={2} display='flex' justifyContent='start'>
              <PrimaryButton text='Submit' onClick={handleSubmit} type="button" />
            </Box>
          </form> */}
            <div class="form-group">

              <textarea onChange={(e) => setSubmitableData({...submitableData, guestFeedback:e.target.value})}  class="form-control fieldStyle" id="exampleFormControlTextarea1"  placeholder="Type your feedback here..." rows="8" cols="100"></textarea>
              <Box my={1} display='flex' justifyContent='start'>
                <PrimaryButton text='Submit' onClick={handleSubmit} type="button" />
              </Box>
            </div>
          </Box>
        </LayoutTwoWrapper>

    
  );
};

export default LayoutTwo;