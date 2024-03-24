import React from "react";
import { Text, Heading, Button, Img, RatingBar } from "../../components";

export default function PopularDish() {
  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex flex-row md:flex-col justify-center items-start w-full gap-[13px] p-3.5 bg-green-50">
        <div className="h-[646px] w-[48%] md:w-full ml-[149px] md:ml-5 relative">
          <div className="flex flex-col items-end justify-start w-[89%] bottom-0 left-0 m-auto absolute">
            <div className="flex flex-row sm:flex-col justify-end items-center w-full sm:gap-5">
              <Img
                src="images/img_kisspng_leaf_pe.png"
                alt="kisspngleafpe"
                className="w-[32%] md:h-auto sm:w-full z-[1] object-cover"
              />
              <Img
                src="images/img_kindpng_3443995.png"
                alt="kindpng3443995"
                className="w-[96%] md:h-auto sm:w-full ml-[-160px] sm:ml-0 object-cover"
              />
            </div>
            <Img
              src="images/img_kisspng_leaf_pe_117x110.png"
              alt="kisspngleafpe"
              className="w-[19%] md:h-auto sm:w-full mt-[-74px] mr-[217px] md:mr-5 object-cover"
            />
          </div>
          <Img
            src="images/img_kisspng_leaf_pe_158x154.png"
            alt="kisspngleafpe"
            className="h-[158px] w-[24%] sm:w-full right-0 top-0 m-auto object-cover absolute"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-[31%] md:w-full mt-[91px] mr-[149px] gap-[35px] md:mt-0 md:mr-5">
          <div className="flex flex-col items-start justify-start w-full gap-4">
            <Heading
              size="3xl"
              as="h2"
              className="flex w-[80%] !text-red-400 !font-tinos !leading-[110%]"
            >
              <span className="text-gray-900_02 font-opensans">
                <>
                  Our Most <br />
                  Popular{" "}
                </>
              </span>
              <span className="text-red-400 font-opensans">Dish.</span>
            </Heading>
            <Text as="p" className="!text-gray-800_01">
              This dish is full of flavor and nutrition! Quinoa is a complete
              protein, providing all the essential amino acids your body needs,
              and is also a good source of fiber.
            </Text>
          </div>
          <Button
            size="5xl"
            shape="round"
            className="sm:px-5 font-semibold min-w-[232px] sm:min-w-full"
          >
            Order now
          </Button>
        </div>
      </div>
    </div>
  );
}
