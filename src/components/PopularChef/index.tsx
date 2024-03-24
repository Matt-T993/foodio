import React from "react";
import { Text, Heading, Button, Img } from "../../components";

export default function PopularChef() {
  return (
    <div className="flex flex-row justify-center w-full md:px-5 max-w-[1112px]">
      <div className="flex flex-col items-center justify-start w-full">
        <Heading size="3xl" as="h2" className="!font-opensans text-center">
          Our Popular Chef
        </Heading>
        <div className="flex flex-row md:flex-col w-full mt-[53px] gap-10">
          <div className="flex flex-col items-center justify-start w-[31%] md:w-full gap-[43px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full bg-gray-900_04 rounded-[50px]">
                <Img
                  src="images/img_image_1.png"
                  alt="imageone_one"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                />
              </div>
            </div>
            <Heading as="h3">Betran Komar</Heading>
            <Text size="lg" as="p" className="!text-gray-500_01">
              Head chef
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[31%] md:w-full gap-[43px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full pt-2 bg-gradient1 rounded-[50px]">
                  <Img
                    src="images/img_image_3.png"
                    alt="imagethree_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                  />
                </div>
              </div>
            </div>
            <Heading as="h4">Ferry Sauwi</Heading>
            <Text size="lg" as="p" className="!text-gray-500_01">
              Chef
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[31%] md:w-full gap-[43px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full bg-lime-900 rounded-[50px]">
                <Img
                  src="images/img_image_2.png"
                  alt="imagetwo_one"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                />
              </div>
            </div>
            <Heading as="h5">Iswan Dracho</Heading>
            <Text size="lg" as="p" className="!text-gray-500_01">
              Chef
            </Text>
          </div>
        </div>
        <Button
          size="5xl"
          shape="round"
          className="mt-[89px] sm:px-5 font-semibold min-w-[235px] sm:min-w-full"
        >
          View all
        </Button>
      </div>
    </div>
  );
}
