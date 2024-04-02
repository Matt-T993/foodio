import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Img, Button } from "../../components";

import MainNavbar from "components/MainNavbar";
import Footer from "components/Footer";

export default function AboutusPage() {
  return (
    <>
      <Helmet>
        <title>foodio - About Us</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[105px] md:mt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[78px] md:px-5 max-w-[1112px]">
          <MainNavbar />
          <div className="flex flex-row justify-between items-center md:flex-col-reverse">
            <div className="w-[50%] flex flex-col md:w-full md:items-center md:pt-8">
              <div className="flex flex-col items-center justify-start w-[537px] md:w-[437px]  sm:w-full sm:h-auto p-[52px]  bg-blue_gray-100_01 rounded-[271px]">
                <div className="flex flex-col items-center justify-start w-full max-w-[437px] sm:w-full sm:h-auto p-[45px] md:p-5 bg-blue_gray-100_01 rounded-[218px]">
                  <Img
                    src="images/img_unsplash_ebmyh7oo5wy.png"
                    alt="unsplash_one"
                    className="h-[346px] w-[346px] md:h-auto rounded-[50%]"
                  />
                </div>
              </div>
            </div>
            <div className="w-[50%] pl-10 flex flex-col md:w-[80%] sm:w-full md:items-center md:pl-0">
              <div className="flex flex-col items-start justify-start w-full gap-4 ">
                <Heading
                  size="2xl"
                  as="h1"
                  className="flex md:mx-auto !text-red-400 !font-tinos sm:text-2xl"
                >
                  <p className="text-gray_900_02 font-opensans ">
                    About our Restaurant
                  </p>
                </Heading>
                <Text
                  size="lg"
                  as="p"
                  className="!text-gray-800_01 mb-5 sm:text-lg"
                >
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Button
                size="5xl"
                shape="round"
                className="sm:px-5 font-semibold w-full max-w-[45%] sm:min-w-full"
              >
                Order now
              </Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center md:flex-col">
            <div className="w-[50%] flex flex-col md:w-[80%] sm:w-full md:items-center">
              <Text size="lg" as="p" className=" !text-gray-800_01 sm:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </Text>
            </div>
            <div className="w-[50%] pl-10  flex flex-col  md:items-center md:pt-8 md:pl-0 md:w-[80%] sm:w-full">
              <div className="flex flex-col items-center justify-start w-[537px] md:w-[437px]  sm:w-full sm:h-auto p-[52px]  bg-blue_gray-100_01 rounded-[271px]">
                <div className="flex flex-col items-center justify-start w-full max-w-[437px] sm:w-full sm:h-auto p-[45px] md:p-5 bg-blue_gray-100_01 rounded-[218px]">
                  <Img
                    src="images/img_unsplash_5dszncvdhd0.png"
                    alt="unsplash_three"
                    className="h-[354px] w-[354px] md:h-auto rounded-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col-reverse justify-between items-center w-full md:gap-10">
            <Img
              src="images/img_unsplash_lrawct7uwhy.png"
              alt="unsplash_five"
              className="w-[42%] md:w-full md:h-[629px] object-contain"
            />
            <div className="flex flex-col items-start justify-start w-[50%] md:w-full gap-[34px]">
              <div className="flex flex-col items-start justify-start w-full gap-1.5">
                <Heading
                  size="2xl"
                  as="h2"
                  className="flex !font-tinos !leading-[140%] md:mx-auto md:text sm:text-2xl"
                >
                  <p className="text-gray_900_02 font-opensans">
                    <span className="text-red-400">Owner </span>& Executive Chef
                  </p>
                </Heading>
                <Text
                  size="3xl"
                  as="p"
                  className="!text-gray-800_01 md:mx-auto sm:text-2xl"
                >
                  Ismail Marzuki
                </Text>
              </div>
              <div className="flex flex-row justify-start w-[91%] md:w-[80%] md:mx-auto">
                <div className="flex flex-col items-end justify-start w-full">
                  <div className="h-[309px] w-full relative md:h-[180px] sm:h-[220px]">
                    <Text
                      size="2xl"
                      as="p"
                      className="bottom-0 right-0 left-0 m-auto !text-gray-800_01 italic absolute md:text-2xl sm:text-lg"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                    <Heading
                      size="4xl"
                      as="h3"
                      className="left-0 top-0 m-auto !text-amber-800_6c !font-tinos opacity-0.2 absolute"
                    >
                      “
                    </Heading>
                  </div>
                  <Heading
                    size="4xl"
                    as="h4"
                    className="!text-amber-800_6c !font-tinos opacity-0.2 rotate-[180deg]"
                  >
                    “
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
