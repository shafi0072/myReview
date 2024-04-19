import { LandingPageContext } from '@/src/store/ContextApi';
import { Button, Rating } from '@mui/material';
import React, { useContext } from 'react';

const Index = ({ children }) => {
  const [data, setData] = useContext(LandingPageContext)
  return (
    <>
      {data?.layout === "layoutOne" && (
        <section className="flex flex-col lg:flex-row  w-full  justify-around">
          <div className="mx-auto text-center w-full">
            <div className="flex justify-center">
              {/* <img
                src={data?.logo}
                style={{ width: `${data?.logoSize}%` }}
                alt=""
              /> */}
            </div>
            {children}
          </div>
          {/* <div className="h-full">
            <img src={data?.featuredImage} alt="" className="h-full" />
          </div> */}
        </section>
      )}

      {data?.layout === "layoutTwo" && (
        <section className="h-screen  items-center justify-center">
          <div className="mx-auto text-center ">
            <div className="flex justify-center">
              {/* <img src={data?.logo} alt="" /> */}
            </div>
            {children}
          </div>
        </section>
      )}
    </>
  );
};

export default Index;