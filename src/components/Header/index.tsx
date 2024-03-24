import React from "react";
import { Text, Heading, Button, Img, RatingBar } from "../../components";

export default function Header() {
  return (
    <div className="flex flex-row md:flex-col justify-between items-center w-full mb-5 md:gap-10 max-w-[1240px]">
      <div className="flex flex-row justify-center w-[47%] md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Heading
            size="4xl"
            as="h1"
            className="flex !text-gray-900_02 !font-opensans"
          >
            <span className="text-gray-900_02">
              <>
                Best Restaurant
                <br />
                In{" "}
              </>
            </span>
            <span className="text-red-400">Town.</span>
          </Heading>
          <Text as="p" className="w-[91%] mt-[15px] !text-gray-800">
            We provide best food in town, we provide home delivery and dine in
            services.
          </Text>
          <div className="flex flex-row sm:flex-col justify-start mt-9 gap-6 sm:gap-5">
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
      </div>
      <Img
        src="images/img_illustration.png"
        alt="illustration"
        className="w-[48%] md:w-full md:h-[502px] object-cover"
      />
    </div>
  );
}
