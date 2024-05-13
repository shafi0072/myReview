import React, { useContext, useState } from "react";
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownAlt } from "react-icons/md";
import { LandingPageContext } from "@/src/store/ContextApi";
import { useRouter } from "next/router";
import { Box, Button, Rating, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Layout from '../../../Components/core/layout'
import TextField from '@mui/material/TextField';

// import { Noto_Sans } from "next/font/google";
//  const noto_Sans = Noto_Sans({ subsets: ["Sans-serif"] });
const Index = () => {
  const [data, setData, value, setValue, reviewData, setReviewData] = useContext(LandingPageContext);
  const colors = ["#FF0000", "#FF9D00", "#FFE600", "#A8FF00", "#008000"];
  const stars = Array(5).fill();
  const mediaQuery = useMediaQuery('(max-width:1000px)');
  const router = useRouter();
  console.log(data);

  const handleSubmit = () => {
    if (data?.thereshold >= value) {
      router.push(`/feedBack/${data?.id}`);
    } else {
      router.push(`/socialRouter/${data?.id}`);
    }
  };

  console.log({ value })

  return (
    <>
      {
        data?.featuredImage !== 'null' ? (<Layout>
          <Box >
            <Box display='flex' justifyContent='center'>
              <Box width={`${data?.logoSize}%`}><img src={data?.logo} alt="" /></Box>
            </Box>
            {
              data?.evolutionQuestion && <p className="text-center mt-5 text-xl text-gray-500"

                dangerouslySetInnerHTML={{ __html: data?.evolutionQuestion }}
              ></p>
            }
            <Box p={mediaQuery ? 5 : 0}>
              <Box display='flex' justifyContent='center' mt={2}>
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
              <Box>
                <Typography variant="h5" textAlign='center' sx={{ color: '#635020' }} my={2}>Select Rating</Typography>
              </Box>
              <Box >
                <textarea
                  onChange={(e) => setReviewData(e.target.value)}
                  id="message"
                  rows="8"
                  cols="85" // Increasing the number of columns
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border-[2px] focus:ring-[#ecbc4d] focus:border-[#ecbc4d]"
                  style={{
                    resize: 'none',
                    background: 'white',
                    '--placeholder-color': '#ac9f83',
                    '--focus-border-color': '#ac9f83',
                    'fontSize': '16px' // Set initial border color
                  }}
                  placeholder="Type your feedback here..."
                />

              </Box>
              <Box className='mt-2'>
                <Button onClick={handleSubmit} variant="contained" color="warning" sx={{ background: '#ecbc4d', borderRadius: '3px', boxShadow: 'none', px: 3 }}>Submit</Button>
              </Box>
            </Box>
          </Box>
        </Layout>) : (
          <Box display='flex' justifyContent='center' mt={5}>
          <Box width={'45%'} height={'100vh'} className="bg-white" p={4} >
            <Box display='flex' justifyContent='center'>
              <Box width={`${data?.logoSize}%`}><img src={data?.logo} alt="" /></Box>
            </Box>
            {
              data?.evolutionQuestion && <p className="text-center mt-5 text-xl text-gray-500"

                dangerouslySetInnerHTML={{ __html: data?.evolutionQuestion }}
              ></p>
            }
            <Box p={mediaQuery ? 5 : 0}>
              <Box display='flex' justifyContent='center' mt={2}>
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
              <Box>
                <Typography variant="h5" textAlign='center' sx={{ color: '#635020' }} my={2}>Select Rating</Typography>
              </Box>
              <Box >
                <textarea
                  onChange={(e) => setReviewData(e.target.value)}
                  id="message"
                  rows="8"
                  cols="85" // Increasing the number of columns
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border-[2px] focus:ring-[#ecbc4d] focus:border-[#ecbc4d]"
                  style={{
                    resize: 'none',
                    background: 'white',
                    '--placeholder-color': '#ac9f83',
                    '--focus-border-color': '#ac9f83',
                    'fontSize': '16px' // Set initial border color
                  }}
                  placeholder="Type your feedback here..."
                />

              </Box>
              <Box className='mt-2'>
                <Button onClick={handleSubmit} variant="contained" color="warning" sx={{ background: '#ecbc4d', borderRadius: '3px', boxShadow: 'none', px: 3 }}>Submit</Button>
              </Box>
            </Box>
          </Box>

          </Box>
        )
      }
    </>
  );
};

export default Index;
