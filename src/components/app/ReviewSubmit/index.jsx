import React, { useContext } from 'react';
import LayoutOneComponent from './LayoutOne';
import LayoutTwo from './LayoutTwo';
import { LandingPageContext } from '@/src/Store/ContextApi';

const index = () => {
  const [data, setData, setValue, value] = useContext(LandingPageContext)
  return (
   <>
    {data?.featuredImage !== "null" && data?.featuredImage ? <LayoutOneComponent/> : <LayoutTwo/>}
   
   </>
  );
};

export default index;