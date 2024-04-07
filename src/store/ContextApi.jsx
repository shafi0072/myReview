import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';
export const LandingPageContext = createContext()
const ContextApis = ({ children }) => {
  const [data, setData] = useState({});
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
   if(id){
    fetch(`https://myreview-so-back.vercel.app/landing/getLandingPagesByName/${id}`)
    .then(res => res.json())
    .then(datas => setData(datas))
    .catch(err => console.log(err))
   }
  }, [id])
  console.log({data})
  return (
    <LandingPageContext.Provider value={[data, setData]}>
      {children}
    </LandingPageContext.Provider>
  );
};

export default ContextApis;