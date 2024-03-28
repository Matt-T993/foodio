import React from "react";
import { Text, Heading, Button, Img } from "../../components";

export default function Header() {
  return (
    <div className="w-full py-[96px] px-6 ">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="flex flex-row justify-between items-center md:flex-col">
          <div className="w-[50%] flex flex-col pr-8 md:w-full md:items-center">
            <Heading
              size="4xl"
              as="h1"
              className="flex !text-gray-900_02 !font-opensans"
            >
              <p className="text-gray-900_02 md:text-center">
                Best Restaurant In <span className="text-red-400">Town.</span>
              </p>
            </Heading>
            <Text as="p" className="w-[91%] mt-[15px] !text-gray-800">
              We provide best food in town, we provide home delivery and dine in
              services.
            </Text>
            <div className="flex flex-row sm:flex-col justify-start mt-9 gap-6 sm:gap-5 mb-6 ">
              <Button
                size="5xl"
                shape="round"
                className="sm:px-5 font-semibold min-w-[232px]"
              >
                Order now
              </Button>
              <Button
                color="red_400_19"
                size="5xl"
                shape="round"
                className="sm:px-5 font-semibold min-w-[232px]"
              >
                Reservation
              </Button>
            </div>
          </div>
          <div className="w-[50%] flex flex-col md:w-full md:items-center">
            <Img
              src="images/img_illustration.png"
              alt="illustration"
              className="w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
