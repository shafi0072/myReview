import React, { useContext } from 'react';
import { LandingPageContext } from '../../../store/ContextApi';
import Image from 'next/image';
import { Checkbox } from '@mui/material';

const Index = () => {
  const [data, setData] = useContext(LandingPageContext)
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // console.log(data)
  return (
    <div className=" pt-6 md:pt-24 lg:pt-1 xl:pt-2 bg-white flex justify-center items-center h-full  ">
      <div className=" w-full    mx-auto h-screen flex justify-center items-center">
        <div className=" w-full   ">
          <div className="text-center  flex justify-center items-center w-full">
            <Image
              height={data?.logoSize}
              width={data?.logoSize}
              className={` w-[${data?.logoSize}] h-[${data?.logoSize}]  `}
              src={data?.logo}
              alt="logo"
            />
          </div>
          <p className="py-5 px-6 lg:px-11 text-[#634F20] opacity-75 text-center text-[17px] md:text-xl ">
            We sincerely regret that your experience did not meet your
            expectations. Your feedback is invaluable to us as it helps us to
            improve our services and ensure that all our guests enjoy their
            stay. Please fill out the form below with your contact details, and
            one of our team members will reach out to you promptly.
          </p>
          <div className=" mx-auto text-[#634F20] w-full px-8 lg:w-[75%] ">
            <div className="grid grid-cols-1 md:grid-cols-2 text-[#634F20] gap-4 py-2">
              <input
                type="text"
                className="text-[#634F20] border-opacity-30 border rounded py-3 font-normal pl-2"
                placeholder="First name"
              />
              <input
                type="text"
                className="text-[#634F20] border-opacity-30 border py-3 rounded font-normal pl-2"
                placeholder="Last name"
              />
            </div>
            <input
              type="number"
              name=""
              id=""
              placeholder="Mobile"
              className="text-[#634F20] border-opacity-30 border py-3 rounded w-full font-normal my-2 pl-2"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="text-[#634F20] border-opacity-30 border py-3 rounded w-full font-normal my-2 pl-2"
            />
            <div>
              {/* <Checkbox   /> */}
              <input type="checkbox" />
              <span>
                {" "}
                I agree to be contacted by the hotel regarding my recent stay
                and to receive updates on how my feedback is being addressed.
              </span>
            </div>

            <div className="text-left my-2">
              <button className="text-right bg-[#EBBC4C] text-white p-2 px-4 uppercase rounded font-normal">
                Submit
              </button>
            </div>
          </div>
          <p className="pt-5 text-center px-5 md:px-11 text-[#634F20] opacity-75 ">
            We would appreciate the opportunity to discuss your experience
            further and see how we can make things right. Thank you for giving
            us the chance to address your concerns. If you would like to publish
            your review you can click here. We are eager to understand more
            about your experience and discuss ways to improve it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;