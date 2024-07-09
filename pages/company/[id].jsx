import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import ReviewSubmit from '@/src/components/app/ReviewSubmit';

const Index = ({ pointOfInterest }) => {
  return (
    <>
      <Head>
        <title>{pointOfInterest?.pageTitle}</title>
      </Head>
      <div>
        <ReviewSubmit data={pointOfInterest} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query; // Assuming `id` comes from the query parameters

  if (!id) {
    return {
      notFound: true,
    };
  }

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
    url: 'https://reviewoso-bac-7ec066579c00.herokuapp.com/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  let pointOfInterest = null;

  try {
    const response = await axios.request(config);
    pointOfInterest = response.data?.data?.pointOfInterest;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      pointOfInterest
    }
  };
}

export default Index;
