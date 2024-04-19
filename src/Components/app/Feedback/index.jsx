import React, { useContext } from 'react';
import { LandingPageContext } from '../../../store/ContextApi';
import Image from 'next/image';

const Index = () => {
  const [data, setData] = useContext(LandingPageContext)
  // console.log(data)
  return (
    <div className="bg-[#F5F5F5]">
      <div className="bg-white w-[50%] mx-auto h-screen flex justify-center items-center">
        <div className=" w-full  ">
          <div className="text-center  flex justify-center items-center w-full">
            <Image
              height={data?.logoSize}
              width={data?.logoSize}
              className={` w-[${data?.logoSize}] h-[${data?.logoSize}]  `}
              src={data?.logo}
              alt="logo"
            />
          </div>
          <p className="py-5">{data?.feedbackPrompt}</p>
          <div className="w-2/3 mx-auto">
            <div className="grid grid-cols-2 gap-4 py-2">
              <input
                type="text"
                className="border-slate-600 border-opacity-30 border rounded py-2 font-normal pl-2"
                placeholder="Name"
              />
              <input
                type="number"
                className="border-slate-600 border-opacity-30 border py-2 rounded font-normal pl-2"
                placeholder="Phone"
              />
            </div>
            <input
              type="email"
              name=""
              id=""
              placeholder="email"
              className="border-slate-600 border-opacity-30 border py-2 rounded w-full font-normal my-2 pl-2"
            />
            <textarea
              placeholder="message"
              name=""
              id=""
              cols="30"
              rows="6"
              className="border-slate-600 border-opacity-30 border rounded w-full my-3 resize-none  pl-2"
            ></textarea>
            <div className="text-right">
              <button className="text-right bg-[#EBBC4C] text-white p-2 px-4 uppercase rounded font-normal">
                Submit
              </button>
            </div>
          </div>
          <p className="py-5">{data?.getPrompt}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;