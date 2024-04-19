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
  const [value, setvalue] = useState(2);
  const router = useRouter()
  console.log(data)
  return (
    <>
      {" "}
      <div>
        <div className=" flex py-8 md:p-0 flex-col md:flex-row justify-around">
          <div className=" w-full md:w-1/2  md:h-screen">
            <div className="w-full  h-full flex flex-col gap-2 items-center justify-center">
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
                defaultValue={2}
                size="large"
              />
              <p className="text-xl font-semibold text-[#634F20] ">
                Select Rating
              </p>
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
          </div>
          <div className=" w-full md:w-1/2 h-screen ">
            <Image
              height={800}
              width={500}
              className="h-full w-full"
              src={data?.featuredImage}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div>
        <p className="py-6">{data?.evolutionQuestion}</p>
        {data?.answerButtonStyle === "faces" && (
          <div className="flex justify-center">
            <BsFillEmojiFrownFill
              onClick={() => {
                if (data?.evolutionThershold >= 1) {
                  router.push(`/feedBack/${data?.review_link}`);
                }
              }}
              className="text-red-600 mx-2 bg-black rounded-full border-red-700 border text-5xl"
            />
            <BsFillEmojiFrownFill
              onClick={() => {
                if (data?.evolutionThershold >= 2) {
                  router.push(`/feedBack/${data?.review_link}`);
                } else {
                  router.push(`/socialRouter/${data?.review_link}`);
                }
              }}
              className="text-[#FF9D00] mx-2 text-5xl rounded-full border-2 bg-black border-orange-400"
            />
            <BsFillEmojiNeutralFill
              onClick={() => {
                if (data?.evolutionThershold >= 3) {
                  router.push(`/feedBack/${data?.review_link}`);
                } else {
                  router.push(`/socialRouter/${data?.review_link}`);
                }
              }}
              className="text-[#FFE600] mx-2 bg-black rounded-full border-yellow-500 border text-5xl"
            />
            <BsFillEmojiSmileFill
              onClick={() => {
                if (data?.evolutionThershold >= 4) {
                  router.push(`/feedBack/${data?.review_link}`);
                } else {
                  router.push(`/socialRouter/${data?.review_link}`);
                }
              }}
              className="text-[#A8FF00] mx-2 bg-black rounded-full border-lime-500 border text-5xl"
            />
            <BsFillEmojiSmileFill
              onClick={() => {
                if (data?.evolutionThershold >= 5) {
                  router.push(`/feedBack/${data?.review_link}`);
                } else {
                  router.push(`/socialRouter/${data?.review_link}`);
                }
              }}
              className="text-green-600 mx-2 bg-black rounded-full border-green-700 border text-5xl"
            />
          </div>
        )}
        {data?.answerButtonStyle === "stars" && (
          <div className="flex justify-center">
            {stars.map((_, index) => (
              <FaStar
                onClick={() => {
                  if (data?.evolutionThershold > index) {
                    router.push(`/feedBack/${data?.review_link}`);
                  } else {
                    router.push(`/socialRouter/${data?.review_link}`);
                  }
                }}
                key={index}
                className="text-[#FFE600] mx-2 rounded-full text-5xl"
              />
            ))}
          </div>
        )}
        {data?.answerButtonStyle === "thumbs" && (
          <div className="flex justify-center">
            <MdOutlineThumbUp className="text-green-600 mx-2  text-5xl" />
            <MdOutlineThumbDownAlt className="text-red-600 mx-2  text-5xl" />
          </div>
        )}
      </div> */}
    </>
  );
};

export default Index;