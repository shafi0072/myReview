import Image from "next/image";
import { useContext } from "react";
import { LandingPageContext } from "../../../store/ContextApi";
import { Divider } from "@mui/material";
import React from "react";

const Review = () => {
    const [data, setData] = useContext(LandingPageContext);
    console.log(data);
    return (
      <div className="">
        <div className=" bg-[#F5F5F5]  h-full  xl:pt-[5vh] flex justify-center items-center  ">
        <div className="bg-white w-[50%] mx-auto shadow-sm  h-full ">
          <div className=" flex justify-center  pt-20   items-center w-full ">
            <div>
              <div className="text-center  flex justify-center items-center w-full">
                <Image
                   height={300}
                width={300}
                  className={` w-[${data?.logoSize}] h-[${data?.logoSize}]  `}
                  src={data?.logo}
                  alt="logo"
                />
              </div>
              <p className=" px-3 md:px-12 my-3 text-[#634F20] text-justify md:text-center text-base lg:text-xl  " dangerouslySetInnerHTML={{ __html: data?.reviewPrompt }}>
              </p>
              
            </div>
          </div>

          {/* step */}

          <div className="my-14 ">
            {/*  */}
            <div className="flex px-4 lg:px-14 justify-between ">
              <div className=" order-2 md:order-1 w-[60%] lg:w-[45%] pr-4  ">
                <h2 className=" text-2xl lg:text-3xl text-left font-bold  text-[#634F20] ">
                  {" "}
                  Copy Your <br /> FeedBack{" "}
                </h2>
                <p className=" my-3 text-[#484534] text-left text-base lg:text-xl font-semibold text-wrap ">
                  Click on the copy icon to the right to save your feedback from
                  the previous step to your .
                </p>
                <hr className=" my-12  hidden md:block  border-b-8 border-[#EBBB4C] border-dashed  " />
              </div>
              <div className=" order1 md:order-2 w-[40%] md:w-[10%] text-4xl md:text-2xl lg:text-4xl font-bold  ">
                <div className="text-[#634F20]  pl-9 md:pl-0 pb-4 ">
                  <h1> STEP </h1>
                  <h1 className=" font-extrabold text-5xl ">01</h1>
                </div>
                <Divider
                  orientation="vertical"
                  sx={{
                    backgroundColor: "#EBBB4C",
                    width: "10px",
                    mx: "auto",
                    my: "15px",
                  }}
                />
              </div>
              {/* <div className="hidden  pt-10  md:order-3 md:block "> */}
              <div className=" md:order-3   w-[1%] md:w-[45%] flex justify-center ">
                <Image
                  width={121}
                  height={135}
                  alt="logo"
                  src={
                    "https://landing.nolimits.digital/wp-content/uploads/2024/04/copy-icon.svg"
                  }
                />
              </div>
              {/* </div> */}
            </div>
            {/*  */}
            <div className="flex px-2 mt-32   w-full lg:px-6 justify-between ">
              <div className=" hidden md:block order-2 pt-[20vh] mx-auto md:order-1 w-[1%] md:w-[60%] lg:w-[45%] pr-4  ">
                <div className="flex flex-col justify-center items-center gap-2 ">
                  
                 {
                  data?.providers?.map((items, index) => {
                    if(items?.status === 'Enabled'){
                      return <img
                    key={index}
                    className=" w-[10%]"
                    src={items?.icon}
                    alt="pic"
                  />
                    }
                  })
                 }
                </div>
              </div>
              <div className=" order1 md:order-2 w-[40%]   md:w-[10%] text-4xl md:text-2xl lg:text-4xl font-bold  ">
                <div className="text-[#634F20] pl-9 md:pl-0 pb-4  ">
                  <h1> STEP </h1>
                  <h1 className=" font-extrabold text-5xl ">02</h1>
                </div>
                <Divider
                  orientation="vertical"
                  sx={{
                    backgroundColor: "#EBBB4C",
                    width: "10px",
                    mx: "auto",
                    py: "20px",
                  }}
                />
              </div>

              <div className=" order-3 pt-[20vh] pl-2  text-left md:text-right flex flex-col justify-center items-center gap-2   w-[60%] md:w-[45%]  ">
                <div>
                  <h2 className="text-2xl lg:text-3xl text-left md:text-right font-bold  text-[#634F20] ">
                    Choose a <br /> Review Site
                  </h2>
                  <p className=" my-3 text-[#484534] text-left md:text-right text-base lg:text-xl font-semibold text-wrap ">
                    Select one of the review sites listed. Simply paste your
                    feedback into their review form and submit.
                  </p>
                  <hr className=" my-12  hidden md:block  border-b-8 border-[#EBBB4C] border-dashed  " />
                </div>
                <div className=" block md:hidden ">
                  <div className="flex flex-col justify-start items-start gap-5 ">
                    <Image
                      height={100}
                      width={100}
                      className=" w-[70%] h-[70%]  "
                      src="https://landing.nolimits.digital/wp-content/uploads/2024/04/booking.svg"
                      alt="pic"
                    />
                    <Image
                      height={100}
                      width={100}
                      className=" w-[70%] h-[70%]   "
                      src="https://landing.nolimits.digital/wp-content/uploads/2024/04/booking.svg"
                      alt="hey"
                    />
                    <Image
                      width={121}
                      height={135}
                      alt="logo"
                      src={
                        "https://landing.nolimits.digital/wp-content/uploads/2024/04/tripadvisor.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className=" text-5xl text-left md:text-center font-bold  my-[12%] text-[#634F20] ">
            {" "}
            {data?.thankYouMessage}
          </h1>
        </div>
      </div>
      </div>
    );
};

export default Review;