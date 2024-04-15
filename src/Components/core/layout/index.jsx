import { LandingPageContext } from '@/src/store/ContextApi';
import React, { useContext } from 'react';

const Index = ({ children }) => {
  const [data, setData] = useContext(LandingPageContext)
  return (
    <>
     {data?.layout === 'layoutOne' && <section className='h-screen grid grid-cols-2 items-center justify-center'>
        <div className='mx-auto text-center w-2/3'>
          <div className='flex justify-center'>
            <img src={data?.logo} style={{width: `${data?.logoSize}%`}} alt="" />
          </div>
          {children}
        </div>
        <div className='h-full'>
          <img
            src={data?.featuredImage}
            alt=''
            className='h-full'
          />
        </div>
      </section>}

      {data?.layout === 'layoutTwo' && <section className='h-screen py-[20%] items-center justify-center'>
        <div className='mx-auto text-center w-2/3'>
          <div className='flex justify-center'>
            <img src={data?.logo} alt="" />
          </div>
          {children}
        </div>
      </section>}
    </>
  );
};

export default Index;