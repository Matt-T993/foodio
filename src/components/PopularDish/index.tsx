import React from "react";
import { Text, Heading, Button, Img } from "../../components";

export default function PopularDish() {
  return (
    <div className="w-full px-6 py-[96px] bg bg-green-50">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="flex flex-row justify-between items-center md:flex-col-reverse">
          <div className="w-[50%] flex flex-col  md:w-full md:items-center">
            <Img
              src="images/img_kindpng_3443995.png"
              alt="kindpng3443995"
              className="w-full max-w-xl"
            />
          </div>
          <div className="w-[50%] flex flex-col md:w-full">
            <div>
              <Heading
                size="3xl"
                as="h2"
                className=" !text-red-400 !font-tinos !leading-[110%] pb-4 sm:text-5xl "
              >
                <p className="text-gray-900_02 font-opensans md:text-center ">
                  Our Most Popular
                  <span className="text-red-400 font-opensans"> Dish.</span>
                </p>
              </Heading>
              <Text
                as="p"
                className="!text-gray-800_01 pb-4 md:text-center sm:text-lg"
              >
                This dish is full of flavor and nutrition! Quinoa is a complete
                protein, providing all the essential amino acids your body
                needs, and is also a good source of fiber.
              </Text>
            </div>
            <Button
              size="5xl"
              shape="round"
              className="sm:px-5 font-semibold min-w-[235px] sm:min-w-full md:mx-auto md:mb-6 "
            >
              Order now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
