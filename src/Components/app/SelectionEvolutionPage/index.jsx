import React, { useContext, useState } from "react";
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownAlt } from "react-icons/md";
import Layout from "@/src/Components/core/layout";
import { LandingPageContext } from "@/src/store/ContextApi";
import { useRouter } from "next/router";
import { Button, Rating } from "@mui/material";
import Image from "next/image";
// import { Noto_Sans } from "next/font/google";
//  const noto_Sans = Noto_Sans({ subsets: ["Sans-serif"] });
const Index = () => {
  const [data, setData] = useContext(LandingPageContext);
  const colors = ["#FF0000", "#FF9D00", "#FFE600", "#A8FF00", "#008000"];
  const stars = Array(5).fill();
  const [value, setvalue] = useState(0);
  const router = useRouter();
  console.log(data);

  const handleSubmit = () => {
    if (data?.evolutionThershold >= value) {
      router.push(`/feedBack/${data?.review_link}`);
    } else {
      router.push(`/socialRouter/${data?.review_link}`);
    }
  };

  return (
    <>
      <div className="flex justify-center px-3 items-center h-full w-full pt-10 ">
        <div className="w-full   md:pt-0 h-full flex flex-col gap-2 items-center justify-center">
          <Image
            height={150}
            width={300}
            className={`  md:w-[${data?.logoSize}%]  md:h-[${data?.logoSize}%]  `}
            src={data?.logo}
            alt="logo"
          />
          <Rating
            onChange={(e) => setvalue(e.target.value)}
            sx={{ mt: 2, fontSize: "3.5rem", mt: "19px" }}
            name="size-large"
            defaultValue={0}
            size="large"
          />
          <p className="text-3xl   text-[#634F20] ">Select Rating</p>
          <div>
            <textarea
              placeholder="Type your feedback here..."
              className="border-[#E9E9E9] outline-none p-2  border-2 block-2 text-[#A99B7A] lg:hidden  mt-4 rounded-lg "
              rows="8"
              cols="42"
            ></textarea>

            <textarea
              className="border-[#E9E9E9] outline-none p-2  border-3 hidden text-[#A99B7A]  rounded-lg lg:block xl:hidden  mt-4"
              rows="8"
              cols="55"
              placeholder="Type your feedback here..."
            ></textarea>

            <textarea
              className="border-[#E9E9E9] outline-none focus:border-4 p-3 border-2 hidden text-[#A99B7A] rounded-lg xl:block  mt-4"
              rows="8"
              cols="75"
              placeholder="Type your feedback here..."
            ></textarea>

            <br />
            <div className="text-left lg:-mt-3 mb-6 ">
              <button
                onClick={handleSubmit}
                className=" bg-[#EBBC4C] px-5 py-2 text-white  rounded-sm "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
