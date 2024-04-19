import Image from "next/image";
import { useContext } from "react";
import { LandingPageContext } from "../../../store/ContextApi";
import { Divider } from "@mui/material";

const Review = () => {
    const [data, setData] = useContext(LandingPageContext);
    console.log(data);
    return (
      <div className=" bg-[#F5F5F5]  h-full pt-1 lg:pt-28 flex justify-center items-center  ">
        <div className="bg-white w-full mx-auto shadow-sm  h-full ">
          <div className=" flex justify-center  pt-20  items-center w-full ">
            <div>
              <div className="text-center  flex justify-center items-center w-full">
                <Image
                  height={data?.logoSize}
                  width={data?.logoSize}
                  className={` w-[${data?.logoSize}] h-[${data?.logoSize}]  `}
                  src={data?.logo}
                  alt="logo"
                />
              </div>
              <p className=" px-2 md:px-12 my-3 text-[#634F20] text-xl  ">
                Thank you so much for your positive feedback and we are so glad
                to hear you enjoyed your stay with us! If you have a moment, we
                would love for you to share your thoughts on one of the review
                sites listed below. It really helps fellow travelers get to know
                us better and makes a big difference.
              </p>
              <p className=" px-4 text-center md:px-24 my-3 text-[#634F20] text-xl ">
                {" "}
                Thanks again for being such a wonderful part of our hotel
                family!{" "}
              </p>
            </div>
          </div>

          {/* step */}

          <div className="my-14">
            {/*  */}
            <div className="flex px-4 lg:px-14 justify-between ">
              <div className=" order-2 md:order-1 w-[60%] lg:w-[45%] pr-4  ">
                <h2 className="text-3xl text-left font-bold  text-[#634F20] ">
                  {" "}
                  Copy Your <br /> FeedBack{" "}
                </h2>
                <p className=" my-3 text-[#484534] text-left text-xl font-semibold text-wrap ">
                  Click on the copy icon to the right to save your feedback from
                  the previous step to your .
                </p>
                <hr className=" my-12  hidden md:block  border-b-8 border-[#EBBB4C] border-dashed  " />
              </div>
              <div className=" order1 md:order-2 w-[40%] md:w-[10%] text-4xl font-bold  ">
                <div className="text-[#634F20]  pl-9 pb-4 ">
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
            <div className="flex px-4 mt-32  lg:px-14 justify-between ">
              <div className=" hidden md:block order-2 pt-16 mx-auto md:order-1 w-[1%] md:w-[60%] lg:w-[45%] pr-4  ">
                <div className="flex flex-col justify-center items-center gap-2 ">
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
              <div className=" order1 md:order-2 w-[40%]   md:w-[10%] text-4xl font-bold  ">
                <div className="text-[#634F20] pl-9 pb-4  ">
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

              <div className=" order-3 pt-5 text-left md:text-right flex flex-col justify-center items-center gap-2   w-[60%] md:w-[45%]  ">
                <div>
                  <h2 className="text-3xl text-left md:text-right font-bold  text-[#634F20] ">
                    Choose a <br /> Review Site
                  </h2>
                  <p className=" my-3 text-[#484534] text-left md:text-right text-xl font-semibold text-wrap ">
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
          <h1 className=" text-5xl text-left md:text-center font-bold  my-5 text-[#634F20] ">
            {" "}
            Thank You{" "}
          </h1>
        </div>
      </div>
    );
};

export default Review;