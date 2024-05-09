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
import { Box, Button, Rating, useMediaQuery } from "@mui/material";
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

  console.log({value})

  return (
    <Layout>
      <Box >
        <Box display='flex' justifyContent='center'>
          <Box width={`${data?.logoSize}%`}><img src={data?.logo} alt="" /></Box>
        </Box>
        {
          data?.evolutionQuestion && <p className="text-center my-5 text-xl text-gray-500">{data?.evolutionQuestion}</p>
        }
        <Box p={mediaQuery? 5 : 0}>
        <Box display='flex' justifyContent='center' my={5}>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              fontSize:'50px'
            }}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
        <textarea onChange={(e) => setReviewData(e.target.value)} id="message" rows="6" cols="50" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border-[2px] border-gray-400 focus:ring-[#ecbc4d] focus:border-[#ecbc4d]" style={{resize:'none'}} placeholder="Type your feedback here..."></textarea>


        </Box>
        <Box className='mt-2'>
          <Button disabled={(!reviewData && value < 1)  ? true : false} onClick={handleSubmit} variant="contained" color="warning" sx={{background:'#ecbc4d'}}>Submit</Button>
        </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
