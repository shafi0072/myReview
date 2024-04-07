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

const index = () => {
  const [evolutionMatches, setEvolutionMatches] = useState(0);
  const [data, setData] = useContext(LandingPageContext)
  const colors = ['#FF0000', '#FF9D00', '#FFE600', '#A8FF00', '#008000'];
  const stars = Array(5).fill();
  const router = useRouter()
  return (
    <div>
      <p className='py-6'>{data?.evolutionQuestion}</p>
      {data?.answerButtonStyle === 'faces' && <div className='flex justify-center'>
        <BsFillEmojiFrownFill onClick={() => {
          if (data?.evolutionThershold >= 1) {
            router.push(`/feedBack/${data?.review_link}`)
          }
        }} className='text-red-600 mx-2 bg-black rounded-full border-red-700 border text-5xl' />
        <BsFillEmojiFrownFill
          onClick={() => {
            if (data?.evolutionThershold >= 2) {
              router.push(`/feedBack/${data?.review_link}`)
            }
            else {
              router.push(`/socialRouter/${data?.review_link}`)
            }
          }}
          className='text-[#FF9D00] mx-2 text-5xl rounded-full border-2 bg-black border-orange-400' />
        <BsFillEmojiNeutralFill
          onClick={() => {
            if (data?.evolutionThershold >= 3) {
              router.push(`/feedBack/${data?.review_link}`)
            }
            else {
              router.push(`/socialRouter/${data?.review_link}`)
            }
          }}
          className='text-[#FFE600] mx-2 bg-black rounded-full border-yellow-500 border text-5xl' />
        <BsFillEmojiSmileFill
          onClick={() => {
            if (data?.evolutionThershold >= 4) {
              router.push(`/feedBack/${data?.review_link}`)
            }
            else {
              router.push(`/socialRouter/${data?.review_link}`)
            }
          }}
          className='text-[#A8FF00] mx-2 bg-black rounded-full border-lime-500 border text-5xl' />
        <BsFillEmojiSmileFill
          onClick={() => {
            if (data?.evolutionThershold >= 5) {
              router.push(`/feedBack/${data?.review_link}`)
            }
            else {
              router.push(`/socialRouter/${data?.review_link}`)
            }
          }}
          className='text-green-600 mx-2 bg-black rounded-full border-green-700 border text-5xl' />
      </div>
      }
      {data?.answerButtonStyle === 'stars' && <div className="flex justify-center">
        {stars.map((_, index) => (
          <FaStar onClick={() => {
            if (data?.evolutionThershold > index) {
              router.push(`/feedBack/${data?.review_link}`)
            }
            else {
              router.push(`/socialRouter/${data?.review_link}`)
            }
          }} key={index} className='text-[#FFE600] mx-2 rounded-full text-5xl' />
        ))}
      </div>}
      {data?.answerButtonStyle === 'thumbs' && <div className="flex justify-center">
        <MdOutlineThumbUp className='text-green-600 mx-2  text-5xl' />
        <MdOutlineThumbDownAlt className='text-red-600 mx-2  text-5xl' />
      </div>}
    </div>
  );
};

export default index;