import React from "react";
import { Img, Button, Text, Heading, RatingBar } from "../../components";

export default function OnlineMenu() {
  return (
    <div className="flex flex-col items-start justify-start w-[66%] md:w-full gap-12 md:items-center">
      <div className="flex flex-col items-start justify-start gap-2.5">
        <Heading size="lg" as="h2">
          PASTA
        </Heading>
        <div className="h-[2px] w-full bg-red-400" />
      </div>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="justify-center w-full gap-[30px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
            <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <div className="flex flex-row justify-center items-center h-[173px] w-[173px]">
                <Img
                  src="images/img_kisspng_italian.png"
                  alt="spaghetti_one"
                  className="h-[173px] w-[173px] md:h-auto rounded-[50%]"
                />
              </div>
              <Heading size="s" as="h3" className="mt-[21px] text-center">
                Spaghetti
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-1 rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h4" className="mt-[22px]">
                $12.05
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                      <Img
                        src="images/img_vector_25.svg"
                        alt="image"
                        className="h-px mt-[5px] mb-1"
                      />
                    </div>
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
            </div>
            <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <Img
                src="images/img_picture.png"
                alt="picture_one"
                className="w-[174px] md:h-auto object-cover"
              />
              <Heading size="s" as="h5" className="mt-[21px] text-center">
                Linguine
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-1 rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h6" className="mt-[22px]">
                $12.05
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                      <Img
                        src="images/img_vector_25.svg"
                        alt="vectortwentyfiv"
                        className="h-px mt-[5px] mb-1"
                      />
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    2
                  </Text>
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                      <Img
                        src="images/img_group_7721.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <Img
                src="images/img_picture.png"
                alt="picture_one"
                className="w-[174px] md:h-auto object-cover"
              />
              <Heading size="s" as="h5" className="mt-[21px] text-center">
                Capellini
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-1 rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h6" className="mt-[22px]">
                $12.05
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                      <Img
                        src="images/img_vector_25.svg"
                        alt="vectortwentyfiv"
                        className="h-px mt-[5px] mb-1"
                      />
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    2
                  </Text>
                  <Button
                    color="white_A700"
                    size="xs"
                    shape="round"
                    className="w-[33px] shadow-sm"
                  >
                    <Img src="images/img_group_7721.svg" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <Img
                src="images/img_picture.png"
                alt="picture_one"
                className="w-[174px] md:h-auto object-cover"
              />
              <Heading size="s" as="h5" className="mt-[18px] text-center">
                Fettuccine
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-[7px] rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h6" className="mt-[22px]">
                $12.05
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                      <Img
                        src="images/img_vector_25.svg"
                        alt="vectortwentyfiv"
                        className="h-px mt-[5px] mb-1"
                      />
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    0
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
            </div>
            <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <Img
                src="images/img_picture.png"
                alt="picture_one"
                className="w-[174px] md:h-auto object-cover"
              />
              <Heading size="s" as="h5" className="mt-[21px] text-center">
                Linguine
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-1 rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h6" className="mt-[22px]">
                $12.05
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                      <Img
                        src="images/img_vector_25.svg"
                        alt="vectortwentyfiv"
                        className="h-px mt-[5px] mb-1"
                      />
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    0
                  </Text>
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                      <Img
                        src="images/img_group_7721.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <Img
                src="images/img_picture.png"
                alt="picture_one"
                className="w-[174px] md:h-auto object-cover"
              />
              <Heading size="s" as="h5" className="mt-[21px] text-center">
                Capellini
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-1 rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h6" className="mt-[22px]">
                $12.05
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                      <Img
                        src="images/img_vector_25.svg"
                        alt="vectortwentyfiv"
                        className="h-px mt-[5px] mb-1"
                      />
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    0
                  </Text>
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                      <Img
                        src="images/img_group_7721.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <Img
                src="images/img_picture.png"
                alt="picture_one"
                className="w-[174px] md:h-auto object-cover"
              />
              <Heading size="s" as="h5" className="mt-[18px] text-center">
                Fusilli
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-[7px] rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h6" className="mt-[22px]">
                $12.05
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                      <Img
                        src="images/img_vector_25.svg"
                        alt="vectortwentyfiv"
                        className="h-px mt-[5px] mb-1"
                      />
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    0
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
            </div>
            <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <Img
                src="images/img_picture.png"
                alt="picture_one"
                className="w-[174px] md:h-auto object-cover"
              />
              <Heading size="s" as="h5" className="mt-[18px] text-center">
                Farfalle
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-[7px] rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h6" className="mt-[22px]">
                $12.05
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                    <Img
                      src="images/img_vector_25.svg"
                      alt="vectortwentyfiv"
                      className="h-px mt-[5px] mb-1"
                    />
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    0
                  </Text>
                  <Button
                    color="white_A700"
                    size="xs"
                    shape="round"
                    className="w-[33px] shadow-sm"
                  >
                    <Img src="images/img_group_7721.svg" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <Img
                src="images/img_picture.png"
                alt="picture_one"
                className="w-[174px] md:h-auto object-cover"
              />
              <Heading size="s" as="h5" className="mt-[19px] text-center">
                Penne Alla Vodak
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-1.5 rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h6" className="mt-[22px]">
                $12.05
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-end justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px]">
                    <Img
                      src="images/img_vector_25.svg"
                      alt="vectortwentyfiv"
                      className="h-px mt-[5px] mb-1"
                    />
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    0
                  </Text>
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-end justify-start h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-sm rounded-[16px]">
                      <Img
                        src="images/img_group_7721.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
