import { LandingPageContext } from '@/src/store/ContextApi';
import { Button, Rating, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react';

const Index = ({ children }) => {
  const [data, setData] = useContext(LandingPageContext)
  const mediaQuery = useMediaQuery('(max-width:600px)');
  return (
    <>
      {data?.featuredImage && data?.featuredImage !== "null"  &&(
        <section className="flex flex-col md:flex-row justify-around">
          <div className="w-full md:w-1/2 flex justify-center items-center bg-[#F9F9F9]  md:h-screen">
            {children}
          </div>
         {!mediaQuery && <div className=" w-full md:w-1/2 mt-4 md:mt-0 h-screen ">
            <Image
              height={800}
              width={500}
              className="h-full w-full object-cover object-center"
              src={data?.featuredImage}
              alt=""
            />
          </div>}
        </section>
      )  }

      {data?.featuredImage === "null" || !data?.featuredImage  && (
          <div className="w-[100%] mx-auto bg-white flex justify-center">
            {children}
          </div>
          
    
      )}
    </>
  );
};

export default Index;