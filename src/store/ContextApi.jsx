import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';
export const LandingPageContext = createContext();

const ContextApis = ({ children }) => {
  const [data, setData] = useState({});
  const [reviewData, setReviewData] = useState('')
  const [value, setValue] = useState(3)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { id } = router.query



  useEffect(() => {
    if (data?.sub) {
      setLoading(false);
    }
    else {
      setLoading(true)
    }
  }, [data])

  useEffect(() => {
    if (id) {

      const axios = require('axios');
      let data = JSON.stringify({
        query: `{
          pointOfInterest(id:"${id}") {
            id
            sub
            pageTitle
            evolutionQuestion
            reviewButtonType
            thereshold
            featuredImage
            logo
            logoSize
            reviewPrompt
            feedbackPrompt
            getPrompt
            thankYouMessage
            providers {
              id
              icon
              provider
              link
              status
            }
          }
        }`,
        variables: {}
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://spyros-review-backend-graphql.vercel.app/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setData(response.data?.data?.pointOfInterest);
          debugger
        })
        .catch((error) => {
          console.log(error);
        });
    }


  }, [id])
  console.log({ data })

  return (
    <>

{!loading && <LandingPageContext.Provider value={[data, setData, value, setValue, reviewData, setReviewData]}>
      {children}
    </LandingPageContext.Provider>}

    
    </>
  );
};

export default ContextApis;