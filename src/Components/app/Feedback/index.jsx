import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { LandingPageContext } from '../../../store/ContextApi';
const index = () => {
  const [data, setData] = useContext(LandingPageContext)
  return (
    <div>
      <p className='py-5'>
        We want our customer 100% satisfied. Please Let Us Know Why You have a
        bad experience, so we can improve our service. Leave us your email to be
        contacted.
      </p>
      <div className='w-2/3 mx-auto'>
        <div className='grid grid-cols-2 gap-4 py-2'>
          <input
            type='text'
            className='border-slate-600 border-opacity-30 border rounded font-normal pl-2'
            placeholder='Name'
          />
          <input
            type='number'
            className='border-slate-600 border-opacity-30 border rounded font-normal pl-2'
            placeholder='Phone'
          />
        </div>
        <input
          type='email'
          name=''
          id=''
          placeholder='email'
          className='border-slate-600 border-opacity-30 border rounded w-full font-normal my-2 pl-2'
        />
        <textarea
        placeholder='message'
          name=''
          id=''
          cols='30'
          rows='6'
          className='border-slate-600 border-opacity-30 border rounded w-full my-3 resize-none  pl-2'
        ></textarea>
        <div className='text-right'>
          <button className='text-right bg-[#1877F2] text-white p-2 uppercase rounded font-normal'>
            Send
          </button>
        </div>
      </div>
      <p className='py-5'>
        We are trying our best to get better but if you do not wish address your
        concerns privately and prefer to post a review click here
      </p>
    </div>
  );
};

export default index;