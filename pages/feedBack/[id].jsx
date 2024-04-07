import { useRouter } from 'next/router';
import React from 'react';
import Feedback from '../../src/Components/app/Feedback'
const index = () => {
  const router = useRouter();



  return (
    <div>
      <Feedback/>
    </div>
  );
};

export default index;