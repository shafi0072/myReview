import React, { useContext, useState } from 'react';
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';
import { FaStar } from "react-icons/fa6";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownAlt } from "react-icons/md";
import Layout from '@/src/Components/core/layout'
import { LandingPageContext } from '@/src/store/ContextApi';
import { useRouter } from 'next/router';
import { Button, Rating } from '@mui/material';
import Image from 'next/image';

const Index = () => {
  const [data, setData] = useContext(LandingPageContext)
  const colors = ['#FF0000', '#FF9D00', '#FFE600', '#A8FF00', '#008000'];
  const stars = Array(5).fill();
  const [value, setvalue] = useState(0);
  const router = useRouter()
  console.log(data)

  const handleSubmit =()=>{
    if ( data?.evolutionThershold  >=  value  ) {
      router.push(`/feedBack/${data?.review_link}`);
    }else{
       router.push(`/socialRouter/${data?.review_link}`);
    }

  }

  return (
    <>
      <div className="w-full pt-40  md:pt-0 h-full flex flex-col gap-2 items-center justify-center">
        <Image
          height={data?.logoSize}
          width={data?.logoSize}
          className={` w-[${data?.logoSize}] h-[${data?.logoSize}]  `}
          src={data?.logo}
          alt="logo"
        />
        <Rating
          onChange={(e) => setvalue(e.target.value)}
          sx={{ mt: 2 }}
          name="size-large"
          defaultValue={0}
          size="large"
        />
        <p className="text-xl font-semibold text-[#634F20] ">Select Rating</p>
        <div>
          <textarea
            className="border block lg:hidden border-slate-400 mt-4"
            rows="6"
            cols="50"
          >
            {" "}
          </textarea>
          <textarea
            className="border hidden lg:block border-slate-400 mt-4"
            rows="6"
            cols="75"
          >
            {" "}
          </textarea>
          <br />
          <div className="text-left -mt-4 mb-6 ">
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                bgcolor: "#EBBC4C",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;