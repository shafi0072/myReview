import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { LandingPageContext } from '../../../store/ContextApi';
const Index = () => {
  const [data, setData] = useContext(LandingPageContext)
  return (
    <div>
      <p className='py-6'>
        {data?.reviewPrompt}
      </p>

      <button className='my-5 flex text-xl rounded-full border border-black w-2/3 py-2 mx-auto justify-center'>
        {' '}
        <FcGoogle className='text-3xl text-[#1877F2] mx-2' />
        <span className='capitalize'> &nbsp;Google</span>
      </button>
      <button variant='black ' className='flex text-xl rounded-full border border-black w-2/3 py-2 mx-auto justify-center'>
        {' '}
        <FaFacebook className='text-3xl text-[#1877F2] mx-2' />
        <span className='capitalize'> &nbsp;Facebook</span>
      </button>
    </div>
  );
};

export default Index;