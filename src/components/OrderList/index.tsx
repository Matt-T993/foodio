import React from "react";
import { Img, Button, Text, Heading } from "../../components";

export default function OrderList() {
  return (
    <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
      <div className="flex flex-col items-center justify-center w-full gap-[53px] py-[45px] md:py-5 bg-white-A700 shadow-xs rounded-[20px]">
        <div className="flex flex-col items-center justify-start w-full gap-[46px]">
          <Heading size="lg" as="h3">
            Order list
          </Heading>
          <div className="h-px w-full bg-blue_gray-100" />
        </div>
        <div className="flex flex-col w-[83%] gap-16 md:gap-10">
          <div className="flex flex-col items-center justify-start w-full gap-[31px]">
            <div className="flex flex-row justify-between items-start w-full">
              <Heading as="h4" className="!text-black-900">
                Spaghetti
              </Heading>
              <div className="flex flex-col items-center justify-start h-[24px] w-[24px] mt-1">
                <Img
                  src="images/img_group_7758.svg"
                  alt="spaghetti_two"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-center w-[42%]">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <Button
                    color="white_A700"
                    size="xs"
                    shape="round"
                    className="w-[33px] shadow-md"
                  >
                    <Img src="images/img_vector_25.svg" />
                  </Button>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    2
                  </Text>
                  <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                    <Img
                      src="images/img_group_7721.svg"
                      alt="image"
                      className="h-[10px] w-[10px]"
                    />
                  </div>
                </div>
              </div>
              <Text size="xl" as="p" className="!text-gray-900">
                $24.1
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[31px]">
            <div className="flex flex-row justify-between items-start w-full">
              <Heading as="h4" className="!text-black-900">
                Linguine
              </Heading>
              <div className="flex flex-col items-center justify-start h-[24px] w-[24px] mt-1">
                <Img
                  src="images/img_group_7758.svg"
                  alt="image"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-center w-[42%]">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                    <Img
                      src="images/img_vector_25.svg"
                      alt="vectortwentyfiv"
                      className="h-px mt-[5px] mb-1"
                    />
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    2
                  </Text>
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                      <Img
                        src="images/img_group_7721.svg"
                        alt="image_one"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Text size="xl" as="p" className="!text-gray-900">
                $35.7
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[31px]">
            <div className="flex flex-row justify-between items-start w-full">
              <Heading as="h4" className="!text-black-900">
                Capellini
              </Heading>
              <div className="flex flex-col items-center justify-start h-[24px] w-[24px] mt-1">
                <Img
                  src="images/img_group_7758.svg"
                  alt="image"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-center w-[42%]">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                    <Img
                      src="images/img_vector_25.svg"
                      alt="vectortwentyfiv"
                      className="h-px mt-[5px] mb-1"
                    />
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    2
                  </Text>
                  <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                    <Img
                      src="images/img_group_7721.svg"
                      alt="image_one"
                      className="h-[10px] w-[10px]"
                    />
                  </div>
                </div>
              </div>
              <Text size="xl" as="p" className="!text-gray-900">
                $18.5
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="h-[168px] w-full sm:w-full relative">
            <Img
              src="images/img_line.svg"
              alt="line_one"
              className="justify-center h-[168px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
            <div className="flex flex-row justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-col items-start justify-start w-full gap-5">
                <Heading as="h4" className="!text-black-900">
                  Voucher Code
                </Heading>
                <div className="flex flex-row justify-start gap-[22px]">
                  <Button
                    color="gray_50_01"
                    size="4xl"
                    shape="round"
                    className="sm:px-5 min-w-[201px] !rounded-[15px]"
                  >
                    FREETOEAT
                  </Button>
                  <Button
                    color="blue_400"
                    shape="round"
                    className="w-[60px] !rounded-[15px]"
                  >
                    <Img src="images/img_group_170.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[26px]">
          <div className="flex flex-row justify-between w-full">
            <Heading as="h4" className="mb-px !text-black-900">
              Subtotal
            </Heading>
            <Text size="xl" as="p" className="!text-gray-900">
              $78.3
            </Text>
          </div>
          <div className="flex flex-row justify-between w-full">
            <Heading as="h4" className="mb-px !text-black-900">
              Tax fee
            </Heading>
            <Text size="xl" as="p" className="!text-gray-900">
              $3.5
            </Text>
          </div>
          <div className="flex flex-row justify-between w-full">
            <Heading as="h4" className="mb-px !text-black-900">
              Voucher
            </Heading>
            <Text size="xl" as="p" className="!text-gray-900">
              $5.0
            </Text>
          </div>
          <div className="flex flex-row justify-between w-full">
            <Heading as="h4" className="mb-px !text-black-900">
              Total
            </Heading>
            <Text size="xl" as="p" className="!text-gray-900">
              $76.8
            </Text>
          </div>
        </div>
        <Button
          size="2xl"
          shape="round"
          className="mb-1 sm:px-5 font-semibold min-w-[283px] !rounded-[15px] sm:min-w-full"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
