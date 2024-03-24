import React from "react";
import { Text, Heading, Button, Img, RatingBar } from "../../components";

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-[43px]">
      <div className="flex flex-row justify-center w-full md:px-5 max-w-[648px]">
        <Heading size="3xl" as="h2" className="!font-opensans text-center">
          What Our Customers Say
        </Heading>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
          <div className="flex flex-col items-center justify-start h-[60px] w-[60px] z-[1]">
            <Button
              color="white_A700"
              shape="circle"
              className="w-[60px] shadow-xs"
            >
              <Img src="images/img_group_30.svg" />
            </Button>
          </div>
          <div className="flex flex-row md:flex-col justify-center items-center w-[97%] md:w-full ml-[-30px] md:gap-5 md:ml-0">
            <div className="flex flex-row justify-center w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full gap-4 p-[50px] md:p-5 bg-white-A700 rounded-[16px]">
                <div className="flex flex-row justify-center w-[97%] md:w-full">
                  <div className="flex flex-row justify-center w-full">
                    <div className="h-[198px] w-full relative">
                      <Img
                        src="images/img_group_7730.svg"
                        alt="image"
                        className="justify-center h-[198px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                      <Text
                        as="p"
                        className="w-[87%] bottom-[16%] right-0 left-0 m-auto !text-gray-800_01 text-center absolute"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada ultricies nec quam{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[43%] md:w-full gap-2">
                  <Img
                    src="images/img_ellipse_28.png"
                    alt="circleimage"
                    className="h-[80px] w-[80px] md:h-auto rounded-[50%]"
                  />
                  <div className="flex flex-col items-center justify-start w-[67%] gap-2">
                    <Heading size="s" as="h2" className="text-center">
                      Starla Virgoun
                    </Heading>
                    <Text
                      size="s"
                      as="p"
                      className="!text-gray-800_01 text-center"
                    >
                      Financial advisor
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start h-[60px] w-[60px] ml-[-30px] md:ml-0">
              <Button
                color="white_A700"
                shape="circle"
                className="w-[60px] shadow-sm"
              >
                <Img src="images/img_group_32.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
